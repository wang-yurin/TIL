import React from 'react';
import withLoading from './withLoading';

// HOC 사용 전
// function Button() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return loading ? <p>Loading...</p> : <button>Button</button>;
// }

// HOC 사용
function Button() {
  return <button>Button</button>;
}

export default withLoading(Button);
