import React from 'react';
import { useLocation } from 'react-router-dom';

const MessageDetails: React.FC = () => {
  const location = useLocation();
  console.log(location);
  const { id, title } = location.state || { id: null, title: null };

  return (
    <ul>
      <li>ID:{id}</li>
      <li>title:{title}</li>
      <li>content</li>
    </ul>
  );
};

export default MessageDetails
