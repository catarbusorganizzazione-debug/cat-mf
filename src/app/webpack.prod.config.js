/**
 * Configurazione path per richiamo remoteEntry.js dalla shell in ambiente di prod (cliente)
 */

module.exports = require('./webpack.config');
// module.exports.output.publicPath = 'http://dc-cat-mf-develop-diritticivili.ocp311.rgsdev.it/';
module.exports.output.publicPath = 'routesBE';
