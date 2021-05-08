import React from 'react';
import { Button } from 'semantic-ui-react';

const Users = ({ history }) => {
    return (
        <div>
            <h4>Admin Users</h4>
            <Button
                onClick={() => { history.push("/admin") }}>
                Back
            </Button>
        </div>
    )
}
export default Users;