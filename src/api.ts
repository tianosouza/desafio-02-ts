const conta = {
    email: "tiano@dio.bank",
    password: "1234567890",
    name: "Tiano Souza"
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})