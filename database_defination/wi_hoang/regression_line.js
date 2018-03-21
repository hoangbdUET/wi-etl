/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('regression_line', {
		idRegressionLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		lineStyle: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '{color: \'Blue\', width: 1, style: []}'
		},
		displayLine: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		displayEquation: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		regType: {
			type: DataTypes.ENUM('Linear','Exponent','Power'),
			allowNull: false,
			defaultValue: 'Linear'
		},
		inverseReg: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		exclude: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		fitX: {
			type: "DOUBLE",
			allowNull: true
		},
		fitY: {
			type: "DOUBLE",
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		idCrossPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cross_plot',
				key: 'idCrossPlot'
			}
		}
	}, {
		tableName: 'regression_line',
		timestamp: true
	});
};
