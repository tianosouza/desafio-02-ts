import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { Conta } from "./page/Conta/Conta";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout/Layout";
function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path = "/" element = { <Home /> } />
            <Route path = "/conta" element = { <Conta /> } />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App;
 