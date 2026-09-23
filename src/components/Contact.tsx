import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/Contact.scss";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    setSending(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        "service_2w258ks",
        "template_ve4ndyd",
        form.current,
        {
          publicKey: "RuJx0dRqrRqLnTege",
        }
      )
      .then(
        (response) => {
          console.log("EMAILJS SUCCESS:", response);

          setSuccess(true);
          setSending(false);

          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("EMAILJS ERROR:", error);

          alert(
            `Email failed: ${
              error?.text ||
              error?.message ||
              "Unknown EmailJS error"
            }`
          );

          setError(true);
          setSending(false);
        }
      );
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">

          <h1>Contact Me</h1>

          <p>
            Got a project waiting to be realized?
            Let's collaborate and make it happen!
          </p>

          <form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
          >

            <div className="form-flex">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="contact-success">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}

            {error && (
              <p className="contact-error">
                Something went wrong. Please try again.
              </p>
            )}

          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;