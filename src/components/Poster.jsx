import React from 'react'
import style from '../css/poster.module.css'

function Poster() {
  return (
    <div>
        <div className={style.poster}>
            <div className={style.posterImg}>
                  <img src={`images/homeImg/woman-pointing-wall.png`} alt="img"  />
            </div>

            <div className={style.content}>
            <h5>Hurry! Sale Ends Today</h5>
            <h1>SUPER OFFER</h1>
            <h5>On All Your Favorites</h5>
            <div className={style.square}>
                <img src="images/homeImg/sale-shape.jpg" alt=""  />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Poster