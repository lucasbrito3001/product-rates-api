module.exports = async () => {
    const schemas = require('../../databases/database_rates')

    const rates_notebook = await schemas.notebooks.findAll();
    const rates_smartphone = await schemas.smartphones.findAll();
    const rates_smartv = await schemas.smartvs.findAll();

    const all_rates = []
    const arrays = [rates_notebook, rates_smartphone, rates_smartv]

    arrays.forEach(rates => {
        rates.forEach(rate => {
            all_rates.push(rate)
        })
    })

    return all_rates;
}