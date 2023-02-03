import React, { useState } from 'react';

export default function Search() {
    const [city, setCity] = useState();
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setMessage(`It is currently 19°C in ${city}`);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    return (
        <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-6">
                    <input
                        type="search"
                        placeholder="Location"
                        className="form-control"
                        autoComplete="off"
                        onChange={updateCity}
                    />
                </div>
                <div className="col-3">
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark shadow-sm button"
                    />
                </div>
                <div class="col-3">
                    <button className="btn btn-dark shadow-sm button">
                        Current Location
                    </button>
                </div>
                <div class="row location">
                    <h1>{message}</h1>
                </div>
            </div>
        </form>
    );
}
