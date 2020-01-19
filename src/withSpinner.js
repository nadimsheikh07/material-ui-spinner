import React from 'react'
import PropTypes from 'prop-types'

function withSpinner() {
    return (Component) => {
        const ComponentWithSpinner = (props, { spinner }) => (
            <Component
                spinner={spinner}
                {...props}
            />
        )

        ComponentWithSpinner.contextTypes = {
            spinner: PropTypes.object.isRequired
        }

        return ComponentWithSpinner
    }
}

export default withSpinner