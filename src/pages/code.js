import * as React from "react";
import "../styles/main.scss";
import { Card } from "../components/card.js";
import { Navigator } from "../components/nav.js";
const CodePage = () => {
    return (
        <main>
            <Navigator />
            <title>Code Page</title>
            <section className="code-section">
                <Card name="Lime Technologies" image="" />
            </section>
        </main>
    );
};

export default CodePage;
