import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component'
import MyRoutes from './components/Routes'

function App() {
  return (
    <div className='container'>

        <Navbar />
        <br />
        <MyRoutes>
        </MyRoutes>

    </div>
  );
}

export default App;
