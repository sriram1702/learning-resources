
import './App.css';
import {  useAuth0 } from '@auth0/auth0-react';
import Footer from './components/Footer/Footer';
// import content from './components/resources/content';
// import Content from './components/resources/content';
// import content from './components/resources/Content';
import Content from './components/resources/Content'
import LogoutButton from './components/auth/LogoutButton';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();


  if (!isAuthenticated) {
    return <div><h1 className="text-center">Please log in to see the learning resources.</h1></div>;
  }
    if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
     <h1>Learning Resources</h1>
     {/* <h4>(For now this website will work only in desktop ,if you are opening in the phone means please open it in the desktop mode)</h4> */}
   <Content></Content>
   <LogoutButton/>
     <Footer></Footer>
     
    </div>
  );
}

export default App;
