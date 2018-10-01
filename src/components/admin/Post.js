import React from 'react';
import { Button } from 'semantic-ui-react';

const Post = ({ history }) => {
    return (
        <div>
            <h3>Admin Posts</h3>
            <Button
                onClick={() => { history.push("/admin") }}>
                Back
        </Button>
        </div>
    )
}

export default Post;
