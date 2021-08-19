import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Components/Features/Layout/LayoutComponent';
import MainRouting from './Routing/MainRouting';
import backgroundImage from './images/tech-background.jpeg'
import './App.css';
import Login from './Components/Pages/Login/LoginComponent';


function App() {

  
  return (
    <div className="App"
    style={{
      background:`url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
    }}
    >
      <Login/>
      <Router>
        <Layout >
          <MainRouting/>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
