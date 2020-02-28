import React, { Component } from 'react';

const CLASS = 'chat-header';

class ChatHeader extends Component {
    onSetToStore = (e) => this.props.setUserNameToStore(e.target.value);

    render() {
        const { name } = this.props;
        return (
            <div className={CLASS} >
                <label htmlFor='name'>
                    <input
                        type='text'
                        id={'name'}
                        placeholder={'Enter your name...'}
                        value={name}
                        onChange={this.onSetToStore}
                    />
                    &nbsp;(Client)
                </label>
            </div>
        )
    }
}

export default ChatHeader;