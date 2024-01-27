import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];
const connection = new Sequelize(databaseConfig);
// mandando as configurações para a data base, para conexão

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
// se existir esta função sera executado a função
