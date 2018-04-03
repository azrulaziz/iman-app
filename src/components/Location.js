import React from 'react';
import '../styles/location.css';

const Location = (prop) => {
    const {location, handleCodeRetrieval, handleMenu, toggle} = prop;
    return (
        <div className={toggle ? 'toggle' : ''}>
            <div className="location">
                {location.area.map(area => {
                    return (
                        <div className="location-container" key={area} onClick={(e) => {handleCodeRetrieval(e); handleMenu()}}>
                            <p className="location-p">{area}</p>
                            
                        </div>    
                    )
                })}
            </div>
        </div>
    )
}

export default Location