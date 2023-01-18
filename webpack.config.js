
const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.tsx",
    
    resolve: {
        extensions: [
            ".js", ".json", ".tsx", ".ts"
        ]
    },

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"  
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    module: {
        rules: [
            
            {
                test: /.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env","@babel/preset-react"
                        ],
                    }
                }
            },
            {
                test: /.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
}