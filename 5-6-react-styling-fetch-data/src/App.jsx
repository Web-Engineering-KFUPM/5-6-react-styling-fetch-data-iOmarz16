/*
===================================================================
React Lab — USER MANAGEMENT DASHBOARD
===================================================================
*/

import React, { useState, useEffect } from "react";
import { Container, Alert, Spinner } from "react-bootstrap";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import UserModal from "./components/UserModal";

function App() {
  // State variables
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetching user data from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError(err.message || "Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filtering users based on search term
  useEffect(() => {
    if (!searchTerm) {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, users]);

  // Modal handlers
  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="bg-primary text-white py-3 mb-4 shadow">
        <Container>
          <h1 className="h2 mb-0">User Management Dashboard</h1>
          <p className="mb-0 opacity-75">Manage and view user information</p>
        </Container>
      </header>

      {/* Main Content */}
      <Container className="mb-4">
        <SearchBar setSearchTerm={setSearchTerm} />

        {loading && <Spinner animation="border" />}
        {error && <Alert variant="danger">{error}</Alert>}

        {!loading && !error && (
          <UserList users={filteredUsers} onUserClick={handleUserClick} />
        )}
      </Container>

      {/* User Modal */}
      <UserModal show={showModal} user={selectedUser} onHide={handleCloseModal} />

      {/* Footer */}
      <footer className="bg-light py-4 mt-5">
        <Container>
          <p className="text-center text-muted mb-0">
            &copy; {new Date().getFullYear()} User Management Dashboard
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
