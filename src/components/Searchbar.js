import React, { Fragment } from 'react'
import SVGSearch from '../svg/SVGSearch'

const Searchbar = () => {
  return (
    <Fragment>
      <div className='searchbar_wrapper'>
        <input className='searchbar_text' placeholder='Search for Products or Services'></input>
        <div><SVGSearch /></div>
      </div>
    </Fragment>
  )
}

export default Searchbar