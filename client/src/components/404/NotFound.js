import { NavLink } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The Page you are looking for doesn't exist or another error occurred. Go to <NavLink to="/">Home Page.</NavLink></p>
        </div>
    )
};

export default NotFound;