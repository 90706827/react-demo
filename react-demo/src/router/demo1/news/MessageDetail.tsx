import React from 'react';
import { useParams } from 'react-router-dom';

const MessageDetail: React.FC = () => {
  const { id, title } = useParams<{
    id: string, title: string
  }>();
  return (
    <ul>
      <li>ID:{id}</li>
      <li>title:{title}</li>
      <li>content</li>
    </ul>
  );
};

export default MessageDetail
