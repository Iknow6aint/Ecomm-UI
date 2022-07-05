import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height:30px;
  background-color: teal;
  color:white
`
const Announcement = () => {
  return (
    <Container>
        Super deals on the way For free shipping
    </Container>
  )
}

export default Announcement