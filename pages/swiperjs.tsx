import styled from "@emotion/styled";
import { NextPage } from "next";
import { Swiperjs as SwiperjsComponent } from '../components/Swiperjs'

const Swiperjs: NextPage = () => {
    return (
        <Container>
            <Title>
                Swiper.js page.
            </Title>
            <SwiperjsComponent />
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

export default Swiperjs