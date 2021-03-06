import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const reducer = (state,action) => {
    switch(action.type){
        case 'get_blogpost':
            return action.payload;
        case 'add_blogpost':
            return [...state, 
                {
                    id: Math.floor(Math.random()*99999),
                    title: action.payload.title,
                    content:action.payload.content,
                }]
        case 'delete_blogpost':
            //The filter() method creates a new array filled with elements that pass a test provided by a function.
            return state.filter((blogPost)=> blogPost.id !== action.payload);
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        default:
            return state;
    }
}

getBlogPosts = dispatch =>{
    return async () =>{
        const response = await jsonServer.get('/blogposts');  
        // response.data === [{},{},{}] 
        dispatch({type:'get_blogpost',payload:response.data});
    };
};


const addBlogPosts = (dispatch)=>{
    return async (title,content,callback)=>{
        await jsonServer.post('/blogposts',{title:title,content:content});
        // dispatch({type:'add_blogpost', 
        // payload:{
        //     title: title,
        //     content:content,
        // }})
         if(callback){
            callback();
         };
    };
};

const deleteBlogPost = (dispatch)=>{
    return (id)=>{
        dispatch({type:'delete_blogpost', payload:id});
    };
};

const editBlogPost = (dispatch) =>{
    return (id,title,content,callback)=>{
        dispatch({type:'edit_blogpost',payload:{
            id:id,
            title: title,
            content:content,
        }});
        if(callback){
            callback();
        }
    }
}

export const {Context,Provider} = createDataContext(reducer,{addBlogPosts, deleteBlogPost, editBlogPost,getBlogPosts,},[]);
