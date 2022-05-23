export default class Request {}

const request = new Request({
    baseUrl: '',
    headers: {},
    timeout: 1000
})
request.use(env())
request.use(only())
request.use(max())
request.use(filter({ null: true }))
request.use(mock())
request.use(loading())
request.use(dynamicProxy())
request.use(
    transform({
        request() {},
        response() {}
    })
)
request.use(
    transform({
        request() {},
        response() {}
    })
)

export { request }
