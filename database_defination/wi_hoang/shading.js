/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shading', {
		idShading: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		leftFixedValue: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		rightFixedValue: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		negativeFill: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		fill: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		positiveFill: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		isNegPosFill: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
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
		idTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'track',
				key: 'idTrack'
			}
		},
		idLeftLine: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'line',
				key: 'idLine'
			}
		},
		idRightLine: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'line',
				key: 'idLine'
			}
		},
		idControlCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			}
		}
	}, {
		tableName: 'shading',
		timestamp: true
	});
};
