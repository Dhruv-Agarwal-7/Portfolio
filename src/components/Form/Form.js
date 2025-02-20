import React, { useState } from "react";
import "./FormCSS.css";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fa6y9hk", // Replace with your EmailJS service ID
        "template_9s610sh", // Replace with your EmailJS template ID
        formData,
        "yhe7iUd8gmUgVzmh6" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    setFormData({
      user_email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-form-container">
          <h1>
            <i className="fa-solid fa-user"></i> Contact Me
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="user_email">Email:</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Enter Your Mail......"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter some text here......"
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
