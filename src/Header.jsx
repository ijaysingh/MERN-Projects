import React from 'react'
import './header.css';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize="medium" className='header__icon'/>
      </IconButton>

      <img src="https://cdn.cdnlogo.com/logos/t/41/tinder.svg" alt="" className="header__logo" />

      <IconButton>
        <ForumIcon fontSize='midium' className='header__icon' />
      </IconButton>
      
    </div>
  )
}

export default Header