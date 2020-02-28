import React from 'react';

const CLASS_HEADER = 'message-header';
const CLASS_DATE = 'message-date';
const CLASS_CONTENT = 'message-content';

const formatDate = (date) => `${date.getHours()}:${date.getMinutes()}-${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

export default ({ myName, name, date, message }) => {
    const classes = (myName === name) ? 'my-message message' : 'message';
    return (
        <div className={classes}>
            <div className={CLASS_HEADER}>
                <span>{name}</span>
                <div className={CLASS_DATE}>
                    <span>{formatDate(date)}</span>
                </div>
            </div>
            <div className={CLASS_CONTENT}>
                <span>{message}</span>
            </div>
        </div>
    )
}

