import React from 'react'
import Avatar from './Avatar/Avatar';
import u from './Userinfo.module.css'


export default function UserInfo(props){
    return(
        <div className={u.userinfo}>
            <Avatar user={props.user}/>
            <div className='UserInfo-name'> {props.user.name} </div>
        </div>
    );
}
