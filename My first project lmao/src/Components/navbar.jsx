import React from 'react'

export const Navbar = () => {
  return (
    <div className="nav sticky top-0 w-full overflow-hidden bg-[#5c4c73] ">
    <ul className='flex m-0 p-1 justify-left'>
      <li><a href="#home">Home</a></li> 
      <li><a href="#language">Languages</a></li> 
      <li><a href="#P">Projects</a></li>
      <li><a href="#S">Social</a></li> 
    </ul>
  </div>
  )
}
