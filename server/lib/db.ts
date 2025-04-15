import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('db', 'db', 'db', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

export default sequelize;