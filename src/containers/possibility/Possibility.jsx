import "./possibility.css";
import PossibilityImage from "../../assets/people/possibility.png";

const Possibility = () => {
  return (
    <div className="anyworka__possibility section__padding" id="Possibility">
      <div className="anyworka__possibility-image">
        <img src={PossibilityImage} alt="possibility" />
      </div>
      <div className="anyworka__possibility-content">
        <h4>Request Early Access to Get started</h4>
        <h1 className="gradient__text">The possibilities are beyound your imagination</h1>
        <p>Yet bed the travelling assistance Yet bed the travelling assistance Yet bed the travelling assistance </p>
        <h4>Request Early Access to Get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
