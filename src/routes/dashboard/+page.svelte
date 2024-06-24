<script lang="ts">
  import Order from "../../components/order.svelte";
  import { admin } from "../../stores.ts";
  import { onDestroy } from "svelte";

  let adminStore: boolean;
  const unsubscribe = admin.subscribe((value) => (adminStore = value));

  export let data;
  let orders = data.orders;

  onDestroy(unsubscribe);
</script>

<h1>Dashboard</h1>
{#if adminStore == true}
  <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
    {#each orders as order}
      <Order
        name={order.name}
        technologies={order.technologies}
        complexity={order.complexity}
        completed={order.completed}
      />
    {/each}
  </div>
{:else}
  <h3 class="mt-3">You are not authorized to view this page.</h3>
{/if}
