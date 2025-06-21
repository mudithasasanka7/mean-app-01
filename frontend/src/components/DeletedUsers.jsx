// DeletedUsers.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function DeletedUsers() {
  const [deletedUsers, setDeletedUsers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/deleted/list`)
      .then(res => setDeletedUsers(res.data));
  }, []);

  return (
    <div>
      <h3>Deleted Users</h3>
      <ul>
        {deletedUsers.map(user => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
