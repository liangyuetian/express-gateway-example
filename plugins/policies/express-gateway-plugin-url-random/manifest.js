module.exports = {
    version: '0.0.1',
    init: function (pluginContext) {
        const policy = require('./random')
        pluginContext.registerPolicy(policy)
    }
};
