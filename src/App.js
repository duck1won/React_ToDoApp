import React, { useState } from "react";
import './App.css';
import List from './components/List';
//클래스 컴포넌트를 함수형 컴포넌트로 변경
export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handelChange = (e) => {
    setValue(e.target.value);
  }

  const handelSubmit = (e) => {
    //form안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    //원래 있던 할 일에 새로운 할 일 더해주기
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  }

  return (
    //jsx에서는 html과 다르게 class뒤에 Name을 무조껀 붙혀야한다 'className'
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />

        <form style={{ display: 'flex' }} onSubmit={handelSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: '10', padding: '5px' }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handelChange}
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