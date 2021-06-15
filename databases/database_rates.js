const db = require('./conexao')

const Notebooks = db.sql.define('notebook', {
    firstName: {type: db.Sql.STRING},
    lastName: {type: db.Sql.STRING},
    age: {type: db.Sql.INTEGER},
    rate: {type: db.Sql.TEXT}
})

const Smartphones = db.sql.define('smartphone', {
    firstName: {type: db.Sql.STRING},
    lastName: {type: db.Sql.STRING},
    age: {type: db.Sql.INTEGER},
    rate: {type: db.Sql.TEXT}
})

const Smartvs = db.sql.define('smartv', {
    firstName: {type: db.Sql.STRING},
    lastName: {type: db.Sql.STRING},
    age: {type: db.Sql.INTEGER},
    rate: {type: db.Sql.TEXT}
})

const Smartwatch = db.sql.define('smartwatch', {
    firstName: {type: db.Sql.STRING},
    lastName: {type: db.Sql.STRING},
    age: {type: db.Sql.INTEGER},
    rate: {type: db.Sql.TEXT}
})

const Keyboard = db.sql.define('keyboard', {
    firstName: {type: db.Sql.STRING},
    lastName: {type: db.Sql.STRING},
    age: {type: db.Sql.INTEGER},
    rate: {type: db.Sql.TEXT}
})

const Headset = db.sql.define('headset', {
    firstName: {type: db.Sql.STRING},
    lastName: {type: db.Sql.STRING},
    age: {type: db.Sql.INTEGER},
    rate: {type: db.Sql.TEXT}
})

module.exports = {
    notebooks: Notebooks,
    smartphones: Smartphones,
    smartvs: Smartvs,
    smartwatches: Smartwatch,
    keyboards: Keyboard,
    headsets: Headset
}