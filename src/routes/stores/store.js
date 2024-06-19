import { writable } from 'svelte/store';

let initialData = [];

if (typeof window !== 'undefined') {
  initialData = JSON.parse(localStorage.getItem('todoList')) || [
    { text: 'make dinner', done: false },
    { text: 'clean the house', done: false },
  ];
}

export const todoList = writable(initialData);

if (typeof window !== 'undefined') {
  todoList.subscribe((value) => {
    localStorage.setItem('todoList', JSON.stringify(value));
  });
}
