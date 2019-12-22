import React, { Component } from 'react'

class QuizQuestionButton extends Component {
    render() {
        return (
            <div>
                <button>{this.props.button_text}</button>
            </div>
        )
    }
}

export default QuizQuestionButton
