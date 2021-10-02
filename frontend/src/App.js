import Login from './login'
import Home from'./home'
import Experience from './experience';
import React,{Component} from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
class App extends Component{
render(){
  return(
    <React.Fragment>
      <BrowserRouter>
        <div>
          <Switch>
            <div>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/experiences" component={Experience}/>
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}
}
export default App;