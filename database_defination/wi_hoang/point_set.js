/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('point_set', {
		idPointSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		scaleLeft: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		scaleRight: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		scaleBottom: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		scaleTop: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		logX: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		logY: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		majorX: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		minorX: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		majorY: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		minorY: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		scaleMin: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		scaleMax: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		numColor: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		pointSymbol: {
			type: DataTypes.STRING(60),
			allowNull: false,
			defaultValue: 'circle'
		},
		pointSize: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '5'
		},
		pointColor: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'blue'
		},
		overlayLine: {
			type: DataTypes.STRING(180),
			allowNull: false,
			defaultValue: 'AnaDrill CDN 6.5in Den/Neu Rhof 1.0'
		},
		standalone: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		showLine: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		lineMode: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		intervalDepthTop: {
			type: "DOUBLE",
			allowNull: true
		},
		intervalDepthBottom: {
			type: "DOUBLE",
			allowNull: true
		},
		activeZone: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: 'All'
		},
		zAxes: {
			type: DataTypes.ENUM('Curve','Zone'),
			allowNull: false,
			defaultValue: 'Curve'
		},
		depthType: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'intervalDepth'
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
		},
		idCurveX: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			}
		},
		idCurveY: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			}
		},
		idCurveZ: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			}
		},
		idWell: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'well',
				key: 'idWell'
			}
		},
		idZoneSet: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'zone_set',
				key: 'idZoneSet'
			}
		},
		idOverlayLine: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'overlay_line',
				key: 'idOverlayLine'
			}
		}
	}, {
		tableName: 'point_set',
		timestamp: true
	});
};
