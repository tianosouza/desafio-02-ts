import styled from "styled-components"

export const BoxCard = styled.div`
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 8px;
    width: 40%;
    border-radius: 20px;
    box-shadow: -4px 4px 21px -5px rgba(255,255,255,0.75);
                -webkit-box-shadow: -4px 4px 21px -5px rgba(255,255,255,0.75);
                -moz-box-shadow: -4px 4px 21px -5px rgba(255,255,255,0.75);

    h1 {
        font-size: 30px;
        font-weight: 400;
        color: #fff;
    }

    input {
        width: 100%;
        color: #fff;
    }

    ::placeholder {
        color: #ffffff;
    }
`