<script lang="ts">
    import '../app.css';import '../app.css';
    import {getans} from "$lib/send response";
    import { Textarea, ToolbarButton } from 'flowbite-svelte';
  import {  PaperPlaneOutline } from 'flowbite-svelte-icons';
  let inputText: string = '';
   async function sendMessage(): Promise<void> {
    if (inputText.trim()) {
      await getans(inputText);
      inputText = '';
    }
  }
</script>

<slot></slot>
<form class="fixed bottom-3 left-0 bg-red-500 w-screen h-12">
  <label for="chat" class="sr-only py-10">Your message</label>
  <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 ">

    <Textarea id="chat" class="mx-4 bg-white dark:bg-gray-800" rows="1"  bind:value={inputText}/>
    <ToolbarButton  type="submit" on:click={sendMessage} color="blue" class="rounded-full text-primary-600 dark:text-primary-500">
      <PaperPlaneOutline class="w-6 h-6 rotate-45" />
      <span class="sr-only">Send message</span>
    </ToolbarButton>
  </div>
</form>