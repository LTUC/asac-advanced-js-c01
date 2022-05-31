import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../store/votes';
import { Button, Stack, Box, Text, Container } from '@chakra-ui/react'


function Votes(props) {
  return (
    // <>
    //   <h2>vote counter</h2>
    //   <ul>
    //     {props.counter.candidates.map((person,i)=>{
    //       return(
    //         <li key={i} onClick={()=>props.increment(person.name)}>{person.name} -- {person.votes}</li>
    //       )
    //     })}
    //   </ul>
    // </>
    <Container centerContent>
      <Stack>
        {props.candidates.map(person => {
          return (
            <Box key={person.name}>
              <Text>
                {person.name} - {person.votes}
              </Text>
              <Button
                colorScheme='yellow'
                onClick={() => props.increment(person.name)}
              >
                Vote!
              </Button>
            </Box>
          )
        })

        }
      </Stack>
      <Box m={2}>
        <Button
          colorScheme='red'
          onClick={() => props.reset()}>
          Reset Store
        </Button>
      </Box>
    </Container>
  )
}

const mapStateToProps = state => ({
  candidates: state.candidates.candidates
});

const mapDispatchToProps = { increment, decrement, reset };

// const mapDispatchToProps = dispatch => ({
//   increment: ()=> dispatch(increment()),
//   decrement: ()=> dispatch(decrement()),
// })

export default connect(mapStateToProps, mapDispatchToProps)(Votes);