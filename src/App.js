import { Route, Routes } from 'react-router-dom';
import './App.css';

import FirstPage from './components/firstpage/FirstPage';
import AddEmployee from './components/addemployee/AddEmployee';
import ListEmployee from './components/listemployee/ListEmployee';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/addemployee' element={<AddEmployee />} />
        <Route path='/listemployee' element={<ListEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
