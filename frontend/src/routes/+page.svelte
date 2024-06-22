<script lang="ts">
  let hasProjectIdea = false;
  let wantsTehnologies = false;
  let knowsComplexity = false;
</script>

<h1>Comandă</h1>
<div class="flex justify-center">
  <div
    class="flex flex-col items-center my-4 bg-success-content rounded-xl px-32 py-3 w-fit"
  >
    <label for="name" class="form-control w-fit max-w-xs mb-1">
      <span class="label font-medium">Cum te cheamă?</span>
      <input
        type="text"
        placeholder="Popescu Ion"
        name="name"
        class="input input-bordered input-info w-fit max-w-xs"
      />
    </label>
    <label for="phone" class="form-control w-fit max-w-xs my-1">
      <span class="label font-medium">Număr de telefon:</span>
      <input
        type="tel"
        placeholder="072 123 4567"
        name="phone"
        class="input input-bordered input-info w-fit max-w-xs"
      />
    </label>
    <label
      for="hasProjectIdea"
      class="cursor-pointer label justify-normal mt-1"
    >
      <span class="label mr-3 font-medium">Am o idee de proiect: </span>
      <input
        bind:checked={hasProjectIdea}
        name="hasProjectIdea"
        type="checkbox"
        class="checkbox checkbox-info"
      />
    </label>
    {#if hasProjectIdea}
      <div>
        <span class="label font-medium py-0 mb-1"
          >Detaliază ideea de proiect:</span
        >
        <textarea
          id="ideaDetails"
          class="textarea textarea-info w-80 h-40 mb-1"
          placeholder="Idee..."
        ></textarea>
      </div>
      <label for="projectComplexity" class="form-control w-full max-w-xs my-1">
        <span class="label font-medium py-0 mb-1">Nivel complexitate:</span>
        <div class="flex flex-row items-center w-fit">
          <label
            for="knowsComplexity"
            class="form-control w-full max-w-xs my-1 mr-3 pl-1">Nu știu</label
          >
          <input
            bind:checked={knowsComplexity}
            name="knowsComplexity"
            type="checkbox"
            class="checkbox checkbox-info"
          />
        </div>
        {#if !knowsComplexity}
          <input
            type="range"
            name="projectComplexity"
            min="1"
            max="5"
            value="1"
            step="1"
            class="range range-info"
          />
          <div class="w-full flex justify-between text-xs px-2">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        {/if}
      </label>
    {/if}
    <label for="wantsTehnologies" class="cursor-pointer label justify-normal">
      <span class="label mr-3 font-medium"
        >Vreau să folosești anumite tehnologii (React, MongoDB, etc.):
      </span>
      <input
        bind:checked={wantsTehnologies}
        name="wantsTehnologies"
        type="checkbox"
        class="checkbox checkbox-info"
      />
    </label>
    {#if wantsTehnologies}
      <div>
        <span class="label py-0 mb-1"
          >Vreau sa folosești următoarele tehnologii:</span
        >
        <textarea
          id="wantedTechnologies"
          placeholder="React, MongoDB, etc."
          class="textarea textarea-info w-80 h-40 mb-4"
        ></textarea>
      </div>
    {/if}
    <button
      class="btn btn-outline btn-secondary min-h-5 h-10 px-5 text-base"
      id="sendResponseBttn">Submit</button
    >
  </div>
</div>
<button
  class="btn p-2 min-h-0 h-fit btn-ghost fixed bottom-10 right-20"
  on:click={() => faq.showModal()}
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    height="32px"
    viewBox="0 -960 960 960"
    width="32px"
    fill="#000000"
    ><path
      d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
    /></svg
  ></button
>
<div class="w-full flex justify-end mt-2"></div>
<dialog id="faq" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Cum facem cu plata?</h3>
    <p class="pt-4 pb-1">
      Prețul va fi stabilit în funcție de complexitatea proiectului.
    </p>
    <p>Metoda de plată va fi discutată în privat.</p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Închide</button>
      </form>
    </div>
  </div>
</dialog>
