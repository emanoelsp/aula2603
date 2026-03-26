export default async function PaginaItemProduto({params,}: 
    {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const agora = new Date().toLocaleString("pt-BR");
  return (
    <div>
      <h1>Produtos</h1>
      <p>Lista os produtos pelo ID do produto</p>
      <p> Produto ID:{id}  </p>
      <p> {agora} </p>
    </div>
  );
}