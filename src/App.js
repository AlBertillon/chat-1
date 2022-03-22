import { BrowserRouter } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
