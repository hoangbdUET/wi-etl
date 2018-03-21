/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('family_condition', {
		idFamilyCondition: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		curveName: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		unit: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		idFamily: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'family',
				key: 'idFamily'
			}
		}
	}, {
		tableName: 'family_condition',
		timestamp: true
	});
};
