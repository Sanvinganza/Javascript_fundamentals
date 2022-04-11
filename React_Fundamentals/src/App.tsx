import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { ProgressBarForm } from './common/ProgressBarForm';

class App extends React.Component {

  render() {
    return (
      <ProgressBarForm />
    );
  }
}

export default hot(App);