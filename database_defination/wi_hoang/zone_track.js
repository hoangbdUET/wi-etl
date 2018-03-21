/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('zone_track', {
		idZoneTrack: {
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
			defaultValue: 'Zone1'
		},
		topJustification: {
			type: DataTypes.ENUM('Left','Center','Right'),
			allowNull: false,
			defaultValue: 'Center'
		},
		bottomJustification: {
			type: DataTypes.ENUM('Left','Center','Right'),
			allowNull: false,
			defaultValue: 'Center'
		},
		orderNum: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: 'zz'
		},
		color: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'white'
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
		},
		idZoneSet: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'zone_set',
				key: 'idZoneSet'
			}
		}
	}, {
		tableName: 'zone_track',
		timestamp: true
	});
};
