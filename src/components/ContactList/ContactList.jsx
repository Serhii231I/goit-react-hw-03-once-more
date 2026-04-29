import Contact from "../Contact/Contact";

export default function ContactList({ users }) {
  return (
    <>
      <Contact users={users} />
    </>
  );
}
