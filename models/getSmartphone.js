module.exports = async () => {
    const schemas = require('../databases/database_rates')

    const rates_smartphone = schemas.smartphones.findAll()

    return rates_smartphone
}