import { Grommet, Image, Box, Button, Heading, grommet, Anchor, Paragraph, Text, Video } from 'grommet';
import React, { Component } from 'react';
import VKadd from '../assets/projectpics/add.png'
import CApp1 from '../assets/projectpics/empty.png'
import CApp2 from '../assets/projectpics/partway.png'
import CApp3 from '../assets/projectpics/full.png'
import VKexpire from '../assets/projectpics/expire.png'
import Chip1 from '../assets/projectpics/chip1.png'
import Chip2 from '../assets/projectpics/chip.png'
import info from '../assets/projectpics/info.png'
import firstpic from '../assets/projectpics/bye.png'
import { Link } from 'react-router-dom';




// ![alt text](//v2.grommet.io/assets/IMG_4245.jpg "Markdown Image")


class Content extends Component {
    state = {  }
    render() { 
        
        return (
            <Grommet theme={grommet} background="#ffe9e1">
            <Box align="center" pad="large">
            
            <Heading>Some things I've built</Heading>
            <Box direction='row-responsive'>
            <Box alignSelf='start' pad='medium'> 
            <Image src={firstpic} alignSelf='center'pad='medium'/>
            <Image src={Chip1} alignSelf='center'pad='medium'/>
            <Image src={Chip2} alignSelf='center'pad='medium'/>
            <Image src={info} alignSelf='center'pad='medium'/>
            
            </Box>
            <Box border={{ color: '#9e8b7d', size: 'medium' }} pad="medium" align="center">
                <Paragraph size="large">
            I attended cmd-f in March 2021 where a friend and I created 
            
            <Heading size='small'>Safe Garbage;</Heading> 
            a web application that can take a picture of your item and identify what the material is.
            </Paragraph>
            <Paragraph>
                We used Figma to create our icons and the basic template of the website and used JavaScript and React to implement the design.
                We trained the system with a Kaggle dataset and were able to get ~80% accuracy, distinguishing 
                between garbage and recyclables. Our goal is to train it so it can distinguish between compost and paper as well.
            </Paragraph>

            <Paragraph size="large">
            
            We have pages to direct the user to other resources if they are interested, including
            <Anchor href='https://recyclebc.ca/' margin='xsmall' color='#9e8b7d'>Recycle BC</Anchor>.

            </Paragraph>
            <Text size='small' color='#9e8b7d'>JavaScript, React, Node.js, Python, Jupyter Notebook</Text>

                </Box>
            </Box>

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
            <Text size='small' color='#9e8b7d'>Java, AndroidStudio</Text>

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

            <Text size='small' color='#9e8b7d'>Java</Text>
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