import React, {useContext} from 'react';
import { LoginContext } from '../components/LoginContextProvider';

const SinglePost = () => {
    const login = useContext(LoginContext);
    console.log(login)
    return (
        <div>
            <h1>Single Post</h1>
        </div>
    );
};

export default SinglePost;