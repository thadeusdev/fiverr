import React from 'react'
import CatCard from '../../components/catCard/CatCard'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import { cards } from '../../data'
import './Home.scss'

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home