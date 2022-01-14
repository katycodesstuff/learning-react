import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './NotFound.css';

interface Props {}

function NotFound(props: Props) {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/page-not-found') {
            navigate('/page-not-found');
        }
    }, []);

    return (
        <div className='not-found-page'>
            <h2>Uh Oh! Page Not Found</h2>
            <p>It looks like you've gone to a bad link.</p>
        </div>
    )
}

export default NotFound
