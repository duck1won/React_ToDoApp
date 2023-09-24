import React, { Component } from "react";
import './App.css';
export default class App extends Component {
  render() {
    return (
      //jsx에서는 html과 다르게 class뒤에 Name을 무조껀 붙혀야한다 'className'
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

        </div>
      </div>
    )
  }
}