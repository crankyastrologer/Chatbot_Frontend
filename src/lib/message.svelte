<script lang="ts">
  import { Label } from 'flowbite-svelte';
  export let data:{ text: string; sender: 'user' | 'server' }
</script>
{#if data.sender=="server" }
<div class="flex flex-col items-start space-y-2">
  <Label class="bg-black text-white rounded-xl py-2 px-4 max-w-xs break-words mx-10 my-10">
    {data.text}
  </Label>
</div>
  {:else}
  <div class="flex flex-col items-end space-y-2">
  <Label class="bg-blue-600 text-white rounded-xl py-2 px-4 max-w-xs break-words">
    {data.text}
  </Label>
</div>
  {/if}

