import { Grommet, Anchor, Box, Markdown, Button, Heading, grommet, Paragraph, Stack } from 'grommet';
import React, { Component } from 'react';
import Profile from '../assets/pfp.png'
import { Mail } from 'grommet-icons';
// ![alt text](//v2.grommet.io/assets/IMG_4245.jpg "Markdown Image")
import Sidebar from '../contact/Sidebar'

const INBOX = `
[inbox](#)

`
{/* <Mail color='#9e8b7d' size='medium' alignmentBaseline='after-edge' /> */}
class Content extends Component {
    state = {  }
    render() { 
        
        return (
            <Grommet theme={grommet} background="#ffe9e1">
            <Box pad="large">
            <Box border={{ color: '#9e8b7d', size: 'medium' }} pad='large'>

            
            
            <Box align='center' direction='row-responsive'> 

            <Box pad='large'>
            
            <Sidebar />

            </Box>

            

            
<Box border={{ color: '#9e8b7d', size: 'small' }} pad='large'>
            <Box >
            <Paragraph size="large" align='center'>
            Interested in getting to know more about me or my work? 
            </Paragraph>
            </Box>
            <Box >

            <Paragraph size="large">
            I'm currently very open to new opportunities and would love to chat,

            my<Anchor label="inbox" href="#" color='#9e8b7d' margin='xsmall'/> 
            is always open!



            </Paragraph>
            
            
            </Box>
</Box>            

            </Box>

                
            </Box>
        
            </Box>
          </Grommet>
          );
    }
}
 
export default Content;