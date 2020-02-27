import React from 'react';

export default ({ myName, name, date, message }) => {
    console.log(myName, name)
    const d = `${date.getHours()}:${date.getMinutes()}-${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    const classes = (myName === name) ? "my-message" + " " + "message" : "message";
    console.log(classes)
    return (<div className={classes}>
        <div className={"message-heade"}>
            {name}
            {d}
        </div>
        <div className="message-content">
            <p>
                <em>{message}</em>
            </p>
        </div>

    </div>)
}

