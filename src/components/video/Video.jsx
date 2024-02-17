import React from 'react'
import { Link } from "react-router-dom"
import YouTube from "react-youtube";
import "./video.css";

export default function Video({videoId}) {
  return (
    <div className='post'>
        <YouTube videoId={videoId} />  
        {/* opts={opts}/> */}
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>
                    <Link className="link" to="/posts?cat=NFL">
                        NFL
                    </Link>
                </span>
                <span className='postCat'>
                    <Link className="link" to="/posts?cat=NBA">
                        NBA
                    </Link>
                </span>
                <span className='postCat'>
                    <Link className="link" to="/posts?cat=Fishing">
                        Fishing
                    </Link>
                </span>
            </div>
            <span className='postTitle'>
                <Link to="/post/abc" className="link">
                    Lorem ipsum dolor sit amet
                </Link>
            </span>
            <hr />
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p>
    </div>
  );
}
