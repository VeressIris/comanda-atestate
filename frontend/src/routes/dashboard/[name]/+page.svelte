<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  let completed = false;
</script>

<h1 class="mb-4">Proiect pentru <i>{data.title}</i></h1>
<h3 class="mb-2">Număr de contact: 072 123 456</h3>
<h3 class="mb-2">Tehnologii sugerate:</h3>
<h3 class="mb-2">Complexitate proiect: X/5</h3>
<h3 class="mb-2">Idee proiect:</h3>
<p class="text-lg">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus
  iure at expedita optio commodi eligendi mollitia dolor in, itaque atque
  necessitatibus molestias aliquam omnis incidunt delectus illum sunt minima!
</p>
<div class="form-control">
  <label class="label cursor-pointer justify-end p-0">
    <span class="label font-medium text-xl mr-2">Terminat: </span>
    <input
      bind:checked={completed}
      type="checkbox"
      class="checkbox checkbox-primary"
    />
  </label>
</div>
