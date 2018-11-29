import React from 'react'
import PropTypes from 'prop-types'
import { withDeck } from 'mdx-deck/dist/context'
import { setSteps } from 'mdx-deck/dist/updaters'
import { modes } from 'mdx-deck/dist/constants'

export default withDeck(class Troll extends React.Component {
  static propTypes = {
    deck: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    const { update, index } = props.deck
    const steps = React.Children.toArray(props.children).length
    update(setSteps(index, steps))
  }

  render() {
    const { step, mode } = this.props.deck;
    const yesOrNo = step <= this.props.max;
    return (
        <h1>
          {yesOrNo ? 'Sobre que vamos a hablar' : <span>Sobre que vamos <span className="no">NO</span> a hablar</span>}
        </h1>
    );
  }
})