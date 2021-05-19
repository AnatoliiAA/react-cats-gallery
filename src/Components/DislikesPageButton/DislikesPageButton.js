import './DislikesPageButton.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown } from '@fortawesome/free-regular-svg-icons';

function DislikesPageButton() {
 return (
     <Link to="dislikes-page">
         <div className="dislikes"><FontAwesomeIcon icon={faFrown}/></div>
     </Link>
 )
}

export default DislikesPageButton;