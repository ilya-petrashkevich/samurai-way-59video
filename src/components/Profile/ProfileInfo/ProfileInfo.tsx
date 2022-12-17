import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../redux/store";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType
}
const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                {/*<img*/}
                {/*    src={props.profile.photos.large}*/}
                {/*    alt="pic"/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.ava}
                    src={props.profile.photos.small}
                    alt="pic"/>
                {props.profile.aboutMe}
            </div>

        </div>
    );
};

export default ProfileInfo;