import React,{ useReducer , createContext } from 'react';

const initialState={
    selectedItem:[]
}

const favoriteReducer=(state,action)=>{
    console.log(state);
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItem.find(item=> item.id=== action.payload.id)){
                state.selectedItem.push({
                    ...action.payload
                    
                })
            }
            return{
                ...state,
                selectedItem: [...state.selectedItem],
               
            }
        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItem.filter(item=> item.id !== action.payload.id);
            return{
                ...state,
                selectedItem:  [...newSelectedItem]
               
            }

        default:
            return {
                state
            }
          
    }
}

export const favoriteContext= createContext();


const FavoriteMovieContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(favoriteReducer,initialState);
    

    return ( 
        <favoriteContext.Provider value={{state,dispatch}}>
                {children}
        </favoriteContext.Provider>
     );
}
 
export default FavoriteMovieContextProvider;