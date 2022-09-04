import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, SwiperOptions } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import styled from '@emotion/styled';
import { Navigation as NavigationComponent } from './Navigation';

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


export const Swiperjs = () => {
    const swiperConfig: SwiperOptions = {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        modules: [Navigation, Pagination, Autoplay],
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        }
    }
    return (
        <Container>
            <Swiper
                {...swiperConfig}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    IMAGES.map((image, idx) => (
                        <SlideItem src={`/${image}`} alt={image} key={idx} />
                    ))
                }
                <NavigationComponent />
            </Swiper>
            <PaginationComponent className="swiper-pagination" />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%;
`

const PaginationComponent = styled.div`
    bottom: -20px !important;
`

type SlideItemProps = {
    src: string
    alt: string
}
const SlideItem = ({ src, alt }: SlideItemProps) => {
    return (
        <SwiperSlide >
            <Slide src={src} alt={alt} width={5} height={4} />
        </SwiperSlide>

    )
}

/**
 * ここを記述しないとバグる
 * @see: https://github.com/nolimits4web/swiper/issues/4413
 */
SlideItem.displayName = 'SwiperSlide'

const Slide = styled.img`
    width: 100%;
    height: auto;
`