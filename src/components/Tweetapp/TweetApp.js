import React, { Component } from "react";
import './../../bootstrap.css';
import './../../css/login.css';
import SignupComponent from "./../../components/Tweetapp/SignupComponent";
import ForgetPasswordComponent from './../../components/Tweetapp/ForgetPasswordComponent';
import LoginComponent from "./../../components/Tweetapp/LoginComponent";
import DashboardComponent from "./../../components/Tweetapp/DashboardComponent";
import withNavigate from'./../../components/Tweetapp/withNavigate.jsx'
import { BrowserRouter as  Router ,Route,Routes} from "react-router-dom";
import LogoutCompontent from './../../components/Tweetapp/LogoutComponent';
import ReplyComponent from'./../../components/Tweetapp/ReplyComponent';
import UpdateComponent from "./../../components/Tweetapp/UpdateComponent";
import SearchProfileComponent from "./../../components/Tweetapp/SearchProfileComponent";
import PostTweetComponent from "./../../components/Tweetapp/PostTweetComponent";
import HomeComponent from "./../../components/Tweetapp/HomeComponent";
import UserProfileComponent from "./../../components/Tweetapp/UserProfileComponent"
class TweetApp extends Component {
    render() {
        const SignupWithnavigate=withNavigate(SignupComponent);
        const ForgotPasswordWithnavigate = withNavigate(ForgetPasswordComponent);
        const LoginWithnavigate=withNavigate(LoginComponent);
        const DashboardWithnavigate=withNavigate(DashboardComponent);
        const ReplyWithnavigate=withNavigate(ReplyComponent);
        const UpdateWithnavigate=withNavigate(UpdateComponent);
        const SearchWithnavigate=withNavigate(SearchProfileComponent);
        const PostWithnavigate=withNavigate(PostTweetComponent);
        const HomeWithnavigate=withNavigate(HomeComponent);
        const UserProfileWithnavigate=withNavigate(UserProfileComponent);
        return (
            <div className="TweetApp">
               <Router>
                   <Routes>
                   <Route path="/login" element={<LoginWithnavigate/>}></Route>
                   <Route path="/register" element={<SignupWithnavigate/>}></Route>
                   <Route path="/forgotPassword" element={<ForgotPasswordWithnavigate/>}></Route>
                   <Route path="/dashboard" element={<DashboardWithnavigate/>}></Route>
                   <Route path="/logout" element={<LogoutCompontent/>}></Route>
                   <Route path="/reply/:tweetId" element={<ReplyWithnavigate/>}></Route>
                   <Route path="/update/:tweetId" element={<UpdateWithnavigate/>}></Route>
                   <Route path="/search/:loginId" element={<SearchWithnavigate/>}></Route>
                   <Route path="/post" element={<PostWithnavigate/>}></Route>
                   <Route path="/home" element={<HomeWithnavigate/>}></Route>
                   <Route path="/userProfile" element={<UserProfileWithnavigate/>}></Route>
                   </Routes>
               </Router>
              
                
            </div>
        );
    }
}


export default TweetApp;