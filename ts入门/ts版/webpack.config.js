const Vlp = require('./node_modules/vue-loader/lib/plugin')


module.exports = {
    // 入口ts
    entry: {
        index: './src/index.ts'
    },
    // 输出
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    // 省略
    resolve: {
        extensions: ['.js', '.json', '.ts']
    },
    // 规则
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
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