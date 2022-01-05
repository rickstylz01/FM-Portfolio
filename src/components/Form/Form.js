import React from 'react';
import './Form.css';
import {Container} from "react-bootstrap";

const Form = () => {
  return (
    <Container id="contact">
      <div className="item">
        <form action="https://formspree.io/f/mvolgdao" method="POST">
          <label className="lbl-name" htmlFor="user-name">Name:</label>
          <input type="text" id="user-name" name="name" placeholder="Enter your full name" required/>

          <label htmlFor="user-email">Email:</label>
          <input id="user-email" type="email" name="email" placeholder="example@email.com" required/>

          <label htmlFor="user-message">Message:</label>
          <textarea id="user-message" name="message" placeholder="Please leave a message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Container>
  );
}

export default Form;
