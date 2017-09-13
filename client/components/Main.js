import React from 'react';
import { Link } from 'react-router';
import PhotoGrid from'./PhotoGrid';

const Main= React.createClass({
    render() {
        return(
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
<PhotoGrid/>
            </div>
        )
    }
});

export default Main;