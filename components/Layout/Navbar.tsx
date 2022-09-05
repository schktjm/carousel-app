import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {}

export const Navbar = ({ }: Props) => {
    return (
        <Wrapper>
            <nav>
                <Ul>
                    <ListItem label='HOME' href='/' />
                    |
                    <ListItem label='Swiper.js' href='/swiperjs' />
                    |
                    <ListItem label='Glide' href='/gliderjs' />
                </Ul>
            </nav>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Ul = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0.5rem 0;
`

type ListItemProps = {
    label: string
    href: string
}

/**
 * NOTE: Carousel のページのロードの時間も含めて比較したいので prefetch=false にしている
*/
const ListItem = ({ label, href }: ListItemProps) => {
    const router = useRouter()
    return (
        <Li>
            <Link href={href} prefetch={false} passHref>
                <Anker active={router.pathname === href}>{label}</Anker>
            </Link>
        </Li>
    )
}

const Li = styled.li`
    font-weight: bold;
    font-size: 1.2rem;
`

const Anker = styled.a<{ active: boolean }>`
    color: ${props => props.active ? '#E91E63' : '#212121'};
`