import React from 'react';
import QueryString from 'query-string';

const Posts = ({ match, location }) => {
    const search = QueryString.parse(location.search);
    console.log("QueryString search => ", search);
    return (
        <div>
            <div>Year: {match.params.year || search.year}</div>
            <div>Month: {match.params.month || search.month}</div>
        </div>)
};

export default Posts;
