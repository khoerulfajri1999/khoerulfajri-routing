import { Link, Outlet } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>News App</h1>

        <nav>
          <Link to="/Business" className='mr'>Business</Link>
          <Link to="/Sports" className='mr'>Sports</Link>
          <Link to="/Entertainment" className='mr'>Entertainment</Link>
        </nav>

        <Outlet />
    </div>
  );
}

export default App;
