import { useEffect, useContext } from 'react';
import { stateContext } from "../Provider/StateProvider";
import TweetItem from "../components/TweetItem";

const HomeScreen = () => {
    const [store, dispatch] = useContext(stateContext);
    
    useEffect(() => {
        if (store.tweetList.length === 0) {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then((result) => {
                if (result) {
                    dispatch("SET_TWEETS",result)
                }
            })
        }
    },[])
    
    return (
        <>
            {store.tweetList.map((t) => {
                return(
                    <TweetItem key={t.id} data={t}/>
                )
            })}
        </>
            
    )
}
export default HomeScreen