import {useNavigate, useParams } from "react-router-dom";
import { stateContext } from "../Provider/StateProvider";
import { useEffect, useState, useContext } from 'react';
import { Button } from "react-bootstrap";
import CommentItem from "../components/CommentItem";
import styled from "styled-components";

const TweetContainer = styled.div`
`
const TweetTitle = styled.div`
font-size: 24px;
font-weight: bold;
`
const TweetBody = styled.div`
`

const UserContainer = styled.div`
`
const UserItem = styled.div`
    background-color: #91d5ff;
    width: 120px;
    height: 120px;
    font-size: 42px;
    color: white;
    border-radius: 60px;
    font-weight: bold; 
`
const CommentContainer = styled.div`
background-color: #91d5ff;
color: white;
font-weight: bold;
`

const TweetDetailScreen = () => {
    const [store, ] = useContext(stateContext);
    let navigate = useNavigate();
    let params = useParams()
    const tweetId = params.id;
    const [tweetData, setTweetData] = useState(null)
    const [commentList, setCommentList] = useState([])
    
    useEffect(() => {
        const toShowTweet = store.tweetList.find((tItem) => {
            return (tItem.id === tweetId)
        })
        setTweetData(toShowTweet)
    },[])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
            .then(res => res.json())
            .then((result) => {
                if (result) {
                    setCommentList(result)
                }
            })
    },[])

    const loadMoreTweets = () => {
        navigate(`/user/${tweetData.userId}`);  
    }
    return (
        <div className="d-flex flex-column flex-fill">
            <TweetContainer className="">
                <div className="d-flex px-3">
                    <UserContainer className="py-3 pe-3">
                        <UserItem className="d-flex justify-content-center align-items-center">
                            {tweetData?.userId}
                        </UserItem>
                    </UserContainer>
                    <div className="d-flex flex-column justify-content-center">                    
                        <TweetTitle>{tweetData?.title}</TweetTitle>
                        <TweetBody>{tweetData?.body}</TweetBody>
                    </div>
                </div>
                <div className="d-flex justify-content-end m-3">
                    <Button onClick={loadMoreTweets}>More Tweets</Button>
                </div>
            </TweetContainer>
            <CommentContainer className="py-1 px-1" style={{backgroundColor: '#91d5ff', color: 'white'}}>
                Comments: 
            </CommentContainer>
            <div className="">
                {
                    commentList.map((cItem) => {
                        return <CommentItem commentData={cItem} key={cItem.id}/>
                    })
                }
            </div>
        </div>
    )
}
export default TweetDetailScreen