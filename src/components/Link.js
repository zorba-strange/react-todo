const React, { PropTypes }        = require('react');


const Link = ({ active, children, onClick }) => {
    if( active ) {
        return <span>{children}</span>
    }

    return (
        <a href="#"
        onClick={e => {
            e.preventDefault()
            onClick()
        }}>
        {children}
    </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: Proptypes.func.isRequired
}

export default Link
