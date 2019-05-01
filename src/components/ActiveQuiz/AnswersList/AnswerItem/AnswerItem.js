import React, { Component } from 'react'
import styles from './AnswerItem.module.css'

export default class AnswerItem extends Component {
  render() {
    
    const cls = [styles.AnswerItem]
    if (this.props.state)
    {
      cls.push(styles[this.props.state])
    }

    return (
      <li 
        className={cls.join(' ')}
        onClick={() => this.props.onAnswerClick(this.props.answer.id)}
      >
        { this.props.answer.text }
      </li>
    )
  }
}
