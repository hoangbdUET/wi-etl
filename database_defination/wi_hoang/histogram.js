/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('histogram', {
		idHistogram: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			unique: "name-idWell",
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'BlankHistogram'
		},
		histogramTitle: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		hardCopyWidth: {
			type: "DOUBLE",
			allowNull: true
		},
		hardCopyHeight: {
			type: "DOUBLE",
			allowNull: true
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
		divisions: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '50'
		},
		leftScale: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		rightScale: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		showGaussian: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		loga: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		showGrid: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		showCumulative: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		flipHorizontal: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		lineStyle: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'Custom'
		},
		lineColor: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: 'Blue'
		},
		plot: {
			type: DataTypes.ENUM('Bar','Curve'),
			allowNull: true,
			defaultValue: 'Bar'
		},
		plotType: {
			type: DataTypes.ENUM('Frequency','Percent'),
			allowNull: false,
			defaultValue: 'Frequency'
		},
		color: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: 'Blue'
		},
		discriminator: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		referenceTopDepth: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		referenceBottomDepth: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		referenceScale: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1000'
		},
		referenceVertLineNumber: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '7'
		},
		referenceDisplay: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		referenceShowDepthGrid: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		colorBy: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'zone'
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
		idWell: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'well',
				key: 'idWell'
			}
		},
		idCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
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
		tableName: 'histogram',
		paranoid: true,
		timestamp: true
	});
};
