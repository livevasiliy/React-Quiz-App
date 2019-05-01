import React, { Component } from 'react'
import styles from './Backdrop.module.css'

export default class Backdrop extends Component {
  render() {
    return (
      <div 
        className={styles.Backdrop}
        onClick={this.props.onClick}
        >
        
      </div>
    )
  }
}
