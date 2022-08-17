
import { createContext, useState } from 'react';

//create a context, with createContext api
export const stateContext = createContext();

const initStore = {
    tweetList: [],
}

const UserDetailsProvider = (props) => {
    const [store, setStore] = useState(initStore);

    const dispatch = (action, data) => {
        switch(action) {
            case "SET_TWEETS": 
                setStore({
                    ...store,
                    tweetList: data
                })
                break;
            default: 
        }
    }

    return (
        <stateContext.Provider value={[store, dispatch]}>
            {props.children}
        </stateContext.Provider>
    );
};

export default UserDetailsProvider;