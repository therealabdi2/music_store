import { Component } from "react";

class Footer extends Component {
    render() {
        let today = new Date();
        let year = today.getFullYear();
        return (
            <footer style={{ color: "white" }}>
                Copyright &copy; {year} <br />
            </footer>
        );
    }
}

export default Footer;
