import React from 'react'
import PropTypes from 'prop-types'
import Hover from './hover'

const styles = {
    container: {
      position: 'relative',
      display: 'flex'
    },
    tooltip: {
      boxSizing: 'border-box',
      position: 'absolute',
      width: '160px',
      bottom: '100%',
      left: '50%',
      marginLeft: '-80px',
      borderRadius: '3px',
      backgroundColor: 'rgba(38, 12, 12, 0.75)',
      padding: '7px',
      marginBottom: '5px',
      color: '#fff',
      textAlign: 'center',
      fontSize: '14px',
    }
  }

function Tooltip ({ text, children }) {
    return (
        <Hover>
            {(hovering) => (
                <div
                    style={styles.container}>
                    {hovering === true && <div style={styles.tooltip}>{text}</div>}
                    {children}
                </div>
            )}
        </Hover>
    )
}

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Tooltip
// a higher order component is just a component that takes in another component as its' arguemtn
// it returns a new component, ad the component it returns can render the original component that was (passed) as an argument