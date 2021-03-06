import "../../gatsby-browser.js";
import * as React from "react";
import { Navigator } from "../components/nav.js";
import "../styles/main.scss";

const IndexPage = () => {
    return (
        <main>
            <Navigator />
            <title>Home Page</title>
            <section>
                <h1>Zacharias</h1>
                <h2>Eryd Berlin</h2>
            </section>
        </main>
    );
};

export default IndexPage;
