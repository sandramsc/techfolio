/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import Main from './pages/Main';
import Loader from './components/store/NavItems/Loader';
import ErrorLoader from './components/store/NavItems/ErrorLoader';

class App extends Component {
  state = { loading: true, error: true };
  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 3000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false,
      error: false
    });
    
  };

  componentDidMount() {
    this.wait(4000);
  }

  render() {
    if (this.state.loading) return <Loader />;
    if (this.state.error) return <ErrorLoader />;
      return <>
      <Main />
      </>;
  }
}
  
export default App;
