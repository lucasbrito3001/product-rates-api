(async () => {
    const get_notebook_rate = require('../models/GET/getNotebook')
    const get_smartphone_rate = require('../models/GET/getSmartphone')
    const get_smartv_rate = require('../models/GET/getSmartv')
    const get_all_rates = require('../models/GET/getAllRates')
    const post_notebook_rate = require('../models/POST/postNotebook')
    const post_smartphone_rate = require('../models/POST/postSmartphone')
    const post_smartv_rate = require('../models/POST/postSmartv')

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
            await post_notebook_rate(req)

            res.send(req.body)
        })

        app.post('/api/rates/smartphone', async (req, res) => {
            await post_smartphone_rate(req)
            
            res.send(req.body)
        })

        app.post('/api/rates/smartv', async (req, res) => {
            await post_smartv_rate(req)

            res.send(req.body)
        })
    }
})();