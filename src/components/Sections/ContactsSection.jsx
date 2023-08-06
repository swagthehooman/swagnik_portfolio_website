import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"; //contacts
import { useState } from "react";
export default function ContactsSection() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <section id="contacts">
      <div className="container-wrapper">
        <button className="heading">
          <EmailOutlinedIcon />
          Contact me
        </button>
        <h3>Let's work together:</h3>
        <p style={{ margin: "1rem 0 1rem 0" }}>swagnikdas1@gmail.com</p>
        <form>
          <div className="form_input_info">
            <div className="form_input_field">
              <label>Full Name</label>
              <input
                name="name"
                placeholder="Your Full Name"
                value={data.name}
                onChange={handleInput}
              />
            </div>
            <div className="form_input_field">
              <label>Email</label>
              <input
                name="email"
                placeholder="Your Email"
                value={data.email}
                onChange={handleInput}
              />
            </div>
            <div className="form_input_field">
              <label>Phone Number</label>
              <input
                name="phone"
                placeholder="Your Phone Number"
                value={data.phone}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="form_input_field">
            <label>Your Message</label>
            <input
              className="message_input"
              name="message"
              placeholder="Write your message here"
              value={data.message}
              onChange={handleInput}
            />
          </div>
          <hr />
          {/* <a
            href={`mailto:swagnikdas1@gmail.com?subject=Hire me&body=${data.message}`}
            target="_blank"
          > */}
          <button className="submit-button">Send Message</button>
          {/* </a> */}
        </form>
      </div>
    </section>
  );
}
