<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  let completed = data.order.completed;

  export async function setOrderStatus() {
    await fetch(
      `/api/updateOrderStatus?name=${encodeURIComponent(data.order.name)}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return {
      message: `Status for ${data.order.name}'s order has been updated`,
    };
  }
</script>

<h1 class="mb-4">Proiect pentru <i>{data.order.name}</i></h1>
<h3 class="mb-2">Număr de contact: {data.order.phoneNumber}</h3>
<h3 class="mb-2">Tehnologii sugerate: {data.order.technologies}</h3>
<h3 class="mb-2">
  Complexitate proiect:
  {#if data.order.complexity === "necunoscut"}
    {data.order.complexity}
  {:else}
    {data.order.complexity}/5
  {/if}
</h3>
<h3 class="mb-2">
  Idee proiect:
  {#if data.order.projectIdea === "none"}
    {data.order.projectIdea}
  {/if}
</h3>
{#if data.order.projectIdea !== "none"}
  <p class="text-lg inline">
    {data.order.projectIdea}
  </p>
{/if}
<div class="form-control">
  <label class="label cursor-pointer justify-end p-0">
    <span class="label font-medium text-xl mr-2">Terminat: </span>
    <input
      bind:checked={completed}
      type="checkbox"
      class="checkbox checkbox-primary"
      on:change={setOrderStatus}
    />
  </label>
</div>
