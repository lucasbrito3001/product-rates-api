(async () => {
    const customExpress = require('./configs/customExpress')
    const connection = require('./databases/conexao')
    // const syncs = require('./databases/database_rates')

    const app = customExpress()

    connection.sql.authenticate()
        .then(() => {
            console.log('Conexão realizada com sucesso!')
        })
        .catch((err) => {
            console.error('Erro de conexão: ' + err)
        })

    // await syncs.notebooks.sync({ force: true })
    // await syncs.smartphones.sync({ force: true })
    // await syncs.smartvs.sync({ force: true })

    const port = 3456

    app.listen(port, () => console.log('Servidor rodando na porta: ' + port))
})();