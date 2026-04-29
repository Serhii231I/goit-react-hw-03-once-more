export default function Contact({ users }) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.name}-{user.number}
            <button type="submit">Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
