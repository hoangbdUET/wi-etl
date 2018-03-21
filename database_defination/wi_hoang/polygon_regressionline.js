/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('polygon_regressionline', {
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		idPolygon: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'polygon',
				key: 'idPolygon'
			}
		},
		idRegressionLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'regression_line',
				key: 'idRegressionLine'
			}
		}
	}, {
		tableName: 'polygon_regressionline',
		timestamp: true
	});
};
