import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { CardInfo } from "../../components/Card/CardInfo"
import { useEffect, useState } from "react"
import { api } from "../../api"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
}

export const Conta = () => {
    const [ userData, setUserData ] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    const actualDate = new Date
    console.log(actualDate)
   
    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (
                        <Center>
                            <Spinner size="xl" color="white" />
                        </Center>
                    ) :
                    (
                        <>
                            <CardInfo 
                                mainContent= { `Bem vindo ${ userData?.name }` } 
                                content={ actualDate.toLocaleString() }
                            /> 
                            <CardInfo
                                mainContent="Saldo"
                                content={`R$ ${userData?.balance}`}
                            />
                        </>
                    )
                }


                  
            </SimpleGrid>                 
        </Center>
    )
}