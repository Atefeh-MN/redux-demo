
import './App.css';
import {Provider}  from 'react-redux'
import CakesContianer from './components/CakesContianer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakesContianer />
        <HooksCakeContainer />
        <HooksIceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
