import React, { Component } from 'react';

class ChatInput extends Component {
    state = {
        message: ''
    }
    submit = (e) => {
        e.preventDefault()
        this.props.onSubmitMessage(this.state.message)
        this.setState({ message: '' })
    }
    onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false)
            this.submit(e);
    }
    onChangeInput = (e) => this.setState({ message: e.target.value });

    render() {
        return (
            <form
                action="."
                onSubmit={this.submit}
            >
                <textarea
                    type="text"
                    rows="2"
                    placeholder={'Enter message...'}
                    value={this.state.message}
                    onChange={this.onChangeInput}
                    onKeyDown={this.onEnterPress}
                />
                <input type="image" src="send.png" value={'Send'} />
            </form>
        )
    }
}

export default ChatInput;