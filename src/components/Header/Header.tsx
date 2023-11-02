import { Center } from "@chakra-ui/react"
import LogoDio from "./img/dioLogo.png"
import { HeaderContainer } from "./style"


export const Header = () => {
    return (
        <HeaderContainer>
         <Center>
           <img src = { LogoDio }  alt="Logo Dio Bank"/>
           <p>- Bank</p>
         </Center>
        </HeaderContainer>
    )
}