import React from "react";
import Layout from '../shared/layout'
import Post from '../components/feed/Post';

import { UserContext } from "../auth";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from '../graphQL/post/query';
import  NewPost  from '../components/post/newpost';

export default function FeedPage(){
    const { loading, error, data, refetch } = useQuery(GET_POSTS);
    const { currentUser } = React.useContext(UserContext);
    const [isNewPost, setIsNewPost] = React.useState(false);

    console.log(currentUser.data);

    return(
        <>
        { loading &&
            <h1>Carregando</h1>
        }
        { !loading &&
            <Layout>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <a className='btn btn-primary' onClick={()=>setIsNewPost(!isNewPost)}>
                            Novo Post
                            <NewPost isNewPost={isNewPost} refetch={refetch}/>
                        </a>
                        { data.posts.map((post) => <Post key={post.id} post={post} refetch={refetch} />) }
                    </div>
                </div>
            </Layout>
        }
        </>
        
    );
};