import React, { useEffect, useRef, useState } from "react";
import "./Form.css";

function Form() {
  const [firstName, setFirstName] = useState(""); //First name
  const [lastName, setLastName] = useState(""); // last name
  const [age, setAge] = useState(""); //Age store
  const [email, setEmail] = useState(""); //email store
  const [number, setNumber] = useState(""); // phone number store
  const [password, setPassword] = useState(""); //password store

  const focus = useRef();

  useEffect(() => {
    focus.current.focus();
  }, []);

  const formValidation = () => {
    if (firstName.length === 0) {
      alert("Invalid Form, First cannot be empty");
      return;
    }
    if (lastName.length === 0) {
      alert("Invalid form, last name cannot be empty");
      return;
    }
    if (age <= 0) {
      alert("Invalid Form, Age cannot be 0");
      return;
    }
    if (email.length === 0) {
      alert("Invalid Form, Email cannot be empty");
      return;
    }
    if (password.length < 8) {
      alert("Invalid form, Password length should be greater than 8 digit");
      return;
    }
    if (number.length < 10 || number.length > 10) {
      alert("Mobile number must be 10 digit");
      return;
    }

    let countUpperCase = 0;
    let countLowerCase = 0;
    let countSpecialCharacters = 0;
    let countDigit = 0;

    for (let i = 0; i <= password.length; i++) {
      const specialChars = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "[",
        "{",
        "]",
        "}",
        ":",
        ";",
        "<",
        ">",
      ];

      if (specialChars.length(password[i])) {
        countSpecialCharacters++;
      } else if (!isNaN(password[i])) {
        countDigit++;
      } else {
        if (password[i] === password[i].toUpperCase()) {
          countUpperCase++;
        }
        if (password[i] === password[i].toLowerCase()) {
          countLowerCase++;
        }
      }
    }
    if (countLowerCase === 0) {
        // invalid form, 0 lowercase characters
        alert('Invalid Form, 0 lower case characters in password')
        return
      }
  
      if (countUpperCase === 0) {
        // invalid form, 0 upper case characters
        alert('Invalid Form, 0 upper case characters in password')
        return
      }
  
      if (countDigit === 0) {
        // invalid form, 0 digit characters
        alert('Invalid Form, 0 digit characters in password')
        return
      }
  
      if (countSpecialCharacters === 0) {
        // invalid form, 0 special characters characters
        alert('Invalid Form, 0 special characters in password')
        return
      }
  
      // if all the conditions are valid, this means that the form is valid
  
      alert('Form is valid')
  };

  return (
    <>
      <div className="form-container">
        <div className="form">
          <h2>Registration Form</h2>
          <form action="?">
            <input
              type="text"
              ref={focus}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
            <br />
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
            <br />
            <input
              type="text"
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
            <br />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <br />
            <input
              type="text"
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Phone number"
            />
            <br />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <br />
            <button type="submit" onClick={()=>formValidation()}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
