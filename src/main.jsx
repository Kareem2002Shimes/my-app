import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Toaster />
  </>
);
