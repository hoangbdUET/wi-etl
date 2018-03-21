/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('combined_box_plot', {
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
		idPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'plot',
				key: 'idPlot'
			}
		}
	}, {
		tableName: 'combined_box_plot',
		timestamp: true
	});
};
