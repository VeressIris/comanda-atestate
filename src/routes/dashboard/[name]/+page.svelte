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

<div class="flex items-center mb-4">
  <h1 class="mr-3.5">Proiect pentru <i>{data.order.name}</i></h1>
  {#if data.order.completed}
    <svg
      class="mt-0.5"
      xmlns="http://www.w3.org/2000/svg"
      height="42px"
      width="42px"
      viewBox="0 -960 960 960"
      fill="#823290"
      ><path
        d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"
      /></svg
    >
  {/if}
</div>
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
