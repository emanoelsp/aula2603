import Image from "next/image"
import Link from "next/link"

export const PRODUTOS = [
    { id:"1", nome:"Café", descricao:"Café expresso puro", preco:"11,90", image:"/cafe.jpeg"},
    { id:"2", nome:"Arroz", descricao:"Café branco tipo 1", preco:"6,90", image:"/arroz.jpeg"},
    { id:"3", nome:"Macarrão", descricao:"Macarrão italizano", preco:"15,90", image:"/macarrao.jpeg"},
    { id:"4", nome:"Pizza", descricao:"Pizza calabresa", preco:"39,90", image:"/pizza.jpeg"},
    { id:"5", nome:"Chocolate", descricao:"Chocolate ao leite", preco:"7,90", image:"/chocolate.jpeg"},
]

export default function PaginaProduto() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-12 bg-gray-50">
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-10">
                Lista de Produtos
            </h1>
            {PRODUTOS.map((produto) => (
            <div key={produto.id} 
                className="bg-white rounded-2xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row 
                            items-center gap-6 mb-4">
                <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-xl">
                    <Image src={produto.image} alt={produto.descricao} width={50} height={50}
                        className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2"> {produto.nome} </h3>
                    <p className="text-gray-500 text-sm mb-1"> {produto.descricao} </p>
                    <p className="text-lg font-bold text-gray-900 mt-2"> {produto.preco} </p>
                </div>
                <div className="w-full md:w-auto">
                    <Link
                        className="w-full md:w-auto bg-gray-900 text-white px-6 py-3 
                            rounded-lg text-sm font-medium hover:bg-gray-700 
                            transition-colors"
                        href={`/produto/${produto.id}`}>
                        Ver detalhes do produto
                    </Link>
                </div>
            </div>
            ))}
        </section>
    )
}