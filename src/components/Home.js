import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'; 
import postImg from '../post.png';
import "./Home.css";
import {connect} from 'react-redux'
import { getAllPosts , getFilteredData } from "../redux/reducers/actionCreators"

class Home extends Component {
state={
    filteredPosts:[]
}
    componentDidMount(){
       this.props.getAllPosts()
    }

    _handleSearchChange = e => {
        const { value } = e.target;
        console.log("Inside the HandleSearch",value)
        const lowercasedValue = value.toLowerCase();
        this.props.getFilteredData(lowercasedValue,this.props.posts)
      };

    render(){
        console.log("This.props",this.props)
        const {filteredPosts} = this.props;
        const postList = filteredPosts.length > 0 ? (
            filteredPosts.map(post => {
                return (<div className="post card" key ={post.id}>
                   <img src={postImg} alt="A Post"></img>
                    <div className="card-content">
                       <Link to={'/' + post.id}>
                       <span className="card-title blue-text">{post.title}</span>
                       </Link>
                        <p>{post.body}</p>
                    </div>
                </div>)
            })

        ) : (
            <div className="center">No Posts!!!</div>

        )
        return(
            <div className="container home">
                <h4 className="center">Home </h4>
                <input onChange={this._handleSearchChange} placeholder="Search"/>
                {postList}
            </div>
            )
    }
   
}
const mapStateToProps = (state) => {
    console.log("inside MapStatetOPROPS",state)
    return {
        posts: state.posts,
        filteredPosts: state.filteredData
    }
}

const  mapDispatchToProps = (dispatch) => ({
    getAllPosts : () => dispatch(getAllPosts(null)),
    getFilteredData : (lowercasedValue,Allposts) => dispatch(getFilteredData(lowercasedValue,Allposts))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)