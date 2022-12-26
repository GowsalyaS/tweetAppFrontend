import axios from "axios";

import authHeader from "./AuthService";
import jwt_decode from 'jwt-decode';

export function  addTweet(tweet) {
    const decode= jwt_decode(localStorage.getItem('user'))
    return axios.post(`http://3.80.223.163:8443/api/v1.0/tweets/${decode.sub}/add`,{
        "tweets":tweet
         },{headers: authHeader()})
    
}

export function getPost() {
    //const decode= jwt_decode(localStorage.getItem('user'))
    return axios.get('http://3.80.223.163:8443/api/v1.0/tweets/users/all',{
        headers: authHeader()})
    
}

export function postReply(tweetId,reply) {
    const decode= jwt_decode(localStorage.getItem('user'))
    
    return axios.post(`http://3.80.223.163:8443/api/v1.0/tweets/${decode.sub}/reply/${tweetId}`,{
    
            "replies":reply
          
        },{headers: authHeader()})
    
}


export function modifyPost(tweetId,tweets) {
    const decode= jwt_decode(localStorage.getItem('user'))
    
    return axios.put(`http://3.80.223.163:8443/api/v1.0/tweets/${decode.sub}/update/${tweetId}`,{
        "tweets":tweets
        },{headers: authHeader()})
    
}

export function removePost(tweetId) {
    const decode= jwt_decode(localStorage.getItem('user'))
    
    return axios.delete(`http://3.80.223.163:8443/api/v1.0/tweets/${decode.sub}/delete/${tweetId}`,{
       headers: authHeader()})
    
}

export function postTweet(tweet) {
    const decode= jwt_decode(localStorage.getItem('user'))
    
    return axios.post(`http://3.80.223.163:8443/api/v1.0/tweets/${decode.sub}/add`,{
        "tweets":tweet
        },{headers: authHeader()})
    
}

export function getUserTweet() {
    const decode= jwt_decode(localStorage.getItem('user'))
    
    return axios.post(`http://3.80.223.163:8443/api/v1.0/tweets/username`,{
        "userName":decode.sub
        },{headers: authHeader()})
    
}

export function likeTweet(tweetId) {
    const decode= jwt_decode(localStorage.getItem('user'))
    
    return axios.get(`http://3.80.223.163:8443/api/v1.0/tweets/${decode.sub}/like/${tweetId}`,{
        headers: authHeader()})
    
}

