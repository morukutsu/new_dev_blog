import Head from "next/head";
import Sidebar from "../components/Sidebar";
import "./style.css";

/*

<div style={{ fontFamily: "monospace", fontSize: 32, fontWeight: "bold" }}>
    <AnimatedText>Welcome to my world</AnimatedText>
</div>

*/

export default () => {
    return (
        <div>
            <Head>
                <title>morukutsu + blog</title>
                <link
                    rel="shortcut icon"
                    href="/static/images/favicon.ico"
                    type="image/x-icon"
                />
                <link
                    rel="icon"
                    href="/static/images/favicon.ico"
                    type="image/x-icon"
                />
            </Head>
            <section style={styles.page}>
                <Sidebar />

                <article />
            </section>
        </div>
    );
};

const styles = {
    page: {
        height: "100vh"
    }
};
