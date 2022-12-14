const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = process.env.NODE_ENV === "development";
module.exports = {
    mode: NODE_ENV ? NODE_ENV : "development",
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        publicPath: "/",
    },
    module: {
        rules: [{
                test: /\.(tsx|ts)$/,
                use: ["ts-loader"],
                exclude: [/node_modules/]
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: {
                            mode: "local",
                            localIdentName: "[name]__[local]--[hash:base64:5]"
                        }
                    }
                }],

            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },


        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts", ".json", "css"],
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "index.html") })],
    devServer: {
        port: 3000,
        hot: IS_DEV,
    }
};