import { Grommet, Image, Box, Button, Heading, grommet, Paragraph, Text } from 'grommet';
import React, { Component } from 'react';
import VKadd from '../assets/projectpics/add.png'
import CApp1 from '../assets/projectpics/empty.png'
import CApp2 from '../assets/projectpics/partway.png'
import CApp3 from '../assets/projectpics/full.png'
import VKexpire from '../assets/projectpics/expire.png'

// ![alt text](//v2.grommet.io/assets/IMG_4245.jpg "Markdown Image")


class Content extends Component {
    state = {  }
    render() { 
        
        return (
            <Grommet theme={grommet} background="#ffe9e1">
            <Box align="center" pad="large">
            
            <Heading>Some things I've built</Heading>
            <Box direction="row-responsive" pad='medium'> 
            <Image src={CApp1} alignSelf='center'pad='medium'/>
            <Image src={CApp2} alignSelf='center'pad='medium'/>
            <Image src={CApp3} alignSelf='center'pad='medium'/>
            </Box>
            <Box>
                <Box border={{ color: '#9e8b7d', size: 'medium' }} pad="medium" align="center">
                <Paragraph size="large">
            I attended my first hackathon in December 2020 where I collaborated with a teammate to create 
            
            <Heading size='small'>(CO2)unter;</Heading> 
            an app that tracks the amount of carbon emissions based on how much one drives.
            </Paragraph>
            <Paragraph>

            The progress bar is set to 30km as its default sustainable distance, and it sends alerts when the user 
            reaches 50%, 75%, and 100% of the limit. This encourages users to stay below the max and reduce 
            the size of their carbon footprints. 
            </Paragraph>

            <Paragraph size="large">
            
            We are currently working on adding more features to improve accuracy, 
            including different types of cars/fuel and adding a leadership board to encourages
            community engagement.
            </Paragraph>
            <Text size='small' color='#9e8b7d'>java, AndroidStudio</Text>

                </Box>
                

                
            </Box>






{/* second project */}
            <Box direction="row-responsive" pad='medium'> 
            <Image src={VKadd} alignSelf='center'pad='medium'/>
            <Image src={VKexpire} alignSelf='center'pad='medium'/>
            </Box>
            <Box>
                <Box border={{ color: '#9e8b7d', size: 'medium' }} pad="medium" align="center">
                <Paragraph size="large">
                I created my first personal project in 2020,
            
            <Heading size='small'>Virtual Kitchen;</Heading> 

            a program that keeps track of items in your kitchen and their expiry dates.
            You can add and remove items, view a list of all items in your kitchen or only the expired items.
            </Paragraph>

            <Text size='small' color='#9e8b7d'>java</Text>
                </Box>
                
                
            </Box>

        
            </Box>

            <Box align='center'>
            <Button label="check out my git repos" pad = "left"color='#9e8b7d'/>

            </Box>

            

            
          </Grommet>
          );
    }
}
 
export default Content;