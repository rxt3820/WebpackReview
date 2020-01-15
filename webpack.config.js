module.exports = {
    entry: 'C:/Users/RegineThimothee/Desktop/trainFiles/testThree.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname //absoulte path
        //bundle.js file is not being created
    },
    module: {
        rules: [
            {
                test: '/\.tsx?$/',
                loader: 'ts-loader',
                exclude: '/node_modules/',
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};