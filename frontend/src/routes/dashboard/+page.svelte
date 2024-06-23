<script>
  import Order from "../../components/order.svelte";
  export let data;
  let orders = data.orders;
</script>

<h1>Dashboard</h1>
<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
  {#await data}
    <p>Loading...</p>
  {:then data}
    {#each orders as order}
      <Order
        name={order.name}
        technologies={order.technologies}
        complexity={order.complexity}
        completed={order.completed}
      />
    {/each}
  {:catch error}
    <p>Error loading orders</p>
  {/await}
</div>
