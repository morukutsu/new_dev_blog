const { PHASE_PRODUCTION_SERVER } =
    process.env.NODE_ENV === "development"
        ? {}
        : !process.env.NOW_REGION
            ? require("next/constants")
            : require("next-server/constants");

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_PRODUCTION_SERVER) {
        // Config used to run in production.
        return {};
    }

    const withCSS = require("@zeit/next-css");
    const withTM = require("@weco/next-plugin-transpile-modules");
    const withMDX = require("@zeit/next-mdx")();

    return withMDX(
        withCSS(
            withTM({
                transpileModules: ["react-spring", "@babel/runtime/helpers"]
            })
        )
    );
};
