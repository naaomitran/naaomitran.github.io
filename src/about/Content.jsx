import { Grommet, Image, Box, Anchor, Button, Heading, grommet, Paragraph } from 'grommet';
import React, { Component } from 'react';
import Profile from '../assets/bread.jpg'
// ![alt text](//v2.grommet.io/assets/IMG_4245.jpg "Markdown Image")


;



class Content extends Component {
    state = {  }
    render() { 
        
        return (
            <Grommet theme={grommet} background="#ffe9e1">
            <Box align="left" pad="large">
            <Heading>Get to know me</Heading>
            <Box direction="row-responsive" justify='center'> 
            <Anchor href='https://www.instagram.com/creamricecooks/'>
            <Image src={Profile} fit='contain' margin='medium'/>
            </Anchor>
            <Box>
            <Paragraph size="xlarge">
                
            Hello! I'm Naomi, a cognitive science student studying at the beautiful 
            <Anchor href='https://www.ubc.ca/' margin='xsmall' color='#9e8b7d'>University of British Columbia</Anchor>.
            </Paragraph>
            <Paragraph size='medium'>
            <Box pad='xsmall'>
            I enjoy the challenge of coming up with creative ideas and turning them into realities. 
            I'm interested in software developing, website building, and I love learning new technologies!
            </Box>

            <Box pad='xsmall'>
            Some technologies I've been working with are:
            <Box>⭑ Java ⭑ C++ ⭑ HTML ⭑ CSS ⭑ JavaScript ⭑ React </Box>
            <Box>
            <Button label="what I'm working on" pad = "left"color='#9e8b7d' href='/projects' 
            margin='small' alignSelf='center'/>
            </Box>
            <Box>
            When I'm not around computers, I find myself learning new recipes, experimenting with different foods, and definitely exploring new restaurants! 

            </Box>
            </Box>
            



            </Paragraph>


            


            </Box>

                
            </Box>
            
            </Box>
          </Grommet>
          );
    }
}
 
export default Content;