import * as React from 'react';
import styles from './ChatContainer.module.scss';

const ChatContainer = () => {
  const [messages, setMessages] = React.useState<
    { id: number; content: string }[]
  >([{ id: 1, content: 'Hello' }]);

  const [messageValue, setMessageValue] = React.useState<string>('');

  const handleSubmit = () => {};

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <p key={message.id}>{message.content}</p>
        ))}
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.inputField}>
          <input
            type="text"
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
          />
        </label>
        <button className={styles.sendButton} onSubmit={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatContainer;
