import { useState, useEffect } from "react"
import { BoxCard } from "./style"
import { Center, ChakraProvider, Input } from "@chakra-ui/react"
import { Header } from "../Header/Header"
import { DButton } from "../Button/DButton"
import { login } from "../../services/login"
import { api } from "../../api"

interface UserData {
    email: string
    password: string
    name: string
}

export const Card = () => {
    const [ email, setEmail ] = useState<string>('')
    const [ userData, setUserData ] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])
    
    return (
        <ChakraProvider>
            <Header/>
            <Center>
                <BoxCard>
                    { userData === null || userData === undefined && <span>Loading...</span> }
                    <h1>Faça Login</h1>
                    <Input placeholder = "Email" type = "email" borderRadius = "10px" value = { email } onChange = { (event) => setEmail(event.target.value) } />
                    <Input placeholder = "Password" type = "password" borderRadius = "10px" />
                    <DButton onClick = { () => login(email) } />
                </BoxCard>
            </Center>
        </ChakraProvider>
        
    )
}