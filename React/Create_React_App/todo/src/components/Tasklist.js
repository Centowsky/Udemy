import React from "react";
import Task from "./Task";

const Tasklist = (props) => {
  const active = props.tasks.filter((task) => task.active === true);
  const done = props.tasks.filter((task) => task.active === false);

  if (done.length > 1) {
    done.sort((a, b) => {
      return b.finishDate - a.finishDate;
    });
  }

  if (active.length > 1) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const licznikDone = done.length;
  return (
    <>
      <div className="active">
        <h1>Do zrobienia:</h1>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadan do wykonania</p>}
      </div>
      <hr />
      <div className="done">
        <h3>
          Zadania zrobione
          {licznikDone > 0 ? `(${licznikDone})` : 0}
        </h3>
        {done.length > 5 && <p>Wyswietlono 5 ostatnich</p>}
        {doneTasks.length > 0 ? doneTasks.slice(0, 5) : "Wez sie do roboty"}
      </div>
    </>
  );
};

export default Tasklist;
