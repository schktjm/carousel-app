import styled from "@emotion/styled"
import Glide from '@glidejs/glide'
import { useEffect } from "react"


const IMAGES = [
    'foodiesfeed.com_pizza-with-pineapple-and-thin-crust.jpg',
    'foodiesfeed.com_pork-ribs-with-knife.jpg',
    'foodiesfeed.com_pumpkin-soup-with-pumpkin-seeds-on-top.jpg',
    'foodiesfeed.com_testing-upload-foto.jpg',
    'foodiesfeed.com_chocolate-caramel-cheesecake.jpg',
    'foodiesfeed.com_coffee-with-milk-with-hearty-latte-art.jpg',
    'foodiesfeed.com_gin-and-tonic-cocktail-with-orange-and-thyme.jpg',
    'foodiesfeed.com_haloumi-burger-with-french-fries.jpg',
] as const

export const Carousel = () => {

    useEffect(() => {
        if (typeof window != 'undefined') {
            new Glide('.glide', {
                type: 'carousel',
                startAt: 0,
                perView: 3
            }).mount()
        }
    }, [])

    return (
        <Container>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {
                            IMAGES.map((image, idx) => (
                                <ListItem className="glide__slide" key={idx} >
                                    <Image src={`/${image}`} alt={image} width={5} height={4} />
                                </ListItem>
                            ))
                        }
                    </ul>
                    <div data-glide-el="controls">
                        <button data-glide-dir="<">Prev</button>
                        <button data-glide-dir=">">Next</button>
                    </div>
                </div>
                <Bulluets className="glide__bullets" data-glide-el="controls[nav]">
                    {
                        IMAGES.map((_, idx) => (
                            <button className="glide__bullet" data-glide-dir={`=${idx}`} key={idx} ></button>
                        ))
                    }
                </Bulluets>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`
const Bulluets = styled.div`
    bottom: -20px;
    background-color: #212121;
    padding: 5px 10px;
`

const ListItem = styled.li``

const Image = styled.img`
    width: 100%;
    height: auto;
`