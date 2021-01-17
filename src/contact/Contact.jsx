import { Grommet } from 'grommet';
import Content from './Content';
import NavBar from '../NavBar'
import React, { Component } from 'react';


class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <Grommet>
            <NavBar />
            <Content />
            </Grommet>

         );
    }
}
 
export default Contact;