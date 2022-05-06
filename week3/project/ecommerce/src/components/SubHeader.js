import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SubHeader() {
  const location = useLocation().pathname;
  const [title, setTitle] = useState('Products');

  useEffect(() => {
    if (location === '/') {
      setTitle('Products');
    } else if (location === '/favorites') {
      setTitle('Favorites');
    }
  }, [location]);

  return <h1 className="subheader">{title}</h1>;
}

export default SubHeader;
