<script lang="ts">
  export let name: string;
  export let technologies: string[];
  export let complexity: number;
</script>

<div
  class="bg-success-content
 rounded-md p-4"
>
  <h1 class="mb-3">{name}</h1>
  <p><span class="font-medium">Tehnologii:</span> {technologies}</p>
  <p><span class="font-medium">Complexitate:</span> {complexity}/5</p>
  <div class="form-control">
    <label class="label cursor-pointer justify-end pb-0">
      <span class="label text-lg mr-2 p-0">Terminat: </span>
      <input type="checkbox" class="checkbox checkbox-primary" />
    </label>
  </div>
  <a href="/dashboard/{name}" class="link link-primary">Vezi detalii</a>
</div>
