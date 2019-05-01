import React, { Component } from 'react'
import styles from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

export class ActiveQuiz extends Component {
  render() {
    return (
      <div className={styles.ActiveQuiz}>
        <p className={styles.Question}>
            <span>
                <strong>{this.props.answerNumber}.&nbsp;</strong>
                {this.props.question}
            </span>
            <small>{this.props.answerNumber} из {this.props.quizLength} </small>
        </p>

        <AnswersList
            state={this.props.state}
            answers={this.props.answers}
            onAnswerClick={this.props.onAnswerClick}
        />
        
      </div>
    )
  }
}

export default ActiveQuiz
