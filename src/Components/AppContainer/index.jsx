import React, { useEffect } from 'react';
import HeaderSection from '../Header';

import { useRouter } from 'next/router';

function orgContainer(Component) {
  const router = useRouter();

  useEffect(()=>{
    if(localStorage.getItem('auth') !== 'true' && !router.pathname.includes('/signup', '/login') ){
      router.push('/login')
    }
  },[])
  return (
    <div className="app-container">

      <div>
        <HeaderSection />

      </div>
      <div style={{ width: '100%' }}>
          <div className="component-wrapper">
              <Component />
            </div>
      </div>
    </div>
  );
}

orgContainer.propTypes = {

};

export default orgContainer;
