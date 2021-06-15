module.exports = async ( req ) => {
    const schemas = require('../../databases/database_rates')

    await schemas.smartwatches.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        rate: req.body.rate
    })
}