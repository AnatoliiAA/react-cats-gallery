import './breeds.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import LikesPageButton from '../LikesPageButton/LikesPageButton'
import FavouritesPageButton from '../FavouritesPageButton/FavouritesPageButton'
import DislikesPageButton from '../DislikesPageButton/DislikesPageButton'
import BackButton from  '../BackButton/BackButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';

function Breeds() {
    const [galleryItems, setGalleryItems] = useState([])
    const [allBreeds, setAllBreeds] = useState([])
    const [currentBreed, setCurrentBreed] = useState('')
    const [imagesLimit, setImagesLimit] = useState(5)
    const classNames = {
        1: 'first',
        2: 'second',
        3: 'third',
        4: 'fourth',
        5: 'fifth',
        6: 'sixth',
        7: 'seventh',
        8: 'eighth',
        9: 'ninth',
        0: 'tenth',
    }

    useEffect(async () => {
        axios.defaults.headers.common['x-api-key'] = "d749960c-9d86-45f9-9a63-e9754d4b10fb";
        let getImagesUrl = 'https://api.thecatapi.com/v1/images/search';
        if (currentBreed) {
            getImagesUrl = `https://api.thecatapi.com/v1/images/search?breed_id=${currentBreed}`
        }
        const breeds = await axios.get('https://api.thecatapi.com/v1/breeds');
        const images = await axios.get(getImagesUrl, { params: { limit: imagesLimit, size: "full" } });
        console.log(images)
        setGalleryItems(images.data);
        setAllBreeds(breeds.data);
    }, [currentBreed, imagesLimit])

    const handleBreedChange = (e) => {
        setCurrentBreed(e.target.value)
    }

    const handleLimitChange = (e) => {
        setImagesLimit(e.target.value)
    }


    return (
        <div className="breeds-wrapper">
            <div className="breeds-section">
                <div className="breeds-header">
                    <LikesPageButton />
                    <FavouritesPageButton />
                    <DislikesPageButton />
                </div>
                <div className="breeds-gallery-wrapper">
                    <div className="breeds-gallery-controller">
                        <BackButton/>
                        <h1 className="breeds-title">Breeds</h1>
                        <select onChange={handleBreedChange} className="breeds-select">
                            <option value="">All breeds</option>
                            {allBreeds.map((breed) => {
                                return <option value={breed.id} key={breed.id}>{breed.name}</option>
                            })}
                        </select>
                        <select onChange={handleLimitChange} className="breeds-select breeds-select-limit">
                            <option value="5">Limit: 5</option>
                            <option value="10">Limit: 10</option>
                            <option value="15">Limit: 15</option>
                            <option value="20">Limit: 20</option>
                        </select>
                        <div className="breeds-sort"><FontAwesomeIcon icon={faSortAlphaUp}/></div>
                        <div className="breeds-sort"><FontAwesomeIcon icon={faSortAlphaDown}/></div>
                    </div>
                    <div className="breeds-gallery">
                        {galleryItems.map((image, index) => {
                            return <div key={image.id} className={`${classNames[(index + 1) % 10]} breeds-gallery-image-wrapper`} style={{backgroundImage: `url(${image.url})`, backgroundSize: 'cover', backgroundPosition: 'top center'}}>
                                <div className="breeds-image-overlay">
                                    {image.breeds.length ? image.breeds[0].name : 'No breed was specified for this image'}
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breeds;