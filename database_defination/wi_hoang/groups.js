/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('groups', {
		idGroup: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		type: {
			type: DataTypes.STRING(25),
			allowNull: false,
			defaultValue: 'Well'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		idProject: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'project',
				key: 'idProject'
			},
			unique: true
		},
		idParent: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'groups',
				key: 'idGroup'
			}
		}
	}, {
		tableName: 'groups',
		timestamp: true
	});
};
