import React, { Component } from 'react'
import styles from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

export default class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'Какого цвета небо ?',
        answers: [
          { text: 'Чёрный', id: 1 },
          { text: 'Синий', id:2 },
          { text: 'Красный', id:3 },
          { text: 'Зеленый', id:4 }
        ],
        rightAnswerId: 2,
        id: 1
      },
      {
        question: 'В каком году основали Санкт-Петербург',
        answers: [
          { text: '1700', id: 1 },
          { text: '1702', id: 2 },
          { text: '1703', id: 3 },
          { text: '1803', id: 4 }
        ],
        rightAnswerId: 3,
        id: 2
      }
    ],
    activeQuestion: 0,
    answerState: null,
    isFinished: false,
    results: {}
  }

  isQuizFinished()
  {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  onAnswerClickHandler = answerId => {

    if (this.state.answerState)
    {
      const key = Object.keys(this.state.answerState)[0]

      if (this.state.answerState[key] === 'success')
      {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results
 
    if (question.rightAnswerId === answerId)
    {
      if (!results[question.id])
      {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) 
        {
          this.setState({
            isFinished: true
          })
        }
        else
        {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout);
      }, 1000)
    } 
    else 
    {
      this.setState({
        answerState: { [answerId]: 'error' },
        results
      })
      results[question.id] = 'error'
    }
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {
            this.state.isFinished
            ? <FinishedQuiz 
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.retryHandler}
              />
            :<ActiveQuiz
              question={this.state.quiz[this.state.activeQuestion].question}
              answers={this.state.quiz[this.state.activeQuestion].answers}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          }
        </div>
      </div>
    )
  }
}
