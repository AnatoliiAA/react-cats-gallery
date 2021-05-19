import './FavouritesPageButton.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function FavouritesPageButton() {
 return (
     <Link to="favourites-page">
         <div className="favourites"><FontAwesomeIcon icon={faHeart}/></div>
     </Link>
 )
}

export default FavouritesPageButton;