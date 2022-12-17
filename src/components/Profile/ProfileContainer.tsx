import React, {FC} from 'react';
import Profile from "./Profile";
import {PostsType, ProfilePageType, ProfileType} from "../redux/store";
import axios from "axios";
import {AppStateType} from "../redux/redux-store";
// import {InitialStateType} from "../redux/users-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {setUserProfile} from "../redux/profile-reducer";

type MapStatePropsType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileType
}
//ЧТО ТО Я ЗАПУТАЛСЯ ЭТО ПРОПСЫ У МЕНЯ ИЛИ ТИП ?!?!?!?!?!?!?!
type ProfileContainerPropsType = ProfilePageType & { setUserProfile: (profile: ProfileType) => void }

class ProfileContainer extends React.Component<ProfileContainerPropsType> /* <ProfilePageType> эта типизация временная, что бы не падало приложение*/ {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile //{...this.props}
                    {...this.props}
                    posts={this.props.posts}
                    newPostText={this.props.newPostText}
                    profile={this.props.profile}
                />

            </div>
        )
    }
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

export default compose<FC>(connect(mapStateToProps, {setUserProfile}))(ProfileContainer)