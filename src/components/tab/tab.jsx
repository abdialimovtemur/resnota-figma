import React from "react";
const data1 = []
const data2 = []
const data3 = []

export const Tab = () => {
    const [count, setCount] = React.useState(1)
    const content = count == 1 ? data1 : count == 2 ? data2 : count == 3 ? data3 : [];
    return (
        <div>
            <button>tab1</button>
            <button>tab2</button>
            <button>tab3</button>
            {content.map(() => { })}
        </div>
    );
};