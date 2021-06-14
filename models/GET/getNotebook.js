module.exports = async () => {
    const schemas = require('../../databases/database_rates')

    const rates_notebook = schemas.notebooks.findAll()

    return rates_notebook
}