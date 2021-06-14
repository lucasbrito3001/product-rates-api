module.exports = async () => {
    const schemas = require('../databases/database_rates')

    const rates_smartv = schemas.smartvs.findAll()

    return rates_smartv
}