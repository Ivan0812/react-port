import React, { useState } from "react";

function ContactModal({ closeModal }) {
  return (
    <div id="contactModal" className="modal">
      <button className="closecontact" onClick={closeModal}>
        &#10005;
      </button>
      <form>
        <fieldset>
          <legend>
            <h2>Say Hello!</h2>
          </legend>
          <ul className="contact-form">
            <li>
              <label htmlFor="name">Full Name</label>
              <br />
              <input
                type="text"
                required
                id="name"
                name="name"
                placeholder="Required"
              />
            </li>
            <li>
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                required
                id="email"
                name="email"
                placeholder="Required"
              />
            </li>
            <li>
              <label htmlFor="o_topics">How can I help?</label>
              <br />
              <textarea
                id="o_topics"
                name="topics"
                placeholder="Write here about!"
              ></textarea>
            </li>
            <li>
              <button className="submit" type="submit">
                Send Message
              </button>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  );
}

export default ContactModal;