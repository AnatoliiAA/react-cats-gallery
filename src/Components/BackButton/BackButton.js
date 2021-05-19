import './BackButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";

function BackButton() {
    let history = useHistory()

    let handleGoBack = () => {
        history.goBack();
    }

    return (
        <div className="back-button" onClick={handleGoBack}><FontAwesomeIcon icon={faAngleLeft}/></div>
    )
}

export default BackButton;