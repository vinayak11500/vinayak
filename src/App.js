import './App.css';
import AddData from './components/AddData';
import ViewData from './components/ViewData';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
function App(props) {
    return (
    <div className="App1">
      <Router>
          <ul className='flex'>
            <li className='mlr2'><Link to="/addData">Add Data</Link></li>
            <li className='mlr2'><Link to="/viewData">View Data</Link></li>
          </ul>
        <Routes>
          <Route exact path="/addData" element={<AddData/>}></Route>
          <Route exact path="/viewData" element={<ViewData/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
