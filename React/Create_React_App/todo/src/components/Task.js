import React from "react";

const Task = (props) => {
  const imp = {
    color: "red",
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <b style={important ? imp : null}>{text}</b> - czas do:{" "}
          <span>{date} </span>
          <button onClick={() => props.change(id)}>Zrobione!</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <b style={important ? imp : null}>{text}</b> zrobic do ({date})
        </p>
        <p>Data wykonanania - {finish}</p>
      </div>
    );
  }
};

export default Task;
