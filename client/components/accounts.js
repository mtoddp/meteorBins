import React, {Component} from 'react'; 
import ReactDOM from 'react-dom';
import {Template } from 'meteor/templating';
import {Blaze } from 'meteor/blaze'; 

export default class Accounts extends Component {
  //called when component is rendered
  componentDidMount(){
   //render blaze accts form and render it in render  method  
    this.view = Blaze.render(Template.loginButtons, 
                ReactDOM.findDOMNode(this.refs.container));
  }

  //whenever componenta bout to be removed
  componentWillUnmount(){
    //find the forms we craeted and destroy them
   Blaze.remove(this.view);  
  }

  render(){
    return(
      <div ref="container"></div> 
    );
  }
}


