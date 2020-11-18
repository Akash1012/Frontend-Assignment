import './App.css';
import NavBar from './Component/NavBar'
import CheckOutPage from './Component/checkOut/checkOut.compoment'
import Filter from './Component/Filter/filter.compoment'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Filter} />
        <Route exact path='/checkout' component={CheckOutPage} />
      </Switch>
    </div>
  );
}

export default App;
