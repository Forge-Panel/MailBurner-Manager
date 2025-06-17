import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Mailbox = sequelize.define('Mailbox', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('gmail', 'outlook', 'exchange', 'proton', 'yahoo', 'icloud', 'imap'),
    allowNull: false,
  },
  config: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

Mailbox.sync();

export default Mailbox;