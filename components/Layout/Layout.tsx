import { ReactNode } from "react"
import { Navbar } from "./Navbar"

type Props = {
    children: ReactNode
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}