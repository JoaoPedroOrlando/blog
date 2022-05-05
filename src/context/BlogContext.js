import React, {useReducer} from 'react';
import createDataContext from './createDataContext';


const addBlogPost = (dispatch)=>{
    return ()=>{
        dispatch({type:'add_blogpost'});
    };
}

const deleteBlogPost = (dispatch)=>{
    return (id)=>{
        dispatch({type:'delete_blogpost', payload:id});
    };
}

const reducer = (state,action) => {
    switch(action.type){
        case 'add_blogpost':
            return [...state, 
                {
                    id: Math.floor(Math.random()*99999),
                    title: `Blog Post #${state.length + 1}`
                }]
        case 'delete_blogpost':
            //The filter() method creates a new array filled with elements that pass a test provided by a function.
            return state.filter((blogPost)=> blogPost.id !== action.payload);
        default:
            return state;
    }
}

export const {Context,Provider} = createDataContext(reducer,{addBlogPost,deleteBlogPost},[]);
