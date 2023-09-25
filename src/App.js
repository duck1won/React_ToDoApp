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

  state = {
    todoData: [
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
    ],
    value: "",
  };

  //filter메소드 사용하여 할일 목록 지워 콘솔로그 찍기
  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData });
  }

  handelChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handelSubmit = (e) => {
    //form안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      complete: false,
    };

    //원래 있던 할 일에 새로운 할 일 더해주기
    this.setState({ todoData: [...this.state.todoData, newTodo] });
  }
  render() {
    return (
      //jsx에서는 html과 다르게 class뒤에 Name을 무조껀 붙혀야한다 'className'
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) => ( //key속성을 넣어줘야한다 data 에서는 id값이 key에 해당함
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultchecked={false} />
              {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
            </div>
          ))}


          <form style={{ display: 'flex' }} onSubmit={this.handelSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: '10', padding: '5px' }}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handelChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: '1' }}
            />
          </form>

        </div>
      </div>
    )
  }
}