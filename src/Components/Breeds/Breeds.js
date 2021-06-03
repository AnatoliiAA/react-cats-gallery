import './breeds.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import LikesPageButton from '../LikesPageButton/LikesPageButton'
import FavouritesPageButton from '../FavouritesPageButton/FavouritesPageButton'
import DislikesPageButton from '../DislikesPageButton/DislikesPageButton'
import BackButton from '../BackButton/BackButton'
import SearchBreedsBar from '../SearchBreedsBar/SearchBreedsBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';

function Breeds() {
    const [galleryItems, setGalleryItems] = useState([])
    const [allBreeds, setAllBreeds] = useState([])
    const [currentBreed, setCurrentBreed] = useState('')
    const [imagesLimit, setImagesLimit] = useState(5)
    const [searchValue, setSearchValue] = useState('')
    const [searchStatus, setSearchStatus] = useState(false)
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

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array
    }

    useEffect(async () => {
        axios.defaults.headers.common['x-api-key'] = "d749960c-9d86-45f9-9a63-e9754d4b10fb";
        let getImagesUrl = 'https://api.thecatapi.com/v1/images/search';
        
        if (currentBreed) {
            getImagesUrl = `https://api.thecatapi.com/v1/images/search?breed_id=${currentBreed}`
        }

        if (searchValue) {
            const breedsByName = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${searchValue}`);
            let allImages = [];
            for (let i = 0; i< breedsByName.data.length; i++) {
                getImagesUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedsByName.data[i].id}`
                const images = await axios.get(getImagesUrl, { params: { limit: imagesLimit, size: "full" } });
                allImages.push(images.data)
            }
            setGalleryItems(shuffleArray(allImages.flat()).slice(0, imagesLimit))
            return
        }
        
        const breeds = await axios.get('https://api.thecatapi.com/v1/breeds');
        const images = await axios.get(getImagesUrl, { params: { limit: imagesLimit, size: "full" } });
        console.log(images)
        setGalleryItems(images.data);
        setSearchValue('')
        setAllBreeds(breeds.data);
    }, [currentBreed, imagesLimit, searchStatus])

    const handleBreedChange = (e) => {
        setSearchValue('')
        setCurrentBreed(e.target.value)
    }

    const handleLimitChange = (e) => {
        setImagesLimit(e.target.value)
    }

    const handleBreedsSearch = (e) => {
        if (searchValue) {
            setSearchStatus(!searchStatus);
        }
    }

    const handleSearchValueChange = (e) => {
        let searchBreedValue = e.target.value;
        setSearchValue(searchBreedValue)
    }

    return (
        <div className="breeds-wrapper">
            <div className="breeds-section">
                <div className="breeds-header">
                    <SearchBreedsBar searchFunction={handleBreedsSearch} changeFunction={handleSearchValueChange} value={searchValue}/>
                    <LikesPageButton />
                    <FavouritesPageButton />
                    <DislikesPageButton />
                </div>
                <div className="breeds-gallery-wrapper">
                    <div className="breeds-gallery-controller">
                        <BackButton />
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
                        <div className="breeds-sort"><FontAwesomeIcon icon={faSortAlphaUp} /></div>
                        <div className="breeds-sort"><FontAwesomeIcon icon={faSortAlphaDown} /></div>
                    </div>
                    <div className="breeds-gallery">
                        {galleryItems.map((image, index) => {
                            return <div key={image.id} className={`${classNames[(index + 1) % 10]} breeds-gallery-image-wrapper`} style={{ backgroundImage: `url(${image.url})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                                <div className="breeds-image-overlay">
                                    <p className="breeds-image-overlay-text">{image.breeds.length ? image.breeds[0].name : 'No breed was specified for this image'}</p>
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