import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import randomNumber from './services/randomNumber'
import LocatoinInfo from './components/LocatoinInfo';
import ResidentCard from './residentComponent/ResidentCard.jsx';

function App() {


  const [locationId, setLocationId] = useState(randomNumber(126))
  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation();
  }, [locationId])


  const inputId = useRef()

  const handlesubmit = e => {
    e.preventDefault()
    setLocationId(inputId.current.value.trim())
  }

  console.log(location)

  return (

    <div className='background'>
      <div className='form'>
        <div className='form__content'>
          <h1>Rick and Morty</h1>
          <form onSubmit={handlesubmit}>
            <input className='form__input' ref={inputId} type="number" />
            <button className='form__button'>Search</button>
          </form>
        </div>
      </div>

      {
        hasError
          ? <h3>You most provide an Id from 1 to 126</h3>
          : (<div>
            <LocatoinInfo location={location}

            />

            <div className='card__container'>
              {
                location?.residents.map(url => (
                  <ResidentCard key={url} url={url}
                  />

                )
                )}
            </div>
          </div>
          )
      }

    </div>
  );
}





export default App
