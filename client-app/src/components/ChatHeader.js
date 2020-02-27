import React, { Component } from 'react';

class ChatHeader extends Component {
    render() {
        const { setUserNameToStore, name } = this.props;
        return (
            <div className="chat-header">
                <label htmlFor="name">
                    <input
                        type="text"
                        id={'name'}
                        placeholder={'Enter your name...'}
                        value={name}
                        onChange={e => {
                            setUserNameToStore(e.target.value);
                        }}
                    />
                    &nbsp;(Client)
                </label>
            </div>
        )
    }
}

export default ChatHeader;