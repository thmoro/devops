import React from 'react'
import { Component } from "react";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleLogin() {
    const { email, password } = this.state;
    if (email === 'eduardo.lino@pucpr.br' && password === '123456') {
      this.setState({ message: 'Acessado com sucesso!' });
    } else {
      this.setState({ message: 'Usuário ou senha incorretos!' });
    }
  }

  render() {
    const { email, password, message } = this.state;

    return (
      <div className="login-container">
        <h1>Login</h1>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <button onClick={this.handleLogin}>Acessar</button>
        <p>{message}</p>
      </div>
    );
  }
};

export default App;


