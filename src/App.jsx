import initialUsers from "./users.json";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("saved-users");
    return savedUsers ? JSON.parse(savedUsers) : initialUsers;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("saved-users", JSON.stringify(users));
  }, [users]);

  const filtered = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.number.toLowerCase().includes(filter.toLowerCase()),
  );

  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { ...newUser, id: nanoid() }];
    });
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList users={filtered} onDelete={deleteUser} />
    </div>
  );
}

export default App;
