<script>
  let hasProjectIdea = false;
  let wantsTehnologies = false;
  let knowsComplexity = false;
</script>

<h1>Comandă</h1>
<div class="flex justify-center">
  <div
    class="flex flex-col items-center mt-4 bg-success-content rounded-xl px-32 py-3 w-fit"
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
