import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { getIndividualPosts } from "../redux/reducers/actionCreators"

class Post extends Component {
    state ={ 
        showComments:false
    }

    componentDidMount (){
        let id = this.props.match.params.post_id;
        this.props.getIndividualPosts(id);
    }

    handleClick = () => {
        console.log("Inside Handle Click")
        this.setState({showComments:true})
    }
render(){
    console.log("Complete Props",this.props)
    const post = this.props.individualPost ? (
        <div className="post">
            <h4  className="center"> {this.props.individualPost.title}</h4>
            <button onClick={this.handleClick}>Load Comments</button>
        </div>
    ) : (
        <div className = "center"> Loading Post!!!!!!</div>
    )
    return(
        <div className="container">
            {post}
            {this.state.showComments ? (<div class="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Comments</span>
          <h4>ID: {this.props.individualPost.id}</h4>
          <p>BODY: {this.props.individualPost.body}</p>
        </div>
      </div>
    </div>
  </div>) : (null)}
        </div>
    )
}
}

const mapStateToProps = (state, ownProps) => {
    console.log("inside the MapStateToProps",state)
    return {
        individualPost: state.individualPost
    }
}

const  mapDispatchToProps = (dispatch) => ({
    getIndividualPosts : (id) => dispatch(getIndividualPosts(id))
});


export default connect(mapStateToProps,mapDispatchToProps)(Post)