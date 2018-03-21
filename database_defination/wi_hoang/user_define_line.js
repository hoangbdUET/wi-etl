/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_define_line', {
		idUserDefineLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		function: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		lineStyle: {
			type: DataTypes.STRING(255),
			allowNull: false
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
		tableName: 'user_define_line',
		timestamp: true
	});
};
