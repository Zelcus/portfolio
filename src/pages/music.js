import * as React from "react";
import "../styles/main.scss";
import { Navigator } from "../components/nav";
const MusicPage = () => {
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

export default MusicPage;
