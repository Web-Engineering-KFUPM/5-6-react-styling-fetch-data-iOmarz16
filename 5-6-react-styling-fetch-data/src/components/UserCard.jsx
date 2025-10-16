import React from 'react'
import { Card, Button } from 'react-bootstrap'

function UserCard({ user, onUserClick }) {
  return (
    <Card className="user-card h-100">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <div className="user-avatar me-3">
            {user.name.charAt(0)}
          </div>
          <div>
            <Card.Title className="mb-0">{user.name}</Card.Title>
            <small className="text-muted">{user.email}</small>
          </div>
        </div>

        <Card.Text>
          <strong>Username:</strong> {user.username}<br />
          <strong>Phone:</strong> {user.phone}
        </Card.Text>

        {/* ✅ زر عرض التفاصيل */}
        <Button 
          variant="primary" 
          onClick={() => onUserClick(user)}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  )
}

export default UserCard
