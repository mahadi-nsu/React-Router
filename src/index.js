import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//import router for reactJS
import {BrowserRouter, Route, Link} from 'react-router-dom';
//import { BrowserRouter, Route } from 'react-router-dom'
//import { BrowserRouter as Router, Route } from 'react-router-dom';


//components
import Posts from './components/posts';
import Profile from './components/profile';
import Postitems from './components/postItems';
class App extends Component{
	render ()
	{
		return (<div>
		          Home
		      </div>)
	}
}


ReactDOM.render(

  <BrowserRouter>
    <div>
       <header>
         <Link to ="/" > Home </Link> <br/>
         <Link to ="/posts" > post </Link> <br/>
         <Link to ="/profile" > profile </Link> <br/>
         <Link to ="/postItems" > PostItem </Link> <br/>
         <hr />
       </header>

       <Route exact path = "/" component = {App}> </Route>
       <Route path = "/posts" component = {Posts}> </Route>
       <Route path = "/profile" component = {Profile}> </Route>
       <Route path = "/postItems/:id" component = {Postitems}> </Route>


    </div>
  </BrowserRouter>



, document.getElementById('root'));
