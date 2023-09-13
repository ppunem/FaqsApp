// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClicked: false}

  changeIsClicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  renderImage = () => {
    const {isClicked} = this.state
    const url = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isClicked ? 'minus' : 'plus'

    return (
      <button type="button">
        <img
          className="image"
          src={url}
          alt={altText}
          onClick={this.changeIsClicked}
        />
      </button>
    )
  }

  renderAnswer = () => {
    const {isClicked} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isClicked) {
      return (
        <div className="answer-container">
          <hr />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li>
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
