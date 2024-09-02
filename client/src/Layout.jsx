import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateReport from './pages/CreateReport';
import CustomerForm from './pages/CustomerForm';
import CreateItem from './pages/CreateItem';
import UpdateReport from './pages/UpdateReport'
import MasterCity from './pages/MasterCity';
import LedgerEntry from './pages/LedgerEntry';
import LedgerReport from './pages/LedgerReport';
const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customer-form" element={<CustomerForm />} />
        <Route path="/create-item" element={<CreateItem />} />
        <Route path="/master-city" element={<MasterCity />} />
        <Route path="/reports-analysis" element={<CreateReport />} />
        <Route path="/update-analysis" element={<UpdateReport />} />
        <Route path="/ledger-entry" element={<LedgerEntry />} />
        <Route path="/party-detail-print" element={<LedgerReport />} />
      </Routes>
    </Router>
  );
};

export default Layout;
