import './App.css';
import React from "react"
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Login from "./Login";
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="app">

      {!user ? (
        <Login/>
      ):(
        <React.Fragment>
      
         <Header/>
      <div className="app__body">
        
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
      </React.Fragment>
      )}
     
    </div>
  );
}

export default App;
