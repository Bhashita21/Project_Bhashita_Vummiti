import { Provider } from 'react-redux';
import './App.css';
import store from "./components/Store";
import VideoCard from './components/videoCard';




function App() {
  return (
    <Provider store={store}>
    <div>
      <VideoCard/>
    </div>
    </Provider>
  );
}


export default App;
