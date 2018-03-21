/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('line', {
		idLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		showHeader: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		showDataset: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		minValue: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0'
		},
		maxValue: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '200'
		},
		autoValueScale: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		displayMode: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'Line'
		},
		wrapMode: {
			type: DataTypes.ENUM('None','Left','Right','Both'),
			allowNull: false,
			defaultValue: 'None'
		},
		blockPosition: {
			type: DataTypes.ENUM('None','Start','Middle','End'),
			allowNull: false,
			defaultValue: 'None'
		},
		ignoreMissingValues: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		displayType: {
			type: DataTypes.ENUM('Linear','Logarithmic'),
			allowNull: false,
			defaultValue: 'Linear'
		},
		displayAs: {
			type: DataTypes.ENUM('Normal','Cumulative','Mirror','Pid'),
			allowNull: false,
			defaultValue: 'Normal'
		},
		lineStyle: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: '[0]'
		},
		lineWidth: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		lineColor: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'red'
		},
		symbolName: {
			type: DataTypes.ENUM('Circle','Cross','Diamond','Dot','Plus','Square','Star','Triangle'),
			allowNull: true,
			defaultValue: 'Circle'
		},
		symbolSize: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '5'
		},
		symbolLineWidth: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		symbolStrokeStyle: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'red'
		},
		symbolFillStyle: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'red'
		},
		symbolLineDash: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: '[0]'
		},
		alias: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		unit: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: 'N/A'
		},
		orderNum: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: 'a'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		idTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'track',
				key: 'idTrack'
			}
		},
		idCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'curve',
				key: 'idCurve'
			}
		}
	}, {
		tableName: 'line',
		timestamp: true
	});
};
