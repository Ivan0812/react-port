import  { useState } from "react";
import PropTypes from "prop-types";

function ContactModal({ closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topics: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(" https://formspree.io/f/maqponzw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          topics: "",
        });

        setTimeout(() => {
          closeModal();
          setStatus("");
        }, 1500);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="overlay" onClick={closeModal}></div>

      <div id="contactModal" className="modal">
        <button
          className="closecontact"
          type="button"
          onClick={closeModal}
          aria-label="Close contact form"
        >
          &#10005;
        </button>

        <form onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Required"
                />
              </li>

              <li>
                <label htmlFor="topics">How can I help?</label>
                <br />
                <textarea
                  id="topics"
                  name="topics"
                  value={formData.topics}
                  onChange={handleChange}
                  placeholder="Write here about!"
                ></textarea>
              </li>

              <li>
                <button className="submit" type="submit">
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </li>
            </ul>

            {status === "success" && (
              <p>Your message was sent successfully.</p>
            )}

            {status === "error" && (
              <p>Something went wrong. Please try again.</p>
            )}
          </fieldset>
        </form>
      </div>
    </>
  );
}

ContactModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ContactModal;