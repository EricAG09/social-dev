import styled from 'styled-components'

import Navbar from "../src/componentes/layout/Navbar"
import Container from '../src/componentes/layout/Container'
import CreatePost from '../src/componentes/cards/CreatePost'

const Content = styled.div`
  margin: 50px 0;
`


function HomePage () {
  
  return (
    <>
      <Navbar />
      <Content>
        <Container>
          <CreatePost />
        </Container>
      </Content>
    </>
  )
}

export default HomePage