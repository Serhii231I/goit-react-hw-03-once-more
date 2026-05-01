import { RiShieldUserFill } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa";

export default function Contact({ users, onDelete }) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <p>
              <span>
                <RiShieldUserFill />
              </span>
              {user.name}
            </p>
            <p>
              <span>
                <FaPhoneVolume />
              </span>
              {user.number}
            </p>
            <button type="submit" onClick={() => onDelete(user.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
