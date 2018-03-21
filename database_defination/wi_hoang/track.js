/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('track', {
		idTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		orderNum: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: 'zz'
		},
		showTitle: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'Track 1'
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
		showLabels: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		showValueGrid: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		majorTicks: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		minorTicks: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '5'
		},
		showDepthGrid: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		width: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '2'
		},
		color: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'white'
		},
		showEndLabels: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		labelFormat: {
			type: DataTypes.STRING(150),
			allowNull: true
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
		tableName: 'track',
		timestamp: true
	});
};
