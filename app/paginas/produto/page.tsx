import Image from "next/image"

export default function PaginaProduto() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-12 bg-gray-50">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-10">
                Lista de Produtos
            </h1>
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row 
                            items-center gap-6">
                <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-xl">
                    <Image  src="/globe.svg" alt="imagem do produto" width={50} height={50}
                        className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2"> Café </h3>
                    <p className="text-gray-500 text-sm mb-1"> Produto 1 </p>
                    <p className="text-lg font-bold text-gray-900 mt-2"> R$ 10,90 </p>
                </div>
                <div className="w-full md:w-auto">
                    <button className="w-full md:w-auto bg-gray-900 text-white px-6 py-3 
                            rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
                        Comprar agora
                    </button>
                </div>
            </div>
        </section>
    )
}