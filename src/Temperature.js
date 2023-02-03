import React from 'react';

export default function Temperature() {
    return (
        <p className="col-7 text-center">
            <strong className="temperature">10</strong>
            <span className="grau"> º</span>
            <span className="units">
                <a href="#">C</a>
                <span className="bar">|</span>
                <a href="#">F</a>
            </span>
            <br />
            <span className="discription">Cloudy</span>
        </p>
    );
}
