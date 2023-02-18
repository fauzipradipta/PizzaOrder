
import Navigation from './Component/Page/Navigation';
// import {Routes} from 'react-router-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>

        <Navigation/>
      </Router>

    </div>
  );
}

export default App;
