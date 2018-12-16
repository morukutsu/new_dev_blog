import Head from "next/head";
import Router, { withRouter } from "next/router";

import Sidebar from "../components/Sidebar";
import "./style.css";

import Reader from "../components/Reader";

const Index = props => {
    const articleId = props.router.query.article;

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

                <article>
                    <Reader article={articleId} />
                </article>
            </section>
        </div>
    );
};

const styles = {
    page: {
        height: "100vh",
        display: "flex"
    }
};

export default withRouter(Index);
