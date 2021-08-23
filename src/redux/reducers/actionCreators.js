import axios from 'axios'

export function getAllPosts() {
    return function (dispatch) {
        return getPostAPIData().then(response => {
            dispatch({
                type: "FETCH_ALLPOSTS_DATA",
                payload: response ? response.data : 'NA'
            })
        })
    }
 }

 
export function getFilteredData(lowercaseValue, AllPosts) {
    console.log("Inside GetFilerted",AllPosts,lowercaseValue)
    return dispatch => {
        let filteredPosts = AllPosts.filter(el => el.title.toLowerCase().includes(lowercaseValue))
        console.log("Inside the FilterPosts",filteredPosts)
        dispatch({
            type: "FETCH_FILTEREDPOSTS_DATA",
            payload: filteredPosts ? filteredPosts : 'NA'
        })
    }
}

 const getPostAPIData = async () => {
    console.log("Inside the Get All Posts API Call")
     try{
      let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return response;
     }
     catch(e){
         console.log(e)
     }
 }

 export function getIndividualPosts(id) {
    return function (dispatch) {
        return getIndividualPostsData(id).then(response => {
            dispatch({
                type: "FETCH_INDIVIDUAL_POSTS_DATA",
                payload: response ? response.data : 'NA'
            })
        })
    }
 }
 
 const getIndividualPostsData = async (id) => {
    console.log("Inside the Get Individual Posts API Call")
     try{
      let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      return response;
     }
     catch(e){
         console.log(e)
     }
 }