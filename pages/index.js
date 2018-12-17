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
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1"
                />
            </Head>
            <section style={styles.page}>
                <Sidebar />

                <article style={styles.inner} className="inner">
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
        height: "100vh"
    },

    inner: {
        maxWidth: 700,
        justifyContent: "center"
    },

    content: {}
};

export default withRouter(Index);
