<script>
  import Order from "../../components/order.svelte";
</script>

<h1>Dashboard</h1>
<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
  <Order
    name="Georgica ionescu"
    technologies={["React", "Tailwind"]}
    complexity={3}
  />
  <Order
    name="Ioneasca Madalina"
    technologies={["React", "Tailwind"]}
    complexity={4}
  />
  <Order
    name="Mafteiu Emanuela"
    technologies={["React", "Tailwind"]}
    complexity={2}
  />
  <Order
    name="Ivascu Silca"
    technologies={["React", "Tailwind"]}
    complexity={5}
  />
</div>
