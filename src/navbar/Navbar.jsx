import React from './navbar.css'

export default function Navbar() {
  return (
    <div className="nav">
      <div className='eightdeep'>
        <p>EightDeep</p>
      </div>
      <div className='center'>
        <ul className='navList'>
          <li className='navListItem'>Power Rankings</li>
          <li className='navListItem'>Blogs</li>
          <li className='navListItem'>About</li>
          <li className='navListItem'>Contact</li>
        </ul>
      </div>
      <div className='right'>
        <a href='https://www.instagram.com/eightdeepsports/.com' target='_blank' rel='noopener noreferrer'>
          <i className='socialIcons fa-brands fa-instagram'></i>
        </a>
        <a href='https://www.youtube.com/channel/UClQjvXQPObURgf8wLOL8O8Q' target='_blank' rel='noopener noreferrer'>
          <i className='socialIcons fa-brands fa-youtube'></i>
        </a>
        <a href='https://twitter.com/eightdeepsports' target='_blank' rel='noopener noreferrer'>
          <i className='socialIcons fa-brands fa-twitter'></i>
        </a>
        <a href='https://www.linkedin.com/in/sean--crowley/' target='_blank' rel='noopener noreferrer'>
          <i className='socialIcons fa-brands fa-linkedin'></i>
        </a>
      </div>
      <div className='sep'>
        <div className='sep-line'></div>
      </div>
    </div>
  )
}
