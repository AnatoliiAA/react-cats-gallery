import './TopicLink.css'
import voting from '../../img/vote-table.png'
import breeds from '../../img/pet-breeds.png'
import gallery from '../../img/images-search.png'

function TopicLink(props) {
    let linkToImage
    let className = 'topic-image-wrapper'
    switch (props.img) {
        case 'voting':
            linkToImage = voting;
            className += ' topic-image-wrapper--voting';
            break;
        case 'breeds':
            linkToImage = breeds;
            className += ' topic-image-wrapper--breeds';
            break;
        case 'gallery':
            linkToImage = gallery;
            className += ' topic-image-wrapper--gallery';
            break;
        default:
            break;
    }

    return (
        <div className="topic-link">
            <div className={className}>
                <img src={linkToImage} className="topic-image"/>
            </div>
            <p className="topic-text">{props.linkName}</p>
        </div>
    );
}

export default TopicLink;