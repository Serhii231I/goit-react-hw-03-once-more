import Contact from "../Contact/Contact";

export default function ContactList({ users, onDelete }) {
  return (
    <>
      <Contact users={users} onDelete={onDelete} />
    </>
  );
}
