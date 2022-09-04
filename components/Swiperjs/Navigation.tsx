import styled from "@emotion/styled"

export const Navigation = () => {
    return (
        <Container slot="container-start">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
        </Container>
    )
}

const Container = styled.div``