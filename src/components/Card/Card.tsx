import { useState } from "react"
import { BoxCard } from "./style"
import { Center, ChakraProvider, Input } from "@chakra-ui/react"
import { Header } from "../Header/Header"
import { DButton } from "../Button/DButton"
import { login } from "../../services/login"


export const Card = () => {
    const [ email, setEmail ] = useState<string>('')
 
    return (
        <ChakraProvider>
            <Header/>
            <Center>
                <BoxCard>
                    <h1>Faça Login</h1>
                    <Input placeholder = "Email" type = "email" borderRadius = "10px" value = { email } onChange = { (event) => setEmail(event.target.value) } />
                    <Input placeholder = "Password" type = "password" borderRadius = "10px" />
                    <DButton onClick = { () => login(email) } />
                </BoxCard>
            </Center>
        </ChakraProvider>
        
    )
}