import './Contact.css';

function Contact() {
  return (
    <div className="contact-us">
      <img className = "contact-us-image" src="assets\Contact Us.png" alt="" />
      <div className="contact-icons">
        <div className="contact-item">
          <img className="contact-icon" src="assets\Group 22.png" alt="Instagram" />
        </div>
        <div className="contact-item">
          <img className="contact-icon" src="assets\providers-list.png" alt="LinkedIn" />
        </div>
        <div className="contact-item">
          <img className="contact-icon" src="assets\Group 23.png" alt="Twitter" />
        </div>
        <div className="contact-item">
          <img className="contact-icon" src="assets\Layer 2.png" alt="Email" />
        </div>
      </div>
    </div>
  );
}

export default Contact;