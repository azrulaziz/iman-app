import React from 'react';
import moment from 'moment';
import '../styles/display.css'
import {TiWeatherCloudy, TiWeatherNight, TiWeatherPartlySunny, TiWeatherSunny, TiWeatherWindyCloudy, TiStarOutline} from 'react-icons/lib/ti';

const Display = (prop) => {
    const {resultTimes, currLocation} = prop;
    if(!resultTimes) return null;
    return (
        <div className="display">
            <div className="display-info">
            <p className="display-date">{moment().format('MMMM Do YYYY')}</p>
                <h2 className="display-header">
                    {currLocation}
                </h2>
            </div>
            <div className="display-wrapper">
                <div className="display-name">
                    <p className="display-container"><TiWeatherWindyCloudy className="display-icon"/>Fajr</p>
                    <p className="display-container"><TiWeatherPartlySunny className="display-icon"/>Shuruq</p>
                    <p className="display-container"><TiWeatherSunny className="display-icon"/>Dhurh</p>
                    <p className="display-container"><TiWeatherCloudy className="display-icon"/>Asr</p>
                    <p className="display-container"><TiWeatherNight className="display-icon"/>Maghrib</p>
                    <p className="display-container"><TiStarOutline className="display-icon"/>Isha</p>
                </div>
                <div className="display-time">
                    {resultTimes.map(time => {
                        return (
                            <p key={time} className="display-container">{moment.unix(time).format("HH:mm A")}</p>
                        )
                    })}
                </div>
            </div>
            <div className="display-source">
                    <p>Prayer times data source: JAKIM Malaysia</p>
            </div>
        </div>    
    )
}

export default Display

