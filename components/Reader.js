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
    // TODO: OPTI: precompute this
    const ids = db.articles.map(e => generateArticleId(e));

    const found = ids.indexOf(id);
    if (found !== -1) return db.articles[found];

    return null;
};

const Back = () => {
    return (
        <div style={styles.back}>
            {"< "}
            <a href="/">Back</a>
        </div>
    );
};

export default props => {
    let ArticleComponent = null;
    const articleMetadata = getArticleFromId(props.article);
    if (articleMetadata) {
        ArticleComponent = dynamic(
            () => import(`../articles/${articleMetadata.path}`),
            {
                loading: () => <div />
            }
        );
    }

    return (
        <div>
            <Back />
            {ArticleComponent != null ? <ArticleComponent /> : null}
        </div>
    );
};

const styles = {
    back: {
        fontWeight: 900,
        fontSize: 18
    }
};
