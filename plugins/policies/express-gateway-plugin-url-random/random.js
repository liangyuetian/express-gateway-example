module.exports = {
    name: 'urlRandom',
    schema: {
        $id: 'http://express-gateway.io/schemas/policies/example-policy.json',
        type: 'object',
        properties: {
            keyName: {
                type: 'string',
                // format: 'url',
                default: 's'
            }
        }
    },
    policy: (actionParams) => {
        return (req, res, next) => {
            const {keyName} = actionParams
            const url = new URL(req.protocol + '://' + req.hostname + req.url)
            url.searchParams.append(keyName, String(Date.now()))
            req.url = url.pathname + url.search
            next() // calling next policy
            // or write response:  res.json({result: "this is the response"})
        };
    }
};
