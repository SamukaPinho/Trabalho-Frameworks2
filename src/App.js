import './App.css';
import {Component} from "react";
import {Busca} from "./components/Busca";
import {Cabecalho} from "./components/Cabecalho";
import {Lista} from "./components/Lista";
import {Rodape} from "./components/Rodape";

  class App extends Component{

    state = {
      busca: '',
      odas: []
    }

    componentDidMount(){
      this.carregaODAs();
    }

    carregaODAs(){
      const {busca} = this.state;
      fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
      .then(response => response.json())
      .then(odas => this.setState({odas}))
    }

    buscaODA = (evento) => {
      this.setState({busca: evento.target.value});
      this.carregaODAs()
    }

    render(){
      const {odas} = this.state;
      return (
        <section className = "container">
          <Cabecalho/>
          <p id='subtitulo'> Já desenvolvidas: {odas.length} ODAs até o momento, e aumentando! Venha colaborar conosco! </p>
          <Busca
            busca={this.state.busca}
            buscaODA={this.buscaODA}
          />
          <div className = 'lista'>
            {odas.map(oda => (
              <div key={oda._id}>
                <h1>{oda.nome}</h1>
                <p> Autor: {oda.usuario} </p>
                <p> Descrição: {oda.descricao}</p>
                <p> Data de envio: {oda.data_inclusao}</p>
                <p> Palavras-chave: {oda.palavras_chave}</p>
              </div>
            ))}
          </div>
          <Rodape/>
        </section>
      )
    }
  }

export default App;

