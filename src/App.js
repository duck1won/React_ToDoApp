import React, { Component } from "react";
import './App.css';
export default class App extends Component {
  //jsx에서는 이런식으로 css파일안에서 하는 형식처럼 선언을 해주어도 스타일을 지정해줄 수 있음

  state = {
    todoData: [],
    value: "",
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }
  //complete true인 목록에만 선 긋기
  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? 'line-through' : 'none'
    }
  }

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
      completed: false,
    };

    //원래 있던 할 일에 새로운 할 일 더해주기
    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
  }

  handelCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      //jsx에서는 html과 다르게 class뒤에 Name을 무조껀 붙혀야한다 'className'
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) => ( //key속성을 넣어줘야한다 data 에서는 id값이 key에 해당함
            //complete true인 목록에만 선 긋기
            <div style={this.getStyle(data.completed)} key={data.id}>
              <p>
                <input
                  type="checkbox"
                  onChange={() => this.handelCompleteChange(data.id)}
                  defaultchecked={false}
                />
                {data.title}
                <button
                  style={this.btnStyle}
                  onClick={() => this.handleClick(data.id)}
                >
                  x
                </button>
              </p>
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