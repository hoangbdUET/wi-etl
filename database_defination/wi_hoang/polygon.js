/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('polygon', {
		idPolygon: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		lineStyle: {
			type: DataTypes.STRING(60),
			allowNull: false
		},
		display: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		points: {
			type: DataTypes.TEXT,
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
		idCrossPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cross_plot',
				key: 'idCrossPlot'
			}
		}
	}, {
		tableName: 'polygon',
		timestamp: true
	});
};
