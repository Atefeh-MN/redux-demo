
import './App.css';
import {Provider}  from 'react-redux'
import CakesContianer from './components/CakesContianer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakesContianer />
        <HooksCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
