<script>
  import TodoElement from './TodoElement.svelte';
  import { todoList } from './store.js';

  let newItem = '';

  function addTodo() {
    todoList.update((list) => [...list, { text: newItem, done: false }]);
    newItem = '';
  }
</script>

<section class="form_for_items">
  <input bind:value={newItem} type="text" placeholder="new todo item" />
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
    display: block;
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
  }
</style>
