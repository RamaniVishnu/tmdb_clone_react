import React, { useEffect } from 'react';
import { getPosts } from './store/asyncstore';
import { useDispatch,useSelector } from 'react-redux';

function SampleData() {
    const dispatch = useDispatch();
    const {entities,loading}= useSelector((store)=> store.favouriteSlice);

    useEffect(()=>{
        dispatch(getPosts())
    },[])
    // if (loading) return <p>Loading...</p>

    return (entities.length > 1? <div>
        <h2>Blog Posts</h2>
        {entities.map((post) => (
          <p key={post.id}>{post.vote_average}</p>
        ))}
      </div> : <p>Loading...</p>
)
}

export default SampleData