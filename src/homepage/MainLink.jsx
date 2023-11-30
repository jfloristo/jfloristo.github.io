import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';

export default function MainLink( {isVisible} ) {
    if (!isVisible) {
        return null;
    }
    return (<div className='container-row center fading' >
        <Link to='/new'>
        <button type='button' className='btn btn-primary'>Info</button>
        </Link>
        <button type='button' className='btn btn-primary'>Socials</button>
        <button type='button' className='btn btn-primary'>Reach Out</button>
    </div>);
}