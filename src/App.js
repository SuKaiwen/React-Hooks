import logo from './logo.svg';
import './App.css';

import StateTutorial from './Components/StateTutorial';
import ReducerTutorial from './Components/ReducerTutorial';
import EffectTutorial from './Components/EffectTutorial';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
    </div>
  );
}

export default App;
