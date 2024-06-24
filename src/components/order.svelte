<script lang="ts">
  export let name: string;
  export let technologies: string;
  export let complexity: string;
  export let completed: boolean;

  export async function setOrderStatus() {
    await fetch(`/api/updateOrderStatus?name=${encodeURIComponent(name)}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      message: `Status for ${name}'s order has been updated`,
    };
  }
</script>

<div
  class="rounded-md p-4"
  class:bg-neutral-content={completed}
  class:bg-success-content={!completed}
>
  <h1 class="mb-4">{name}</h1>
  <p><span class="font-medium">Tehnologii:</span> {technologies}</p>
  <p>
    <span class="font-medium">Complexitate:</span>
    {#if complexity === "necunoscut"}
      {complexity}
    {:else}
      {complexity}/5
    {/if}
  </p>
  <div class="flex flex-row-reverse items-center justify-between">
    <div class="form-control">
      <label class="label cursor-pointer justify-end p-0">
        <span class="label text-lg mr-2">Terminat: </span>
        <input
          bind:checked={completed}
          on:change={setOrderStatus}
          type="checkbox"
          class="checkbox checkbox-primary"
        />
      </label>
    </div>
    <a href="/dashboard/{name}" class="link link-primary">Vezi detalii</a>
  </div>
</div>
