// src/utils/getans.ts
import axios from 'axios';
import { messages } from '$lib/messages';

export async function getans(text: string): Promise<void> {
  // Add the user's message to the store
  messages.update(current => [...current, { text, sender: 'user' }]);

  try {
    const response = await axios.post("url", {
      question: text

    });

    const data = response.data;
    console.log('Success:', data);

    // Add the server's response to the store
    messages.update(current => [...current, { text: data.response, sender: 'server' }]);
  } catch (error) {
    console.log("there is an error")
    console.error('Error:', error);

    // Optionally, handle errors by updating the store
    messages.update(current => [...current, { text: 'Error occurred', sender: 'server' }]);

    throw error;
  }
}
