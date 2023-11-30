export default function Bio( {isVisible} ) {
    const text = 'Cadet Engineer at Maya Philippines, Inc. \n BS Computer Science at University of the Philippines Diliman'

    if (!isVisible) {
        return null;
    }

    return (<div className='primary fading'>
        <p className='pre-line center-text'>{text}</p>
    </div>);
}