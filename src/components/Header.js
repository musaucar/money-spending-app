import React from 'react'

function Header({ total, money }) {
  return (
    <>
        <div>
            {total > 0 && money - total !== 0 &&(
              <div>Kalan {money - total}$ var!</div>
            )}
            {total === 0 &&(
              <div>Harcamak için {money}$ var!</div>
            )}
            {money - total === 0 &&(
              <div>Harcanacak para kalmadı.</div>
            )}
        </div>
    </>
  )
}

export default Header