import React from 'react'
import '../App.css';

function First(props) {
    // console.log(typeof props);
    const { keyName, value, setfirst } = props;
    const handleClick = () => {
        setfirst('Hello')
    }
    React.useEffect(() => {
        return () => {
            console.log(":dfbvdbdb");
        }
    }, [])

    return (
        <div className="card">
            <h5 className="card-header">{keyName}</h5>
            <div className="card-body">
                <h5 className="card-title">{value}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <button onClick={handleClick}> Hi </button>
        </div>
    )
}

export default First;