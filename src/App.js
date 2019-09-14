import React, { Component } from 'react';
import './styles/main.scss';
import Routing from './components/Routing';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };

    this.checkAuth = this.checkAuth.bind(this);
  }

  componentDidMount() {
    this.checkAuth();
  }

  async checkAuth() {
    const response = await fetch('https://hlib.pw/site/is-logged');

    const json = await response.json();

    this.setState({ loading: false });

    const { auth: isLoggedIn } = json;

    if (isLoggedIn) {
      window.location = 'http://hlib.pw/site/';
    }
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <Routing />
    );
  };
}

export default App;
