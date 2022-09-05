import styled from "@emotion/styled"
import { Carousel } from '../components/Glide'
import "@glidejs/glide/dist/css/glide.core.min.css"
import "@glidejs/glide/dist/css/glide.theme.min.css"

const Gliderjs = () => {
    return (
        <Container>
            <Title>Glider</Title>
            <Carousel />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: #212121;
`

export default Gliderjs
