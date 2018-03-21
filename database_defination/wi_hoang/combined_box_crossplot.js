/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('combined_box_crossplot', {
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		idCombinedBox: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'combined_box',
				key: 'idCombinedBox'
			}
		},
		idCrossPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'cross_plot',
				key: 'idCrossPlot'
			}
		}
	}, {
		tableName: 'combined_box_crossplot',
		timestamp: true
	});
};
