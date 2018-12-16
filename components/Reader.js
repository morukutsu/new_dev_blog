import React, { Component, useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

import db from "../articles/metadata.json";

const generateArticleId = article => {
    let text = article.name.toLowerCase();
    text = text.replace(/\s/gi, "-");
    text = text.replace(/[^a-z0-9\-]/gi, "");
    return text;
};

const getArticleFromId = id => {
    // TODO: precompute this
    const ids = db.articles.map(e => generateArticleId(e));

    const found = ids.indexOf(id);
    if (found !== -1) {
        return db.articles[found];
    }

    return null;
};

export default props => {
    /*const [currentArticle, setCurrentArticle] = useState(null);

    const list = db.articles.map(e => {
        return (
            <div key={e.name}>
                <a onClick={() => setCurrentArticle(e)}>{e.name}</a>
            </div>
        );
    });

    let ArticleComponent = null;

    if (currentArticle !== null) {
        ArticleComponent = dynamic(() =>
            import(`../articles/${currentArticle.path}`)
        );
    }

    const a = getArticleFromId(props.article);*/

    let ArticleComponent = null;
    const articleMetadata = getArticleFromId(props.article);
    if (articleMetadata) {
        ArticleComponent = dynamic(() =>
            import(`../articles/${articleMetadata.path}`)
        );
    }

    return <div>{ArticleComponent != null ? <ArticleComponent /> : null}</div>;
};
