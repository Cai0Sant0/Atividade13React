function Lista(){

    const Jogo = (props)=>{
        return <li>{props.jogo}</li>
    }

    const jogosFavoritos = ["God Of War","Nba 2k","Dead By Daylight"]


    return(
        <div>
        <ol>
            <p>Lista dos meus Jogos Favoritos</p>
            {jogosFavoritos.map((jogosFavorito)=> <Jogo jogo = {jogosFavorito} /> )}
        </ol>
        </div>
    )
}

export default Lista