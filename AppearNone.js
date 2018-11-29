import React from 'react'
import PropTypes from 'prop-types'
import { withDeck } from 'mdx-deck/dist/context'
import { setSteps } from 'mdx-deck/dist/updaters'
import { modes } from 'mdx-deck/dist/constants'

export default withDeck(class AppearNone extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    deck: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    const { update, index } = props.deck
    const steps = React.Children.toArray(props.children).length
    update(setSteps(index, steps))
  }

  render() {
    const children = React.Children.toArray(this.props.children)
      .map(child => typeof child === 'string'
        ? <div>{child}</div>
        : child
      )
    const { step, mode } = this.props.deck

    if (mode === modes.grid) {
      return children
    }

    if (window.navigator.userAgent.includes('Print/PDF')) {
      return children;
    }

    return (
      <React.Fragment>
        {children.map((child, i) => (
          React.cloneElement(child, {
            key: i,
            style: {
              ...((child.props || {}).style || {}),
              display: (step >= i + 1) ? 'block' : 'none'
            },
            className: step > i+1 ? 'strike' : '',
          })
        ))}
      </React.Fragment>
    )
  }
})