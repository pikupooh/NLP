import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";

import DatasetList from './DatasetList';

function App() {
  return (
    <div>
      <div className='app_navbar'>
        <span className='navbar_brand'>WELLS FARGO</span>
        <span className='navbar_product_brand'>D2X Dataset Manager</span>
        <span>
          <a className='navbar_link' href='/users_dataset'>Users Dataset</a>
        </span>
        <span>
          <a className='navbar_link' href='/training_dataset'>Training Dataset</a>
        </span>
      </div>
      <Router>
        <div className="app_body">
          <Routes>
            <Route path="/users_dataset" element={<DatasetList usersDataset={true}/>}>
              
            </Route>
            <Route path="/training_dataset" element={<DatasetList usersDataset={false}/>}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
