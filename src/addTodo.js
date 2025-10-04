"use strict";

const todo_item_template = "#todo-item-template";
const add_todo_result = "#add-todo-result";
const add_todo_input = "#add-todo-input";
const add_todo_button = "#add-todo-button";

export function initAddTodo() {
  const tmpl = document.querySelector(todo_item_template);
  const addTodoResult = document.querySelector(add_todo_result);
  const addTodoInput = document.querySelector(add_todo_input);
  const addTodoButton = document.querySelector(add_todo_button);

  function createTodoNode(text) {
        const clone = tmpl.content.cloneNode(true);
        const item = clone.querySelector(".home__container-todo-list");
        item.querySelector(".todo-list-text").textContent = text;
        return clone;
  }

  addTodoButton.addEventListener("click", () => {
    const todoInput = (addTodoInput?.value || "").trim();
    if (!todoInput) return;
    addTodoResult.appendChild(createTodoNode(todoInput));
    if (addTodoInput) addTodoInput.value = "";
  });

  if (addTodoInput) {
    addTodoInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addTodoButton.click();
    });
  }

  return { createTodoNode };
}