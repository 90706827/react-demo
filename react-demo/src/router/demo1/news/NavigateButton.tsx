import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function NavigateButton() {
  const navigate = useNavigate();
  return (
    <div>
      <StepBackwardOutlined type='primary' onClick={() => navigate(-1)}>后退</StepBackwardOutlined>
      &nbsp;
      <StepForwardOutlined type='primary' onClick={() => navigate(1)}>前进</StepForwardOutlined>
    </div>
  )
}