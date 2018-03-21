/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reference_curve', {
		idReferenceCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		left: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		right: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		visiable: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		log: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		color: {
			type: DataTypes.STRING(250),
			allowNull: false,
			defaultValue: 'rgb(0,0,0)'
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
			allowNull: true,
			references: {
				model: 'cross_plot',
				key: 'idCrossPlot'
			}
		},
		idHistogram: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'histogram',
				key: 'idHistogram'
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
		tableName: 'reference_curve',
		timestamp: true
	});
};
