import './LeftSection.css'
import TopicLink from '../TopicLink/TopicLink'
import { Link } from "react-router-dom";

function LeftSection() {
  return (
    <div className="left-section-wrapper">
      <div className="left-section">
        <h1>Hi there!</h1>
        <p>Welcome to this beautiful app</p>
        <p>Lets start using The Cats API</p>
        <Link to="voting">
          <TopicLink linkName="Voting" img="voting" />
        </Link>
        <Link to="breeds">
          <TopicLink linkName="Breeds" img="breeds" />
        </Link>
        <Link to="gallery">
          <TopicLink linkName="Gallery" img="gallery" />
        </Link>
      </div>
    </div>
  );
}

export default LeftSection;
