import "./footer.css";

const Footer = () => {
  return (
    <div className="anyworka__footer section__padding">
      <div className="anyworka__footer-heading">
        <h1 className="gradient__text">Do you want to</h1>
      </div>
      <div className="anyworka__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="anyworka__footer-links"> 
      <div className="anyworka__footer-links_logo">
        <img src={"anyworkaLogo"} alt="logo" />
        <p>creech wood k12 132 DK Alknjch, All</p>
      </div>
      <div className="anyworka__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>counter</p>
        <p>contact</p>
      </div>
      <div className="anyworka__footer-links_div">
        <h4>Company</h4>
        <p>terms and conditions</p>
        <p> Privacy Policy</p>
        <p>contact</p>
      </div>
      <div className="anyworka__footer-links_div">
        <h4>Get in Touch</h4>
        <p>creech wood k12 132 DK Alknjch, All</p>
        <p>085-132567</p>
        <p>kehindekehinde84@gmail.com</p>
      </div>
      </div>
      <div className="anyworka__footer-copyright">
        <p>@ 2023 Anyworka. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
