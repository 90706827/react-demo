import React from 'react';
import { useSearchParams } from 'react-router';

const NewDetail: React.FC = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  return (
    <ul>
      <li>ID:{id}</li>
      <li>title:{title}</li>
      <li>content</li>
    </ul>
  );
};

export default NewDetail