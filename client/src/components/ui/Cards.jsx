import PropTypes from "prop-types"

export function Cards({ label, className }) {
    return(
        <div className={`${className} w-40 h-40 border`}>
            {label}
        </div>
    )
}


Cards.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.node
}