import React, {Component} from "react"
import carrinho from './img/carrinho.webp';
import './App.css';

export default class App extends Component{

  state = {
    numero: 0
  }

  add = () => {
      if(this.state.numero <10){
      this.setState({
        numero: this.state.numero + 1
      })
    }
  }

  remove = () =>{
    if(this.state.numero >0){
      this.setState({
        numero: this.state.numero - 1
      })
    }
  }

  render(){
    return(
      <div className="card">
        <h2>Quantos itens você deseja por na sacola?</h2>
        <div className="contador">
          <h3 className="quantidade">{this.state.numero}</h3>
          <div className="caixa_btn">
            <button className="btn_menos" onClick={this.remove}>-</button>
            <button className="btn_mais" onClick={this.add}>+</button>
          </div>  
        </div>
      </div>
    )
  }
}
