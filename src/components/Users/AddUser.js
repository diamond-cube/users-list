import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function addUserHandler(event) {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age!",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  }

  function userNameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <div className="input">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              placeholder="Enter username..."
              type="text"
              value={enteredUsername}
              onChange={userNameChangeHandler}
            />
          </div>
          <div className="input">
            <label htmlFor="age">Age (years)</label>
            <input
              id="age"
              placeholder="Enter age..."
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            ></input>
          </div>
          <div className="input">
            <Button type="submit">Add user</Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
