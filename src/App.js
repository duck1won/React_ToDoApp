import React, { Component } from "react";
import './App.css';
export default class App extends Component {
  //jsx에서는 이런식으로 css파일안에서 하는 형식처럼 선언을 해주어도 스타일을 지정해줄 수 있음
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }
  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: 'none'
    }
  }

  todoData = [
    {
      id: "1",
      title: "공부하기",
      complete: true
    },
    {
      id: "2",
      title: "청소하기",
      complete: false
    }
  ]

  render() {
    return (
      //jsx에서는 html과 다르게 class뒤에 Name을 무조껀 붙혀야한다 'className'
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.todoData.map((data) => ( //key속성을 넣어줘야한다 data 에서는 id값이 key에 해당함
            <div style={this.getStyle()}>
              <input type="checkbox" defaultchecked={false} />
              {data.title}
              <button style={this.btnStyle}>x</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}