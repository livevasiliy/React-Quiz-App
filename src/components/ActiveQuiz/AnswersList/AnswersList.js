import React, { Component } from 'react'
import styles from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

export default class AnswersList extends Component {
  render() {
    return (      
      <ul className={styles.AnswersList}>
        { this.props.answers.map((answer, index) => {
          return (
            <AnswerItem 
              answer={answer}
              key={index}
              onAnswerClick={this.props.onAnswerClick}
              state={this.props.state ? this.props.state[answer.id] : null}
            />
          )
        })}
      </ul>
    )
  }
}
