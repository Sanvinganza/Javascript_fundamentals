import * as React from 'react';
import { hot } from "react-hot-loader/root";
import ProgressBar from './ProgressBar';

class App extends React.Component {
  render() {
    return (
      <>
        <ProgressBar value={10}/> 
      </>
    );
  }
}

export default hot(App);