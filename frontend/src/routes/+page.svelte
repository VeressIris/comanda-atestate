<h1>Comandă</h1>
<div class="flex justify-center">
  <div
    class="mt-10 bg-base-200 rounded-xl px-32 py-3 flex flex-col items-center w-fit"
  >
    <label class="form-control w-fit max-w-xs mb-3">
      <span class="label">Cum te cheamă?</span>
      <input
        type="text"
        placeholder="Popescu Ion"
        class="input input-bordered input-info w-fit max-w-xs"
      />
    </label>
    <label class="form-control w-fit max-w-xs my-3">
      <span class="label">Număr de telefon:</span>
      <input
        type="tel"
        placeholder="072 123 4567"
        class="input input-bordered input-info w-fit max-w-xs"
      />
    </label>
    <label class="cursor-pointer label justify-normal my-3">
      <span class="label mr-3">Am o idee de proiect: </span>
      <input type="checkbox" class="checkbox checkbox-info" />
    </label>
    <span class="label">Detaliază ideea de proiect:</span>
    <textarea class="textarea textarea-info w-80 h-40" placeholder="Idee..."
    ></textarea>
    <label class="form-control w-full max-w-xs my-3">
      <span class="label">Nivel complexitate:</span>
      <input
        type="range"
        min="1"
        max="5"
        value="1"
        class="range range-info h-4"
        step="1"
      />
      <div class="w-full flex justify-between text-xs px-2">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </label>
  </div>
</div>
