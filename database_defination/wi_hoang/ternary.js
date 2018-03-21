/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ternary', {
		idTernary: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		xValue: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		yValue: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		style: {
			type: DataTypes.ENUM('Circle','Cross','Diamond','Plus','Square','Star','Triangle'),
			allowNull: false,
			defaultValue: 'Circle'
		},
		usedIn: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		show: {
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
		tableName: 'ternary',
		timestamp: true
	});
};
