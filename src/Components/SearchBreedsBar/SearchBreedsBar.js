import './SearchBreedsBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBreedsBar(props) {
    return (
        <div className="search-bar-wrapper">
            <input type="text" placeholder="Search for breeds by name" className="search-bar" onChange={props.changeFunction} value={props.value}></input>
            <button className="search-bar-button" onClick={props.searchFunction}><FontAwesomeIcon icon={faSearch} /></button>
        </div>

    )
}

export default SearchBreedsBar