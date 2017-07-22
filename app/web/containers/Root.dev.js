/**
 * Author: gaopeng
 * Date：  2017/7/9
 * Time:   9:17
 */
import React, { Component  } from 'react';
import { Provider }             from 'react-redux';
import ReactNativeWebHelloWorld from './App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <ReactNativeWebHelloWorld />
        </div>
      </Provider>
    );
  }
}
