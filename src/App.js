import logo from './logo.svg';
import './App.css';

import StateTutorial from './Components/StateTutorial';
import ReducerTutorial from './Components/ReducerTutorial';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <StateTutorial />
      <ReducerTutorial />
    </div>
  );
}

export default App;
