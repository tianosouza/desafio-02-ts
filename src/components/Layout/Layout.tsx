import { Box } from "@chakra-ui/react"
import { Header } from "../Header/Header"


export const Layout = ( { children }: any ) => {
    return (
        <Box 
            minHeight="100vh"
            backgroundColor="black"
        >
            <Header />
            { children }

        </Box>
    )
}