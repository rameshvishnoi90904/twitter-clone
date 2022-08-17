import styled from "styled-components";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { stateContext } from "../Provider/StateProvider";
import { useEffect, useState, useContext } from 'react';
import { Container } from "react-bootstrap";
import TweetItem from "../components/TweetItem";

const SubNavBar = styled.div`
background-color: #91d5ff;
color: white;
font-weight:bold;
`

const UserScreen = () => {
    const [store, dispatch] = useContext(stateContext);
    let navigate = useNavigate();
    let params = useParams();
    const userTweets = store.tweetList.filter((tItem) => {
        return (tItem.userId == params.id)
    })
    return (
        <>
            <SubNavBar className="py-1 px-1">
                More tweets by user
            </SubNavBar>
            {
                userTweets.map((tItem) => {
                    return <TweetItem data={tItem} key={tItem.id}/>
                })
            }
        </>
    )
}
export default UserScreen;