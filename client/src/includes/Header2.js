import React, { useEffect, useState } from 'react'
import Logo from '../images/logo.webp'
import '../css/includes.css'

const MainHeader = () => {

    return (
        <nav className="navbar navbar-default header-nav" >
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="/"><img src={Logo} className="header-logo" /></a>
    </div>
    
  </div>
</nav>
    )
}

export default MainHeader
