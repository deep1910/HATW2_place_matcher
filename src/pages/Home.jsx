import React from 'react'
import './Home.css'
import places from '../components/Places';
const Home = () => {
  const [place, setplace] = React.useState([]);
  const [placecard, setplacecard] = React.useState(false)

  const randomPlace = ()=>{
    setplacecard(true)
    const random = Math.floor(Math.random() * places.length )
    setplace(places[random])
    console.log(places[random])
  }


  const checkplace = (e)=>{
     console.log(e.target.className)
  }

  return (
    <div className='home-page'>
      <h1 className='home-page-heading'>ndoskfpoksdf   dsfpokspodf</h1>
      <p className='home-page-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla, nesciunt quia, minima perferendis possimus ut, labore omnis ad similique iure sunt porro nisi. Officia accusamus illo consequatur natus? Laborum.</p>
      <button className='place-button' onClick={randomPlace}>Generate your Destiny</button>
  
         {placecard && <div className='place-card' onClick={checkplace}>
          <img className='place-image' src={place.image} alt="" />
          <p className='place-name'>{place.name}</p>
         </div>}
      
    </div>

  )
}

export default Home