import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header judul="Halo" isi="tahu" />
        <Counter />
        <Header judul="Hai" isi="tahu2" />
        <Counter />
        <Header judul="Hola" isi="tahu3" />
        <Counter />
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.judul}</h1>
        <p>{this.props.isi}</p>
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    angka: 0
  };

  tambah = () => {
    this.setState({
      angka: this.state.angka + 1
    });
  };

  minus = () => {
    if (this.state.angka == 0) {
      return alert('Jangan Minus woy!');
    }
    this.setState({
      angka: this.state.angka - 1
    });
  };
  render() {
    return (
      <div>
        <h2 style={{}}>{this.state.angka}</h2>
        <button onClick={this.tambah}>Tambah</button>
        <button onClick={this.minus}>Kurang</button>
      </div>
    );
  }
}
