import Head from "next/head";
import Router, { withRouter } from "next/router";

import Sidebar from "../components/Sidebar";
import "./style.css";

import Reader from "../components/Reader";
import List from "../components/List";

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

                <article style={styles.inner}>
                    <div style={styles.content}>
                        {articleId ? <Reader article={articleId} /> : <List />}
                    </div>
                </article>
            </section>
        </div>
    );
};

const styles = {
    page: {
        height: "100vh",
        display: "flex"
    },

    inner: {
        width: "100vh",
        display: "flex",
        paddingLeft: 10,
        paddingTop: 100,
        justifyContent: "center"
    },

    content: {
        width: 700
    }
};

export default withRouter(Index);
