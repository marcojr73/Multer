export default function Retorno({data}) {

    return (
        <section>
            <h1>Retorno</h1>
            <p>Nome:{data.name}</p>
            <p>Email:{data.email}</p>
            <p>Senha:{data.password}</p>
        </section>
    )
}