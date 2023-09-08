import React,{useEffect,useState, useRef} from "react";
import "./Form.css";
import * as yup from "yup";
import { object } from 'yup';

function FormLib() {
  const [firstName, setFirstName] = useState(""); //First name
  const [lastName, setLastName] = useState(""); // last name
  const [age, setAge] = useState(""); //Age store
  const [email, setEmail] = useState(""); //email store
  const [number, setNumber] = useState(""); // phone number store
  const [password, setPassword] = useState(""); //password store

  //define yup schema for form validation
  const focus = useRef();

  useEffect(() => {
    focus.current.focus();
  }, []);

  let userSchema = object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    age: yup.string(),
    number: yup.string(),
  });

  async function formValidation() {
    let dataObject = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      password: password,
      email: email,
      number: number,
    };

    const isValid = await userSchema.isValid(dataObject);
    if (isValid) {
      alert("Form valid");
    } else {
      alert("Form invalid");
    }
  }

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
            <button type="submit" onClick={() => formValidation()}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormLib;
