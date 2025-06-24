import Image from '../image/image';
import './postInteractions.css';

const PostInteractions = () => {
    return (
        <div className='postInteractions'>
            <div className="interactionIcons">
                <Image path="/general/react.svg" alt="Icon1"/>
                273
                <Image path="/general/share.svg" alt="Icon2"/>
                <Image path="/general/more.svg" alt="Icon3"/>
            </div>
            <button>Save</button>
        </div>
    )
}

export default PostInteractions;