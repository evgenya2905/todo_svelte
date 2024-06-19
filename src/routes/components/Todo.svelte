<script>
  import TodoElement from './TodoElement.svelte';
  import { todoList } from '../stores/store.js';

  let newItem = '';

  function addTodo() {
    todoList.update((list) => [...list, { text: newItem, done: false }]);
    newItem = '';
    sortTodo();
  }

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  function sortTodo() {
    todoList.update((list) => {
      return list.slice().sort((a, b) => a.done - b.done);
    });
  }
</script>

<section class="form_for_items">
  <input
    on:keydown={handleKeydown}
    bind:value={newItem}
    type="text"
    placeholder="new todo item"
  />
  <button on:click={addTodo}>add item</button>
</section>

<section class="list">
  {#each $todoList as item, index}
    <TodoElement {item} {index} />
  {/each}
</section>

<style>
  .form_for_items {
    display: inline;
    padding-bottom: 20px;
  }

  .list {
    display: flex;
    flex-direction: column;
  }

  button {
    border: 2px solid rgb(121, 215, 238);
    border-radius: 10px;
    background-color: rgb(193, 228, 237);
    padding: 5px;
  }

  button:hover {
    border: 2px solid rgb(5, 94, 116);
    background-color: rgb(49, 110, 125);
    transition: 0.5s;
  }

  button:active {
    transform: scale(0.8);
  }

  input {
    border-radius: 10px;
    padding: 5px;
    border: 2px solid black;
  }

  input:hover {
    border: 2px solid rgb(108, 56, 91);
    transition: 0.5s;
  }
</style>
