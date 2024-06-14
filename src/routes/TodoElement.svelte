<script>
  import { todoList } from './store.js';
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
</script>

<input
  checked={item.done}
  type="checkbox"
  on:change={() => toggleDone(index)}
/>
<span class:checked={item.done}>{item.text}</span>
<span on:click={() => removeTodo(index)}> × </span>
<br />

<style>
  .checked {
    text-decoration: line-through;
  }
</style>
