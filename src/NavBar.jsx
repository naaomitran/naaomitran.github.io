import React, { Component } from 'react'
import Logo from './assets/logoLarge.png'
import { Grommet, Header, Button, Icons, Menu, Box } from 'grommet'
import { Avatar, Anchor, Nav } from 'grommet';
import { grommet } from 'grommet/themes';




// import Profile from '../assets/pfp.png'

const gravatarLink =
  '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

  const customTheme = {
    global: {
      colors: {
        // all colors could be either a string or a dark and light object
        label: {
          light: '#5f5147',
        },
      },
    },
  };



class NavBar extends Component {
    state = {  }
    render() { 
      return (
          
            <Grommet theme={customTheme} background="#ffe9e1">
            <Header background="#ffe9e1" pad="small" border={{color: '#9e8b7d', side: 'bottom'}}>
              <Anchor href='/'>
              <Avatar src={Logo} size='xlarge' align='center'/>
              </Anchor>
              <Nav direction="row" margin='small'>
                <Anchor label="Home" href="/" color='#9e8b7d'/>
                <Anchor label="About" href="/about" color='#9e8b7d'/>
                <Anchor label="Projects" href="/project" color='#9e8b7d'/>
                <Anchor label="Contact" href="/contact" color='#9e8b7d'/>
                {/* <Button label="Resume " href="/resume" color='#9e8b7d'/> */}
              </Nav>
            </Header>
          </Grommet>

         );
    }
}
 
export default NavBar;