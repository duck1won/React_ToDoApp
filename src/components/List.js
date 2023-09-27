import React from 'react';

export default function List({ todoData, setTodoData }) {

    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
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
    return (
        <div>
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
        </div>
    )
}
