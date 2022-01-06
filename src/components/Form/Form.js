import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div id="contact">
      <div>
        <h2 className="heading mt-4">Reach out!</h2>
      </div>

      <div>
        <form action="https://formspree.io/f/mvolgdao" method="POST">
          <label className="lbl-name" htmlFor="user-name">Name:</label>
          <input type="text" id="user-name" name="name" placeholder="full name" required/>

          <label htmlFor="user-email">Email:</label>
          <input id="user-email" type="email" name="email" placeholder="example@email.com" required/>

          <label htmlFor="user-message">Message:</label>
          <textarea id="user-message" name="message" placeholder="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
