import { Grommet, Image, Box, Markdown, Button, Heading, grommet } from 'grommet';
import React, { Component } from 'react';
import Profile from '../assets/pfp.png'
// ![alt text](//v2.grommet.io/assets/IMG_4245.jpg "Markdown Image")

const INTRO = `

\`\`\`
Hello, my name is
\`\`\` 
`

  
const CONTENT = `
A ubc cognitive science student who loves coming up with new ideas and projects.


`


class Content extends Component {
    state = {  }
    render() { 
        
        return (
            <Grommet theme={grommet} background="#ffe9e1" fill='full'>
                <Box>

                
            <Box align="left" pad="large" >
            <Markdown>{INTRO}</Markdown>
            <Box direction="row-responsive"> 
            <Box pad='medium' >
            <Box >
            <Heading size="large">
                Naomi Tran. 
            </Heading>
            <Heading size="large" color="#9e8b7d">
                I like to build things. 

            </Heading>
            

            </Box>

                
            </Box>
            <Box align='center' justify='center'>
            <Image src={Profile} alignSelf='center'/>
            <Button label="get in touch" color='#9e8b7d' href='/contact' 
                alignSelf='center' />
            </Box>
            
            </Box>
            <Heading size="medium">{CONTENT}</Heading>
            
            </Box>



            </Box>
          </Grommet>
          );
    }
}
 
export default Content;