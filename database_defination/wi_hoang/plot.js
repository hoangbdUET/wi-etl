/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('plot', {
		idPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			unique: "name-idWell",
			type: DataTypes.STRING(255),
			allowNull: false
		},
		option: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		currentState: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '{}'
		},
		cropDisplay: {
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
		},
		referenceCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			}
		}
	}, {
		tableName: 'plot',
		paranoid: true,
		timestamp: true
	});
};
