function Cadastro() {
    return (
        <div className="mt-16 bg-[#F9F8FE] flex flex-col items-center">
            <h1 className="text-4xl font-bold w-full max-w-[1300px] px-5 mb-5 text-gray-800">Criar Conta</h1>

            <div className="bg-white rounded-lg p-8 mb-4 w-full max-w-[1300px]">
                <h2 className="text-lg text-gray-700 font-bold mb-5">Informações Pessoais</h2>
                <hr className="border-gray-200 mb-8" />

                <div className="flex flex-col gap-5">
                    <label htmlFor="nome" className="text-gray-700 font-medium -mb-3">Nome Completo *</label>
                    <input type="text" name="nome" id="nome" placeholder="Insira seu nome" className="w-full rounded-lg p-4 bg-light-gray-3 outline-none focus:ring-1 focus:ring-primary" />

                    <label htmlFor="cpf" className="text-gray-700 font-medium -mb-3">CPF *</label>
                    <input type="number" name="cpf" id="cpf" placeholder="Insira seu CPF" className="w-full rounded-lg p-4 bg-light-gray-3 outline-none focus:ring-1 focus:ring-primary" />

                    <label htmlFor="email" className="text-gray-700 font-medium -mb-3">Email *</label>
                    <input type="text" name="email" id="email" placeholder="Insira seu email" className="w-full rounded-lg p-4 bg-light-gray-3 outline-none focus:ring-1 focus:ring-primary" />

                    <label htmlFor="telefone" className="text-gray-700 font-medium -mb-3">Celular *</label>
                    <input type="tel" name="telefone" id="telefone" placeholder="Insira seu telefone" className="w-full rounded-lg p-4 bg-light-gray-3 outline-none focus:ring-1 focus:ring-primary" />
                </div>
            </div>

            <div className="bg-white rounded-lg p-8 mb-8 w-full max-w-[1300px]">
                <h2 className="text-lg text-gray-700 font-bold mb-5">Informações de Entrega</h2>
                <hr className="border-gray-200 mb-8" />

                <div className="flex flex-col gap-5">
                    <label htmlFor="endereco" className="text-gray-700 font-medium -mb-3">Endereço *</label>
                    <input type="text" name="endereco" id="endereco" placeholder="Insira seu endereço" className="w-full rounded-lg p-4 bg-light-gray-3 outline-none focus:ring-1 focus:ring-primary" />

                    <label htmlFor="bairro" className="text-gray-700 font-medium -mb-3">Bairro *</label>
                    <input type="text" name="bairro" id="bairro" placeholder="Insira seu bairro" className="w-full rounded-lg p-4 bg-light-gray-3 outline-none focus:ring-1 focus:ring-primary" />

                    <label htmlFor="cidade" className="text-gray-700 font-medium -mb-3">Cidade *</label>
                    <input type="text" name="cidade" id="cidade" placeholder="Insira seu cidade" className="w-full rounded-lg p-4 bg-light-gray-3 outline-none focus:ring-1 focus:ring-primary" />

                    <label htmlFor="cep" className="text-gray-700 font-medium -mb-3">CEP *</label>
                    <input type="number" name="cep" id="cep" placeholder="Insira seu CEP" className="w-full rounded-lg p-4 bg-light-gray-3 outline-none focus:ring-1 focus:ring-primary" />

                    <label htmlFor="complemento" className="text-gray-700 font-medium -mb-3">Complemento</label>
                    <input type="text" name="complemento" id="complemento" placeholder="Insira complemento" className="w-full rounded-lg p-4 bg-light-gray-3 outline-none focus:ring-1 focus:ring-primary" />
                </div>
            </div>

            <div className="w-full max-w-[1300px] mb-10">
                <div className="flex items-center gap-2 mb-8">
                    <input type="checkbox" id="aceito" className="w-5 h-5 accent-primary border-gray-300 rounded" />
                    <label htmlFor="aceito" className="text-gray-600">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
                </div>

                <button className="bg-primary text-white py-3 px-4 rounded-lg w-full transition hover:bg-tertiary font-bold">Criar Conta</button>
            </div>
        </div>
    )
}

export default Cadastro