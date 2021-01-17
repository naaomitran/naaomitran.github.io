import React, { Component } from 'react'


import { Button, Box, grommet, Grommet, Nav, Text, Heading } from 'grommet';

import {
  Mail,
  Github,
  Instagram,
  LinkedinOption,
} from 'grommet-icons';

const MainNavigation = () => (
  <Nav gap="small" >
    <Heading color='#ffe9e1'>Reach out!</Heading>
    <Box pad="small" border={{ color: '#ffe9e1', side: 'top' }} />
    <Box align='center'>
        <Box direction='row-responsive'>
            <Button icon={<Mail />} href='mailto:naaomitran@gmail.com'/>
            <Button icon={<Github />} href='https://github.com/naaomitran'/>
        </Box>
        <Box direction='row-responsive'>
            <Button icon={<Instagram />} href='https://www.instagram.com/creamricecooks/'/>
            <Button icon={<LinkedinOption href='https://www.linkedin.com/in/naaomitran/'/>} />                
        </Box>


    </Box>
    <Box pad="small" border={{ color: '#ffe9e1', side: 'bottom' }} />

    <Box align='center'>
    <Text size='small' color='#ffe9e1'>let's connect</Text>

    </Box>

    

  </Nav>
);

class SidebarIcons extends Component {
    state = {  }
    render() { 
        return ( 
            <Grommet theme={grommet} >
            <Box pad='xlarge' direction="row" height={{ min: '100%' }} background="#9e8b7d">
                <MainNavigation />

            </Box>
          </Grommet>
         );
    }
}
 
export default SidebarIcons;


SidebarIcons.story = {
  name: 'Icons',
};