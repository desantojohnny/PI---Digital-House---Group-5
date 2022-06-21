module.exports = (sequelize, DataType) =>{ //modelagem tabela usuario
    const Usuario = sequelize.define('Usuario', {
        id_usuario:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: DataType.STRING,
        },
            email:{
                type:DataType.STRING,
                allowNull:false
            },
            senha:DataType.STRING
    }, { //padrao do sequelize, deixando no singular, assim ele deixara conforme o nome que escolhermos (MANTER NO SINGULAR)
        tableName: 'usuario',
        timestamps: false
    })

    //teste

    return Usuario

}