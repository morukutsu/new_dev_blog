import db from "../articles/metadata.json";
import ArticleDate from "./ArticleDate";

const generateArticleId = article => {
    let text = article.name.toLowerCase();
    text = text.replace(/\s/gi, "-");
    text = text.replace(/[^a-z0-9\-]/gi, "");
    return text;
};

const getArticleFromId = id => {
    // TODO: OPTI: precompute this
    const ids = db.articles.map(e => generateArticleId(e));

    const found = ids.indexOf(id);
    if (found !== -1) return db.articles[found];

    return null;
};

const ArticleSummary = props => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                <a href={"/" + props.id}>{props.article.name}</a>
            </div>
            <ArticleDate date={props.article.date} />
            <div>{props.article.summary}</div>
        </div>
    );
};

export default props => {
    const articles = db.articles.sort((a, b) => b.date - a.date).map(e => {
        const id = generateArticleId(e);
        return <ArticleSummary key={id} id={id} article={e} />;
    });

    return <div>{articles}</div>;
};

const styles = {
    container: {
        marginBottom: 30
    },

    title: {
        fontWeight: 900,
        fontSize: 32,
        color: "#333333",
        textDecoration: "none"
    }
};
