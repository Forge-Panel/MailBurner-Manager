import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Mailbox = sequelize.define('Mailbox', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  config: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

export default Mailbox;