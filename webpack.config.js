module.exports = {
    entry: './app.js',
    devServer: {
        inline: true,
        port: 3000,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};
