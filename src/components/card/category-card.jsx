import React from "react";

export const CategoryCard = ({id, name}) => {
    return (
        <div>
            <h1>
                {name} {id}
            </h1>
        </div>
    )
}