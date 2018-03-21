/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cross_plot', {
		idCrossPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			unique: "name-idWell",
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'BlankCrossPlot'
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '{}'
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
		discriminator: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		isDefineDepthColors: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		axisColors: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		showHistogram: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
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
		}
	}, {
		tableName: 'cross_plot',
		paranoid: true,
		timestamp: true
	});
};
