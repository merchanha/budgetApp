
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import { GlobalContextProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <Header />
          <Balance />
          <AddTransaction />        
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
