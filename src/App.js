import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from './components/dash/Dashboard';
import History from './components/history/History';
import './App.css';

class App extends Component {
  
  render() {
    return (
      
      <Provider store={store}>
        <Router>
        <div className="App container">
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/history/:id" component={History}/>
          </div>
        </Router>
      </Provider>
      
    );
  }
}

export default App;

// let row = [{
//   id: 1,
//   name: 'nikira',
//   password: 'qweerty',
//   type: 'admin'
// },
// {
//   id: 2,
//   name: 'nikira1',
//   password: 'qweerty1',
//   type: 'admin1'
// },
// {
//   id: 3,
//   name: 'nikira2',
//   password: 'qweerty2',
//   type: 'admin2'
// },
// {
//   id: 4,
//   name: 'nikira3',
//   password: 'qweerty1',
//   type: 'admin3'
// }
// ];


// let user = {
//   id: 3,
//   password: 'nekit'
// }

// function edit(user){
//   let index = row.indexOf(row.find(x => x.id === user.id));

//   for(let key in user){
//     row[index][key] = user[key]
//   }

//   // let shit = Object.keys(user)

//   // for(let key in row[index]){
//   //   if (shit.indexOf(key) >= 0 && key != 'id'){ 
//   //     row[index][key] = user[key]
//   //   } 
//   // }
//   console.log(row[index]);
// }