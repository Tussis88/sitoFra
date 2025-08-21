export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css/styles.css");
    eleventyConfig.addWatchTarget("src/css/styles.css");

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};