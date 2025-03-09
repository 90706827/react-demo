import { useLocation } from 'react-router-dom';

export const NewDetails = () => {
  const location = useLocation();
  console.log(location);
  const { id, title } = location.state || { id: null, title: null };

  return (
    <ul>
      <li>ID: {id}</li>
      <li>Title: {title}</li>
      <li>Content: 这里是新闻内容</li>
    </ul>
  );
};

export default NewDetails;