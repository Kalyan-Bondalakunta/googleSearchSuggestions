import {Component} from 'react'

import './index.css'

class SuggestionItem extends Component {
  onClickRenderValue = () => {
    const {suggestionList, onClickArrowIcon} = this.props
    const {suggestion} = suggestionList

    onClickArrowIcon(suggestion)
  }

  render() {
    const {suggestionList} = this.props
    const {suggestion} = suggestionList

    return (
      <li className="item-container">
        <p className="suggestion-text">{suggestion}</p>
        <button
          type="button"
          className="arrow-btn"
          onClick={this.onClickRenderValue}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow-img"
          />
        </button>
      </li>
    )
  }
}

export default SuggestionItem
