const React           = require('react');
const FilterLink      = require('../containers/FilterLinks').default;


const Footer = () => (
    <p>
        Show:

            {" "}
            <FilterLink filter="SHOW_ALL">
                All
            </FilterLink>

            {",  "}
            <FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink>

            {",  "}
            <FilterLink filter="SHOW_COMPLETED">
                Completed
            </FilterLink>
    </p>
)


export default Footer;
