import * as React from "react";

export const Card = ({ name, imageSrc }) => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={imageSrc}></img>
            </div>
            <p>{name}</p>
        </div>
    );
};
