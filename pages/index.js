import AnimatedText from "../components/AnimatedText";
import "./style.css";

/*

<div style={{ fontFamily: "monospace", fontSize: 32, fontWeight: "bold" }}>
    <AnimatedText>Welcome to my world</AnimatedText>
</div>

*/

export default () => (
    <section style={styles.page}>
        <aside style={styles.sidebar} />

        <article />
    </section>
);

const styles = {
    page: {
        height: "100vh"
    },

    sidebar: {
        display: "flex",
        backgroundColor: "rgb(32, 32, 32)",
        width: 320,
        height: "100%"
    }
};
