import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
    const onClick = () => {
        console.log("Click");
    };
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" onClick={onClick} />
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

Header.defaultProps = {
    title: "Music Store",
};

// CSS in JS
// const headingStyle = {
//     color: "red",
//     backgroundColor: "yellow",
// };
export default Header;
