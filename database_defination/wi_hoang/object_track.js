/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('object_track', {
		idObjectTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		showTitle: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'Histogram Track 1'
		},
		topJustification: {
			type: DataTypes.ENUM('Left','Center','Right'),
			allowNull: false,
			defaultValue: 'Center'
		},
		orderNum: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: 'zz'
		},
		width: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '1'
		},
		zoomFactor: {
			type: "DOUBLE",
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
		idPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'plot',
				key: 'idPlot'
			}
		}
	}, {
		tableName: 'object_track',
		timestamp: true
	});
};
