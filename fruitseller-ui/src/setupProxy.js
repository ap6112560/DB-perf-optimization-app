require('dotenv').config();
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api',{
            changeOrigin: true,
            target: "http://" + process.env.WEB_SERVER + ":8080",
            pathRewrite: {
                "^/api": "/"
            }
        })
    );
};