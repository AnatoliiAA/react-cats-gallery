import './RightSection.css'
import girlImage from '../../img/girl-and-pet.png'
import { Switch, Route } from "react-router-dom";
import Breeds from '../Breeds/Breeds'

function RightSection() {
    return (
        <div className="right-section-wrapper">
            <Switch>
                <Route exact path="/">
                    <div className="right-section">
                        <div className="right-section-background"></div>
                        <img src={girlImage} className="right-section-image" />
                    </div>
                </Route> 
                <Route path="/voting">
                    <p>Voting componennt would be here</p>
                </Route>
                <Route path="/breeds">
                    <Breeds />
                </Route>
                <Route path="/gallery">
                    <p>Gallery componennt would be here</p>
                </Route>
            </Switch>

        </div>
    );
}

export default RightSection;