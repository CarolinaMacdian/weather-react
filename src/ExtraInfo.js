import React from 'react';

export default function ExtraInfo() {
    return (
        <p class="col-5 extraInfo">
            <span>Pressure:</span>
            <span id="pressure"></span>
            <span>10 hPa</span>
            <br />
            <span>Humidity:</span>
            <span id="humidity"></span>
            <span>12 %</span>
            <br />
            <span>Wind:</span>
            <span id="wind"></span>
            <span>20 Km/H</span>
        </p>
    );
}
