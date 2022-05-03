import React , {useReducer} from 'react';

export default (reducer,actions, initialState) =>{
    const Context = React.createContext();

    const Provider = ({children})=>{

        const [state,dispatch] = useReducer(reducer, initialState);

        const boundActions = {};

        for (let key in actions){
            //You can add new properties to existing JavaScript objects the same way you would modify them.
            //The code below is creating a new property using the key's name and passing to it a function that calls dispath
            //{ addBlogPost: ()=>{dispatch({type:'add_blogpost'})}}
            boundActions[key] = actions[key](dispatch);
        }
        
        return(
            <Context.Provider value ={{state,...boundActions}}>
                {children}
            </Context.Provider>
        );

    }

    return {Context,Provider};
}