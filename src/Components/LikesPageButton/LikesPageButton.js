import './LikesPageButton.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile} from '@fortawesome/free-regular-svg-icons';

function LikesPageButton() {
 return (
     <Link to="likes-page">
         <div className="likes"> <FontAwesomeIcon icon={faSmile}/></div>
     </Link>
 )
}

export default LikesPageButton;