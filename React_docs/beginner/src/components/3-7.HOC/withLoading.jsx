import React, { useEffect, useState } from 'react';

// withLoading 함수는 인자로 컴포넌트를 받고 WithLoadingComponent 컴포넌트를 리턴한다.
export default function withLoading(Component) {
  const WithLoadingComponent = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);

      return () => clearTimeout(timer);
    }, []);

    return loading ? <p>Loading...</p> : <Component {...props} />;
  };

  return WithLoadingComponent;
}
