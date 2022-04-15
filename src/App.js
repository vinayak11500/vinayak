import { connect } from 'react-redux';
import './App.css';
import {getUserDetails} from './actions/actions';
import AddData from './components/AddData';
import ViewData from './components/ViewData';

function App(props) {
    return (
    <div className="App1">
      <AddData/>
      <ViewData/>
    </div>
  );
}
const mapStateToProps=state=>({
  temp:state.temp,
  user:state.user,
})
const mapDispatchToProps=dispatch=>({
  getUserDetails:()=>dispatch(getUserDetails())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
