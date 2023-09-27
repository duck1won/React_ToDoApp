import React, { useState } from "react";
import './App.css';

//클래스 컴포넌트를 함수형 컴포넌트로 변경
export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }
  //complete true인 목록에만 선 긋기
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? 'line-through' : 'none'
    }
  }

  //filter메소드 사용하여 할일 목록 지워 콘솔로그 찍기
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  }

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

  const handelCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    //jsx에서는 html과 다르게 class뒤에 Name을 무조껀 붙혀야한다 'className'
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {todoData.map((data) => ( //key속성을 넣어줘야한다 data 에서는 id값이 key에 해당함
          //complete true인 목록에만 선 긋기
          <div style={getStyle(data.completed)} key={data.id}>
            <p>
              <input
                type="checkbox"
                onChange={() => handelCompleteChange(data.id)}
                defaultchecked={false}
              />
              {data.title}
              <button
                style={btnStyle}
                onClick={() => handleClick(data.id)}
              >
                x
              </button>
            </p>
          </div>
        ))}

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