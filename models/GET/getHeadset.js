module.exports = async () => {
    const schemas = require('../../databases/database_rates')

    const rates_headset = schemas.headsets.findAll()

    return rates_headset
}