const Vlp = require('./node_modules/vue-loader/lib/plugin')


module.exports = {
    // 入口js
    entry: {
        index: './src/index.js'
    },
    // 输出
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    // 规则
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new Vlp()
    ]
}
// 编译 ./node_modules/.bin/webpack --watch