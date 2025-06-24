import './profilePage.css'
import Image from "../../components/image/image";
import Gallery from '../../components/gallery/gallery';
import Boards from '../../components/boards/boards';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../../utils/apiRequest';
import FollowButton from './FollowButton';

const profilePage = () => {
    const [type, setType] = useState("saved");

    const {username} = useParams();

    const {isPending, error, data} = useQuery({
        queryKey: ["profile", username],
        queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
    })

    if(isPending) return "Loading...";
    if(error) return "Error loading data" + error.message;

    if(!data) return "User not found";

    return (
        <div className='profilePage'>
            <Image className="profileImg" w={100} h={100} path={data.img || "/general/noAvatar.png"} alt="" />
            <h1 className='ProfileName'>{data.displayName}</h1>
            <span className='ProfileUsername'>{data.userName}</span>
            <div className='followCounts'>{data.followersCount} followers - {data.followingCount} followings</div>
            <div className='profileInteractions'>
                <Image path="/general/share.svg" alt="" />
                <div className="profileButtons">
                    <button>Message</button>
                    <FollowButton isFollowing={data.isFollowing} username={data.userName}/>
                </div>
                <Image path="/general/more.svg" alt="" />
            </div>
            <div className='profileOptions'>
                <span onClick={()=>setType("created")} className={type==="created" ? "active" : ""}>Created</span>
                <span onClick={()=>setType("saved")} className={type==="saved" ? "active" : ""}>Saved</span>
            </div>
            {type === "created" ? <Gallery userId={data._id}/> : <Boards userId={data._id}/>}
        </div>
    )
}

export default profilePage;  