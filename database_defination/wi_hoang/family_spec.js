/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('family_spec', {
		idFamilySpec: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		unit: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		minScale: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		maxScale: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		displayType: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		displayMode: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		blockPosition: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		lineStyle: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		lineWidth: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		lineColor: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		isDefault: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
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
		tableName: 'family_spec',
		timestamp: true
	});
};
