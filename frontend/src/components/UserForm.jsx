import { useState } from "react";
import axios from "axios";

export default function UserForm({ onUserAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Both fields required");
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users`, { name, email });
    setName("");
    setEmail("");
    onUserAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}
