
import './App.css';
import UsersRegister from './components/UsersRegister';
import CarDriver from './components/CarDriver';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Transfer from './components/Transfer';
import AllTransfers from './components/AllTransfers';
import EditPage from './components/EditPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<UsersRegister />}  />
      <Route path='cardriver' element={<CarDriver />}  />
      <Route path='cardriver/transfer' element={<Transfer />}  />
      <Route path='cardriver/transfer/alltransfers' element={<AllTransfers />}  />
      <Route path='cardriver/transfer/alltransfers/edit/*' element={<EditPage />}  />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
