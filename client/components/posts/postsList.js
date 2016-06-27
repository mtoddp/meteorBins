import React, {Component} from 'react';
import {createContainer } from 'meteor/react-meteor-data';
import {Posts} from '../../../imports/collections/posts'; 

class PostsList extends Component {
  onPostRemove(post){
    Meteor.call('posts.remove', post); 
  }

  renderPosts(){
      return this.props.posts.map(post =>{
        return (
          <li className="list-group-item" key={post._id}>
            Post {post._id}
            <span className="pull-right">
              <button 
                className="btn btn-danger"
                    onClick ={() => this.onPostRemove(post)}> 
                    Remove
                </button>
            </span>
          </li>
        )
      }); 
  }

  render(){
    return(
      <ul className="list-group"> 
        {this.renderPosts()}
      </ul> 
    );
  }
}

export default createContainer(() => {
    Meteor.subscribe('posts'); 

    //whatever we return will show up as props
    return { posts: Posts.find({}).fetch() }; 
}, PostsList);
