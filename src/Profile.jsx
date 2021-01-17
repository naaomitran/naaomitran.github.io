import React, { Component } from 'react'
import HP from './homepage/HP';
import Project from './projects/Project';
import About from './about/About';
import Contact from './contact/Contact'
import { Grommet, InfiniteScroll, Box} from 'grommet';


class MainPage extends Component {
    state = {  }
    render() { 
        return ( 
            <Grommet>
                <Box height="full" overflow="auto" background="#ffe9e1">
                    <InfiniteScroll items={[1, 2, 3, 4]}>
                    {(item) => (
                        <Box
        flex={false}
        pad="medium"
      >
        <HP />
        <About />
        <Project />
        <Contact />
        
      </Box>
    )}
  </InfiniteScroll>
</Box>
            </Grommet>
         );
    }
}
 
export default MainPage;