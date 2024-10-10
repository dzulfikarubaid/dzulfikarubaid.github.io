import React from 'react'
import Navbar from '../components/navbar';
import Splash from '../pages/splash';
import About from '../components/about';
import Home from '../pages/home';

const Layout = () => {
    
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 4000); // Splash screen tampil selama 3 detik
      return () => clearTimeout(timer);
    }
  }, [loading]);
  return (
    <div>
    {loading ? <Splash></Splash> : 
    <>
    <Navbar></Navbar>
    <div className='w-full pt-32 h-full pb-20 '>
    <Home></Home>
    </div>
    
    </>}
    
    </div>
  )
}

export default Layout