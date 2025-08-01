import './App.css'
import { Provider } from 'react-redux';
import { store } from './app/store';
import AppContainer from './AppContainer';


function App() {

  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  )
}

export default App
