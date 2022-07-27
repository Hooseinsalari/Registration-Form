import Form from './components/Form';

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="h-screen bg-slate-100 grid place-items-center">
      <Form />

      <ToastContainer />
    </div>
  );
}

export default App;
