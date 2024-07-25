import React from 'react';
import styles from './MessageItem.module.scss';

type Props = {
  message: string;
  itemIndex: number
};

const MessageItem: React.FC<Props> = ({ message, itemIndex }) => {
  return (
    <div className={styles.messageItem}>
      <div className={styles.messageContent}>{itemIndex + 1}) {message}</div>
    </div>
  );
};

export default MessageItem;
