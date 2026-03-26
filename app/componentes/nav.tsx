import Link from "next/link";

export default function Nav(){
    return(
        <div>
            <Link className="mr-4" href='/contato'> Contatos </Link>
            <Link className="mr-4" href='/sobre'> Sobre a empresa </Link>
            <Link className="mr-4" href='/produtos'> Lista de produtos </Link>
            <Link className="mr-4" href='/produtos/:id'> Produto </Link>
        </div>
    )
}