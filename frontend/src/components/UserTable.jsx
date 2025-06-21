// UserTable.jsx
import axios from "axios";

export default function UserTable({ users, onUpdate, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Names</th><th>Email</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => {
                const newName = prompt("Update name", user.name);
                const newEmail = prompt("Update email", user.email);
                if (newName && newEmail) {
                  onUpdate(user._id, newName, newEmail);
                }
              }}>Edit</button>

              <button
                onClick={() => {
                  if (confirm(`Are you sure to delete ${user.name}?`)) {
                    onDelete(user._id);  // <- soft delete
                  }
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
