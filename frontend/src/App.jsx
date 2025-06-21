import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import DeletedUsers from "./components/DeletedUsers";

export default function App() {
  const [users, setUsers] = useState([]);
  const [showDeleted, setShowDeleted] = useState(false);

  const fetchUsers = () => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/users`)
      .then(res => setUsers(res.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateUser = async (id, name, email) => {
    await axios.put(`${import.meta.env.VITE_API_BASE_URL}/users/${id}`, { name, email });
    fetchUsers();
  };

  const softDeleteUser = async (id) => {
  await axios.patch(`${import.meta.env.VITE_API_BASE_URL}/users/soft-delete/${id}`);
  fetchUsers();
};

  return (
    <div style={{ padding: "2rem" }}>
      <h1>CRUD User Manager Testing</h1>
      <button onClick={() => setShowDeleted(!showDeleted)}>
        {showDeleted ? "Hide Deleted Items" : "Show Deleted Items"}
      </button>

      {showDeleted && <DeletedUsers />}
      <UserForm onUserAdded={fetchUsers} />
      <UserTable users={users} onUpdate={updateUser} onDelete={softDeleteUser} />
    </div>
  );
}
