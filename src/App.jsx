import initialUsers from "./users.json";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [users, setUsers] = useState(initialUsers);

  const [filter, setFilter] = useState("");

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

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList users={filtered} />
    </div>
  );
}

export default App;
