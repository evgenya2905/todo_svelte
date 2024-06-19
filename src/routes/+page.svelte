<script>
  import Todo from './components/Todo.svelte';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<section>
  <Todo />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 0.6;
  }
</style>
