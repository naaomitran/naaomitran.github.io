import React, { Component } from 'react'
import { HashRouter, Route, Link } from "react-router-dom";
import Logo from './assets/logoLarge.png'
import { Grommet, Header, Button, Icons, Menu, Box } from 'grommet'
import { Avatar, Anchor, Nav } from 'grommet';
import { grommet } from 'grommet/themes';
import HP from './homepage/HP';
import Project from './projects/Project';
import About from './about/About';
import Contact from './contact/Contact'




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
              <HashRouter basename="/">
                {/* <div>
                  <ul>
                    <li><Link to="/" src={Logo} size='xlarge' align='center'/></li>
                    <li><Link to="/" color='#9e8b7d'>Home</Link></li>
                    <li><Link to="/" color='#9e8b7d'>About</Link></li>
                    <li><Link to="/" color='#9e8b7d'>Projects</Link></li>
                    <li><Link to="/" color='#9e8b7d'>Contact</Link></li>
                  </ul>

                  <hr />

                  <Route exact path="/" component={HP} />
                  <Route path="/about" component={About} />
                  <Route path="/projects" component={Project} />
                  <Route path="/contact" component={Contact} />
              
              </div> */}


              <Anchor href='/'>
              <Avatar src={Logo} size='xlarge' align='center'/>
              </Anchor>
              <Nav direction="row" margin='small'>
                <Anchor label="Home" href="/" color='#9e8b7d'/>
                <Anchor label="About" href="/about" color='#9e8b7d'/>
                <Anchor label="Projects" href="/project" color='#9e8b7d'/>
                <Anchor label="Contact" href="/contact" color='#9e8b7d'/>
                <Button label="Resume " href="/resume" color='#9e8b7d'/>
              </Nav>
              </HashRouter>

            </Header>
          </Grommet>

         );
    }
}
 
export default NavBar;