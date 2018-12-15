import {
    useSpring,
    useTransition,
    useTrail,
    useKeyframes,
    animated
} from "react-spring/hooks";

import AnimatedText from "../components/AnimatedText";

export default () => {
    const props = useSpring({
        opacity: 1,
        transform: "translate(0px, 0px)",
        from: { opacity: 0, transform: "translate(-120px, 0px)" }
    });
    const headerStyle = {
        ...props,
        ...styles.header
    };

    const animatedTextParameters = {
        type: 1,
        speed: 60,
        charset: "°=+/*-!?%฿",
        count: 2
    };

    return (
        <aside style={styles.sidebar}>
            <animated.div style={headerStyle}>
                <img
                    style={styles.profilePicture}
                    src="/static/images/morukutsu_pic.png"
                    alt="profile avatar of morukutsu (pixel art)"
                />
                <div style={styles.title}>Uldéric Kibongui</div>
                <div style={styles.subtitle}>
                    <a
                        href="https://twitter.com/morukutsu"
                        alt="link to twitter profile"
                    >
                        @morukutsu
                    </a>
                </div>
                <div style={styles.description}>
                    Personal blog <br /> Discussing code<br />
                    <span style={{ fontFamily: "monospace" }}>
                        <AnimatedText parameters={animatedTextParameters}>
                            art experiments
                        </AnimatedText>
                    </span>
                    travel and style
                </div>
                <nav style={styles.nav}>
                    <a style={styles.navLink} href="/">
                        Home
                    </a>
                    <a
                        style={styles.navLink}
                        href="http://github.com/morukutsu"
                    >
                        // GitHub
                    </a>
                </nav>
            </animated.div>
        </aside>
    );
};

const styles = {
    sidebar: {
        //backgroundColor: "rgb(32, 32, 32)",
        width: 320,
        height: "100%",
        display: "flex",
        //alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#DEDEDE",

        background: "linear-gradient(to bottom, rgb(32, 32, 32), #29323c)"
    },

    profilePicture: {
        borderRadius: 128,
        width: 128,
        height: 128,
        alignSelf: "center"
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 10
    },

    subtitle: {
        fontSize: 16,
        fontWeight: "bold"
    },

    header: {
        alignSelf: "center"
    },

    description: {
        marginTop: 10,
        width: 260,
        alignSelf: "center",
        lineHeight: 1.3,
        fontWeight: 300,
        color: "#919191",
        fontSize: 20
    },

    nav: {
        fontSize: 20,
        marginTop: 20
    },

    navLink: {
        marginTop: 8,
        display: "block"
    }
};
