import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { stateContext } from "../Provider/StateProvider";

const TweetWrapper = styled.div`
    border-bottom: solid 1px #8d8d8d;
    cursor: pointer;
`
const TweetTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
`
const TweetBody = styled.div`
    font-weight: 14px;
`
const UserProfileSection = styled.div`
`
const UserProfile = styled.div`
    background-color: #69c0ff;
    width: 60px;
    height: 60px;
    font-size: 30px;
    color: white;
    border-radius: 30px;
    font-weight: bold;
`

const TweetItem = ({data}) => {
    let navigate = useNavigate();
    
    const handleOnClick = () => {
        navigate(`/tweet/${data.id}`);  
    }
    
    return (
        <TweetWrapper className="mb-1 d-flex" onClick={handleOnClick}>
            <UserProfileSection className="p-2">
                <UserProfile className="d-flex align-items-center justify-content-center">
                    {data.userId}
                </UserProfile>
            </UserProfileSection>
            <div className="p-2">
                <TweetTitle>
                    {data.title}
                </TweetTitle>
                <TweetBody>
                    {data.body}
                </TweetBody>
            </div>
            
        </TweetWrapper>
    )
}
export default TweetItem