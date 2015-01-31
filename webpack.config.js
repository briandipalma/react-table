module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname + "/workbench",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
