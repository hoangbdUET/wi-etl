/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('well_header', {
		idWellHeader: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		idWell: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'well',
				key: 'idWell'
			}
		},
		header: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true
		},
		value: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		standard: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
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
		tableName: 'well_header',
		timestamp: true
	});
};
