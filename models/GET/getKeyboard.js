module.exports = async () => {
    const schemas = require('../../databases/database_rates')

    const rates_keyboard = schemas.keyboards.findAll()

    return rates_keyboard
}