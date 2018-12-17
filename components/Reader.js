import React, { Component, useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { useSpring, animated } from "react-spring/hooks";

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

const AnimationWrapper = props => {
    const style = useSpring({
        opacity: 1,
        transform: "translate(0px, 0px)",
        from: { opacity: 0, transform: "translate(-20px, 0px)" }
    });

    return <animated.div style={style}>{props.children}</animated.div>;
};

const DynamicLoadedComp = props => {
    const [component, setComponent] = useState(() => <div />);

    const loadModuleAsync = async () => {
        const module = await import(`../articles/${props.path}`);

        const Comp = module.default;
        setComponent(
            <AnimationWrapper>
                <Comp {...props.props} />
            </AnimationWrapper>
        );
    };

    useEffect(() => {
        loadModuleAsync();
    }, []);

    return component;
};

export default props => {
    const articleMetadata = getArticleFromId(props.article);

    const TitleComponent = props => {
        return (
            <div>
                <div style={styles.title}>{props.children}</div>
                <ArticleDate date={articleMetadata.date} />
            </div>
        );
    };

    const Back = () => {
        return (
            <div style={styles.back}>
                {"< "}
                <a href="/">Back</a>
            </div>
        );
    };

    const components = {
        h1: TitleComponent
    };

    return (
        <div>
            <Back />
            <DynamicLoadedComp
                path={articleMetadata.path}
                props={{ components: components }}
            />
        </div>
    );
};

const styles = {
    back: {
        fontWeight: 900,
        fontSize: 18
    },

    title: {
        fontWeight: 900,
        fontSize: 42,
        color: "#333333",
        textDecoration: "none"
    }
};
