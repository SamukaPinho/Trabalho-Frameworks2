export const Lista = ({odas}) =>{
    return(
        <section>
            {odas.map(oda => (
            <div key={oda._id}>
                <h1>{oda.nome}</h1>
                <p> Autor: {oda.usuario} </p>
                <p> Descrição: {oda.descricao}</p>
                <p> Data de envio: {oda.data_inclusao}</p>
                <p> Palavras-chave: {oda.palavras_chave}</p>
             </div>
            ))}
        </section>
    )
}