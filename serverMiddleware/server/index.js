export default function (req, res, next) {
    console.log('serverMiddleware', req.headers.host);
    next()
}