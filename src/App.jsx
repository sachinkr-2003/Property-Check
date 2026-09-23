import React, { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import CustomCursor from './components/CustomCursor';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <>
      <CustomCursor />
      <AppRoutes />
    </>
  );
}

export default App;
