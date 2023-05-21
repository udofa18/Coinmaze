import React from 'react'
import Banner from '../components/banner/Banner'
import CoinsTable from '../components/banner/CoinsTable'
import NewsFlash from '../components/Newslash'
import ListCoins from '../components/ListCoins'
import NewsHandler from '../components/NewsHandler'

const Homepage = () => {
  return (
    <>
    <NewsFlash/>
    <Banner/>
  
    <CoinsTable/>
    <ListCoins/>
    <NewsHandler/>

    
    </>
  )
}

export default Homepage