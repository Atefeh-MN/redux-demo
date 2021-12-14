
import './App.css';
import {Provider}  from 'react-redux'
import CakesContianer from './components/CakesContianer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/IceCreamContainer';
import CakeWithPayload from './components/CakeWithPayload';
import UsersContainer from './components/User';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakesContianer />
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <CakeWithPayload/> */}
        <UsersContainer/>
      </div>
    </Provider>
  );
}

export default App;
