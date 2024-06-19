<script>
  import { todoList } from '../stores/store.js';
  import { fade } from 'svelte/transition';

  export let item;
  export let index;

  function removeTodo(index) {
    todoList.update((list) => {
      list.splice(index, 1);
      return list;
    });
  }

  function toggleDone(index) {
    todoList.update((list) => {
      list[index].done = !list[index].done;
      return list;
    });
  }

  function sortTodo() {
    todoList.update((list) => {
      return list.slice().sort((a, b) => a.done - b.done);
    });
  }
</script>

<section>
  <input
    checked={item.done}
    type="checkbox"
    on:change={() => toggleDone(index)}
    on:change={() => sortTodo()}
  />

  {#if item.done === true}
    <span in:fade={{ y: 200, duration: 1000 }} class:checked={item.done}
      >{item.text}</span
    >
    <span class="point" on:click={() => removeTodo(index)}> × </span>
    <br />
  {:else}
    <span class:checked={item.done}>{item.text}</span>
    <span class="point" on:click={() => removeTodo(index)}> × </span>
  {/if}
</section>

<style>
  .checked {
    text-decoration: line-through;
  }

  .point:hover {
    cursor: pointer;
  }
</style>
