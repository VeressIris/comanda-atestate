<script>
  let hasProjectIdea = false;
  let wantsTehnologies = false;
  let knowsComplexity = false;
</script>

<h1>Comandă</h1>
<div class="flex justify-center">
  <div
    class="flex flex-col items-center mt-10 bg-success-content rounded-xl px-32 py-3 w-fit"
  >
    <label for="name" class="form-control w-fit max-w-xs mb-3">
      <span class="label">Cum te cheamă?</span>
      <input
        type="text"
        placeholder="Popescu Ion"
        name="name"
        class="input input-bordered input-info w-fit max-w-xs"
      />
    </label>
    <label for="phone" class="form-control w-fit max-w-xs my-3">
      <span class="label">Număr de telefon:</span>
      <input
        type="tel"
        placeholder="072 123 4567"
        name="phone"
        class="input input-bordered input-info w-fit max-w-xs"
      />
    </label>
    <label
      for="hasProjectIdea"
      class="cursor-pointer label justify-normal my-3"
    >
      <span class="label mr-3">Am o idee de proiect: </span>
      <input
        bind:checked={hasProjectIdea}
        name="hasProjectIdea"
        type="checkbox"
        class="checkbox checkbox-info"
      />
    </label>
    {#if hasProjectIdea}
      <div>
        <span class="label">Detaliază ideea de proiect:</span>
        <textarea
          id="ideaDetails"
          class="textarea textarea-info w-80 h-40"
          placeholder="Idee..."
        ></textarea>
      </div>
      <label for="projectComplexity" class="form-control w-full max-w-xs my-3">
        <span class="label">Nivel complexitate:</span>
        <div class="flex flex-row items-center w-fit">
          <label
            for="knowsComplexity"
            class="form-control w-full max-w-xs my-3 mr-3">Nu știu</label
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
            class="range range-info h-4"
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
    <label
      for="wantsTehnologies"
      class="cursor-pointer label justify-normal my-3"
    >
      <span class="label mr-3"
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
        <span class="label">Vreau sa folosești următoarele tehnologii:</span>
        <textarea
          id="wantedTechnologies"
          placeholder="React, MongoDB, etc."
          class="textarea textarea-info w-80 h-40"
        ></textarea>
      </div>
    {/if}
    <button class="btn btn-outline btn-secondary" id="sendResponseBttn"
      >Submit</button
    >
  </div>
</div>
