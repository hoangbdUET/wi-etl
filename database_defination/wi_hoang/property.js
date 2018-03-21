/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('property', {
		idProperty: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		unit: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		description: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		value: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'property',
		timestamp: true
	});
};
