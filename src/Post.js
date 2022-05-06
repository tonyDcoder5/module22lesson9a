import React, {useState} from "react";

function Post ({post, deleteHandler}){

    const deleteClick = () => {
        deleteHandler(post.id);
    }

    const imgStyle = {
        margin: "5%",
        width: "50%"
    }

    const textStyle = {
        textAlign: "left",
        fontSize: "4vw",
    }

    return(
        <div className="post" id ={post.id}>
            {post.type === "Text" ? (<p className="content" style={textStyle}>
                {post.content}
                </p>) : (
                    <img src={post.content} alt="content image" style = {imgStyle}/>
                )}
                <br />
            <button name="delete" onClick={deleteClick}>Delete</button>
            </div>
    )
}

export default Post;
