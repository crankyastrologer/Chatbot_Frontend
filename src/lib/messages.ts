// src/stores/messages.ts
import { writable } from 'svelte/store';

interface Message {
  text: string;
  sender: 'user' | 'server';
}

export const messages = writable<Message[]>([]);
