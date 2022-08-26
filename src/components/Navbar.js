import React from 'react'

const Navbar = ({titulo}) =>  {
  return (

    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
        <a href="/" className="navbar-brand text-uppercase">{titulo}</a>
      </div>
    </nav>
    
    
  )
}

export default Navbar


