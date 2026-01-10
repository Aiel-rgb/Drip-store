function Login() {
    return (
        <div className="bg-gradient-to-b from-violet-300 to-white min-h-screen">
            <div className="grid grid-cols-2">
                <div className="border-none bg-white m-16 rounded-lg p-8 h-[400px]">
                    <h3 className="text-2xl font-bold mb-4">Faça o Login de sua conta</h3>
                    <p className="mb-4 text-dark-gray-2">Não possue conta? entre <a href="#" className="text-primary"> aqui </a></p>
                    <input 
                        type="text"
                        placeholder="Insira seu E-mail" 
                        className="border border-gray-300 rounded-lg p-2 mb-4 bg-light-gray-3 w-full"
                    />
                    <input 
                        type="password"
                        placeholder="Insira sua Senha" 
                        className="border border-gray-300 rounded-lg p-2 mb-4 bg-light-gray-3 w-full"
                    /> <br />
                    <button className="bg-primary text-white py-2 px-4 rounded-lg w-full hover:bg-tertiary transition">Entrar</button>
                    <p className="mt-4">Ou faça login com </p>
                </div>
                <div>
                    <img src="/tenis-login.png" alt="tenis" />
                </div>
            </div>
        </div>
    )
}
export default Login