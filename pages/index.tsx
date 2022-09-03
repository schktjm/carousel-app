import type { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Compare Some Carousel Libraries.</title>
        <meta name="description" content="This site attempts to compare several carousel libraries on Nextjs in terms of bundle size and behavior." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          This is a site trying to compare some carousel libraries on Nextjs for bundle size and behavior!
        </Title>
      </Main>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 2rem;
`

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  color: #212121;
  font-size: 1.5rem;
`

export default Home
