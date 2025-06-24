import EmojiPicker from "emoji-picker-react";
import { useState } from "react";   
import apiRequest from "../../../utils/apiRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addComment = async (comment) => {
    const res = await apiRequest.post("/comments", comment);
    return res.data;
}


const CommentForm = ({id}) => {

    const [open, setOpen] = useState(false);
    const [desc, setDesc] = useState("");    

    const handleEmojiClick = (emoji) => {
        setDesc((prev) => prev + " " + emoji.emoji);
        setOpen(false);
    }

    const queryClient = useQueryClient();

    // Using useMutation to handle the post request
    // How things work is:
    //     1. You type a comment
    //     2. you click submit handleSubmit
    //     3. it calls mutation.mutate(), which sends the POST request via addComment.
    //     4. On success, React Query:
    //          Automatically clears the comment input
    //         Closes the emoji picker
    //         Re-fetches the updated list of comments (with invalidateQueries).


    const mutation = useMutation({
        mutationFn: addComment,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["comments", id]});
            setDesc(""); // Clear the input field after successful submission
            setOpen(false); // Close the emoji picker after submission
        },
        onError: (error) => {
            console.error("Error adding comment:", error);
        }
    })

    const handleSubmit = async (e) => {   
        e.preventDefault();

        mutation.mutate({
            description: desc,
            pin: id
        });
    }

    return (
        <form className='commentForm' onSubmit={handleSubmit}>
                <input type='text' placeholder='Add a comment...' onChange={(e) => setDesc(e.target.value)} value={desc}/>
                <div className='emoji'>
                    <div onClick={() => setOpen(prev=>!prev)}>😊</div>
                    {open && <div className='EmojiPicker'>
                        <EmojiPicker onEmojiClick={handleEmojiClick}/>
                    </div>}
                </div>
        </form>
    )
}

export default CommentForm;