"use client";
import React from "react";
import { useState } from "react";
// import Button from "@/Button";
// import List from "@/List";

const Tasks = () => {
  // text is to check the input in the text input field
  const [text, setText] = useState("");
  //This is to check whether the user has finished entering the text or not
  const [displayText, setDisplayText] = useState(false);
  // this is the state for the set of tasks
  const [tasks, setTasks]: {
    id: number;
    Text: string;
    isComplete: false;
  }[] = useState([]);
  //Checking the input in the text field
  function handleChange(event: string) {
    setText(event.target.value);
  }
  //This is to prevent the page from refreshing
  function handleSubmit(event) {
    event.preventDefault();
  }

  // This is where the text is finally displayed
  function handleClick() {
    setDisplayText(true);
    const temp = { id: tasks.length, Text: text, isComplete: false };
    setTasks([...tasks, temp]);
  }

  //This is where the tasks are marked as completed
  function handleDone(index: number) {
    console.log(`task number ${index + 1} done`);
    console.log(tasks[index].Text, "done");
    setTasks(
      tasks.map((task) => {
        if (task.id === index) {
          return { ...task, isComplete: true };
        } else {
          return task;
        }
      })
    );
    console.log(tasks[index].isComplete.toString());
  }
  //This is where if you want to uncheck the finished tasks
  function handleunDone(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: false };
        } else {
          return task;
        }
      })
    );
  }
  //This is where the tasks are deleted
  function handleDelete(index) {
    setTasks(tasks.filter((task) => task.id !== index));
  }
  //This is where the incomplete tasks are displayed
  const incompleteTasks = tasks
    .filter((task) => !task.isComplete)
    .map((task, id) => (
      <li className="text-blue-900" key={task.id}>
        {task.Text}
        <button
          className="mt-2 ml-2 mr-2 px-4 py-2 border-2 border-zinc-700 text-zinc-900 shadow-lg rounded-md"
          onClick={() => handleDone(task.id)}>
          Done
        </button>
        <button
          className="mt-2 ml-2 mr-2 px-4 py-2 border-2 border-zinc-700 text-zinc-900 shadow-lg rounded-md"
          onClick={() => handleDelete(task.id)}>
          Delete
        </button>
      </li>
    ));

  //This is where the completed tasks are displayed

  const completeTasks = tasks
    .filter((task) => task.isComplete)
    .map((task, id) => (
      <li className="text-green-900" key={task.id}>
        {task.Text}

        <button
          className="mt-2 ml-2 mr-2 px-4 py-2 border-2 border-zinc-700 text-zinc-900 shadow-lg rounded-md"
          onClick={() => handleunDone(task.id)}>
          unDone
        </button>
        <button
          className="mt-2 ml-2 mr-2 px-4 py-2 border-2 border-zinc-700 text-zinc-900 shadow-lg rounded-md"
          onClick={() => handleDelete(task.id)}>
          Delete
        </button>
      </li>
    ));

  return (
    <div className=" max-w-screen-md mx-auto mt-10 p-4">
      <form onSubmit={handleSubmit}>
        <label>
          Enter Task:
          <input
            className="m-4 p-2 w-3/5 border border-gray-700 rounded-md shadow-sm"
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Enter a task"
          />
        </label>
        <button
          type="submit"
          className="m-2 px-8 py-2 border-2 border-gray-200 rounded-md shadow-lg"
          onClick={handleClick}>
          Add Task
        </button>
      </form>
      <div>
        {" "}
        {tasks.length > 0
          ? displayText && (
              <ol className="list-decimal list-inside">{incompleteTasks}</ol>
            )
          : "No tasks to show yet"}
      </div>
      <div>
        {completeTasks.length > 0 ? (
          <h3 className="text-center font-bold text-xl text-cyan-950">
            Completed Tasks
          </h3>
        ) : (
          ""
        )}
        <ol className="list-decimal list-inside">{completeTasks}</ol>
      </div>
    </div>
  );
};

export default Tasks;
