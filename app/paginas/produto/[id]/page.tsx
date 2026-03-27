import { PRODUTOS } from "../page"
import Image from "next/image";
import Link from "next/link";

export default async function PaginaItemProduto({ params, }:
  { params: Promise<{ id: string }> }) {

  const { id } = await params;
  const produto = PRODUTOS.find((p) => p.id === id)

  if (!produto) {
    return <div className="p-10 text-center"> Produto não encontrado</div>
  }
  return (
    <div className="max-w-2xs mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-950 m-4">Produto: </h1>
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
      <div className="w-full md:w-auto mt-4">
        <Link
          className="w-full md:w-auto bg-gray-900 text-white px-6 py-3 
                            rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          href="/produtos">
            Voltar
        </Link>
      </div>
    </div>
  );
}