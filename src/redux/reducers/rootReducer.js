import axios from 'axios'
const initialState = {
    posts: [],
    filteredData:[]
}


const rootReducer = (state = initialState, action = {}) => {
    console.log("Inside the root reducer",state, action)
    if(action.type === 'FETCH_ALLPOSTS_DATA'){
        return {
            ... state,
            posts:action.payload,
            filteredData:action.payload
        }
    }
    else if(action.type === 'FETCH_INDIVIDUAL_POSTS_DATA'){
        return {
            ...state,
            individualPost:action.payload
        }
    }
    else if(action.type === 'FETCH_FILTEREDPOSTS_DATA') {
        return {
            ...state,
            filteredData:action.payload
        }
    }
    return state;
}
export default rootReducer