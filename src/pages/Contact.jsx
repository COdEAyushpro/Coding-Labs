const Contact = () => {
  return (
    <div className="page-container text-center">
      <h2 className="fw-bold mb-3">Contact Us</h2>
      <p>We’d love to hear from you. Reach out with any questions or feedback.</p>

      <div className="container mt-4" style={{ maxWidth: "500px" }}>
        <form className="text-start">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="3" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>

        <div className="mt-4">
          <p><strong>Email:</strong> support@codingspider.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
