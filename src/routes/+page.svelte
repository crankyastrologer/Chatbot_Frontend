<script lang="ts">
  import Message from "$lib/message.svelte"
  import {messages} from "$lib/messages";

  let allMessages: { text: string; sender: 'user' | 'server' }[] = [];

  // Subscribe to the messages store
  messages.subscribe(value => {
    allMessages = value;
  });

</script>
{#each allMessages as message (message)}
    <Message data={message}/>
    {/each}
