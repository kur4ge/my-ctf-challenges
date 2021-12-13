module.exports = {
    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: 8080,
        open: true,
        proxy: {
            '/v': {
                target: "http://localhost:8088",
                changeOrigin: true
            }
        },
    },
    assetsDir: 'static'
}
