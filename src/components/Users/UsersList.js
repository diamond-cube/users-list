import Card from "../UI/Card";
import "../UI/Card.css";

function UsersList(props) {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li className="card__item" key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
