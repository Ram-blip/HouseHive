import './postPage.css'
import Image from '../../components/image/image';
import PostInteractions from '../../components/postInteractions/postInteractions';
import { Link, useParams } from 'react-router';
import Comments from '../../components/comments/comments';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../../utils/apiRequest';

const postPage = () => {

    const {id} = useParams();

    const {isPending, error, data} = useQuery({
        queryKey: ["pin", id],
        queryFn: () => apiRequest.get(`/pins/${id}`).then((res) => res.data),
    })

    if(isPending) return "Loading...";
    if(error) return "Error loading data";

    if(!data) return "Pin not found";

    return (
        <div className='postPage'>
            <svg
                height="20"
                viewBox="0 0 24 24"
                width="20"
                style={{ cursor: "pointer" }}
            >
            <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 1 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.83 2.82l-6-6a2 2 0 0 1 0-2.82l6-6z" />
            </svg>
            <div className='postContainer'>
                <div className="postImg">
                    <Image src={data.media} alt="" w={736}/>
                </div>
                <div className="postDetails">
                    <PostInteractions />
                    <Link to={`/${data.user.userName}`} className='postUser'>
                        <Image src={data.user.img || "/general/noAvatar.png"}/>
                        <span>{data.user.displayName}</span>
                    </Link>
                    <Comments id={data._id}/>
                </div>
            </div>
        </div>
    )
}

export default postPage;