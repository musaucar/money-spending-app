import React from 'react'
import { moneyFormat } from '../helpers'
import './headerstyle.css'

function Header({ total, money }) {
  return (
    <>
        <div>
            {total > 0 && money - total !== 0 &&(
              <div className='header'>Kalan <span> $ {moneyFormat(money - total)}</span> var!</div>
            )}
            {total === 0 &&(
              <div className='header'>Harcamak için <span> $ {moneyFormat(money)}</span> var!</div>
            )}
            {money - total === 0 &&(
              <div className='header'>Harcanacak para kalmadı.</div>
            )}
        </div>
    </>
  )
}

export default Header