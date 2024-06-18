import { ChatItemType } from "./types";

export const mockData: ChatItemType[] = [
  {
    avatarSrc: 'path/to/assets/anya.png', // Replace with the correct path
    name: 'Anya Forger',
    message: 'Hello, how are you doing today?',
    timestamp: '12:45 PM',
    isSelf: true,
  },
  {
    avatarSrc: 'path/to/assets/loidy.png', // Replace with the correct path
    name: 'Loid Forger',
    message: 'I am doing well, thank you! How about you?',
    timestamp: '12:46 PM',
    isSelf: false,
  },
  {
    avatarSrc: 'path/to/assets/anya.png', // Replace with the correct path
    name: 'Anya Forger',
    message: 'I am great, thanks for asking!',
    timestamp: '12:47 PM',
    isSelf: true,
  },
  {
    avatarSrc: 'path/to/assets/yor.png', // Replace with the correct path
    name: 'Yor Forger',
    message: 'Hello everyone, what are we discussing?',
    timestamp: '12:48 PM',
    isSelf: false,
  },
  {
    avatarSrc: 'path/to/assets/anya.png', // Replace with the correct path
    name: 'Anya Forger',
    message: 'Just catching up. How is your day going?',
    timestamp: '12:49 PM',
    isSelf: true,
  },
];