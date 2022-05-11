import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  function returnToStatusQuo() {
    navigate('/');
  }

  return (
    <h1 className="header" onClick={returnToStatusQuo}>
      E-Commerce Website
    </h1>
  );
}
