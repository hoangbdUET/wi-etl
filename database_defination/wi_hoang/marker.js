/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('marker', {
		idMarker: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		nameHAlign: {
			type: DataTypes.ENUM('Center','Left','Right'),
			allowNull: false,
			defaultValue: 'Left'
		},
		nameVAlign: {
			type: DataTypes.ENUM('Low','Center','High','None'),
			allowNull: false,
			defaultValue: 'None'
		},
		depth: {
			type: "DOUBLE",
			allowNull: false
		},
		precision: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '2'
		},
		depthHAlign: {
			type: DataTypes.ENUM('Center','Left','Right'),
			allowNull: false,
			defaultValue: 'Left'
		},
		depthVAlign: {
			type: DataTypes.ENUM('Low','Center','High','None'),
			allowNull: false,
			defaultValue: 'High'
		},
		lineWidth: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '2'
		},
		lineDash: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: ''
		},
		lineColor: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: ''
		},
		showSymbol: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		symbolName: {
			type: DataTypes.ENUM('Circle','Square'),
			allowNull: true,
			defaultValue: 'Circle'
		},
		symbolSize: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '15'
		},
		symbolStrokeStyle: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		symbolFillStyle: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		symbolLineWidth: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		symbolLineDash: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: ''
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		idTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'track',
				key: 'idTrack'
			}
		}
	}, {
		tableName: 'marker',
		timestamp: true
	});
};
