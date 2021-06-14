(async () => {
    const schemas = require('../databases/database_rates')
    const get_notebook_rate = require('../models/getNotebook')
    const get_smartphone_rate = require('../models/getSmartphone')
    const get_smartv_rate = require('../models/getSmartv')
    const get_all_rates = require('../models/getAllRates')

    module.exports = app => {
        app.get('/api/rates', async (req, res) => {
            const all_rates = await get_all_rates()

            res.send(
                JSON.stringify(all_rates)
            )
        })

        app.get('/api/rates/notebook', async (req, res) => {
            const rates_notebook = await get_notebook_rate()

            res.send(
                JSON.stringify(rates_notebook)
            )
        })

        app.get('/api/rates/smartphone', async (req, res) => {
            const rates_smartphone = await get_smartphone_rate()

            res.send(
                JSON.stringify(rates_smartphone)
            )
        })

        app.get('/api/rates/smartv', async (req, res) => {
            const rates_smartv = await get_smartv_rate()

            res.send(
                JSON.stringify(rates_smartv)
            )
        })

        app.post('/api/rates/notebook', async (req, res) => {
            await schemas.notebooks.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                rate: req.body.rate
            })
            console.log(req.body)
            res.send(req.body)
        })

        app.post('/api/rates/smartphone', async (req, res) => {
            await schemas.smartphones.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                rate: req.body.rate
            })
            console.log(req.body)
            res.send(req.body)
        })

        app.post('/api/rates/smartv', async (req, res) => {
            await schemas.smartvs.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                rate: req.body.rate
            })
            console.log(req.body)
            res.send(req.body)
        })
    }
})();