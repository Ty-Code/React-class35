import { useNavigate } from 'react-router-dom';

function SubHeader({ setSelectedCategory }) {
  const navigate = useNavigate();

  function returnToStatusQuo() {
    navigate('/');
    setSelectedCategory('');
  }

  return (
    <h1 className="subheader" onClick={returnToStatusQuo}>
      Products
    </h1>
  );
}

export default SubHeader;
