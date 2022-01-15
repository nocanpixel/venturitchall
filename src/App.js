import { Helmet,HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashContent from './components/DashContent';
import './App.css';


function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Platform</title>
        </Helmet>
      </HelmetProvider>
      <Navbar/>
      <Sidebar/>
      <DashContent/>
    </>
  );
}

export default App;
