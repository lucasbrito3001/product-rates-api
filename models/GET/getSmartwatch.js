module.exports = async () => {
    const schemas = require('../../databases/database_rates')

    const rates_smartwatch = schemas.smartwatches.findAll()

    return rates_smartwatch
}