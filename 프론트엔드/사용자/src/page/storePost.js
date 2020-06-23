import React from 'react';

const StorePost = ({match}) => {
    return (
        <div>
            포스트 {match.params.id}
        </div>
    );
};

export default StorePost;