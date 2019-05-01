import React, { Component } from 'react'
import styles from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'

export default class FinishedQuiz extends Component {
  render() {
    
    const successCount = Object.keys(this.props.results).reduce((total, key) => {
        if (this.props.results[key] === 'success')
        {
            total++
        }

        return total
    }, 0)
    return (
      <div className={styles.FinishedQuiz}>
        <ul>
            { 
                this.props.quiz.map((quizItem, index) => {

                    const cls = [
                        'fa',
                        this.props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        styles[this.props.results[quizItem.id]]
                    ]

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>. &nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                })
            }
        </ul>

        <p>Правильно {successCount} из {this.props.quiz.length}</p>

        <div>
            <Button onClick={this.props.onRetry} type="primary">Повторить</Button>
			<Button type="success">Перейти в список тестов</Button>
        </div>
      </div>
    )
  }
}
