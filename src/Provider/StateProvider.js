
import { createContext, useState } from 'react';

//create a context, with createContext api
export const stateContext = createContext();

const initStore = {
    tweetList: [],
    activeTweet: {
        data: null,
        comments: [],
    },
}

const UserDetailsProvider = (props) => {
        // this state will be shared with all components 
    const [store, setStore] = useState(initStore);

    const dispatch = (action, data) => {
        switch(action) {
            case "SET_TWEETS": 
                setStore({
                    ...store,
                    tweetList: data
                })
                break;
        }
    }

    return (
                // this is the provider providing state
        <stateContext.Provider value={[store, dispatch]}>
            {props.children}
        </stateContext.Provider>
    );
};

export default UserDetailsProvider;