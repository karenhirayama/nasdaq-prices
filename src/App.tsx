import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, NotFound, Stock } from './pages';

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nasdaq-stock/:stock_symbol/:stock_name' element={<Stock />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
