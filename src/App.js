import logo from './logo.svg';
import './App.css';

import StateTutorial from './Components/StateTutorial';
import ReducerTutorial from './Components/ReducerTutorial';
import EffectTutorial from './Components/EffectTutorial';
import UseRefTutorial from './Components/UseRefTutorial';
import LayoutEffect from './Components/LayoutEffect';
import ImperativeHandleTutorial from './Components/ImperativeHandleTutorial';
import ContextTutorial from './Components/ContextTutorial';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <UseRefTutorial />
      <LayoutEffect />
      <ImperativeHandleTutorial />
      <ContextTutorial />
    </div>
  );
}

export default App;
