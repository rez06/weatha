import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">

      <Weather defaultCity='Manila'/>

      <p className='mt-5'>Coded by <a href="https://github.com/rez06/weatha">Rezyl Pelobello</a></p>
    </div>
  );
}

export default App;
