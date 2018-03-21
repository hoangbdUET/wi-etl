/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('well', {
		idWell: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			unique: "name-idProject",
			type: DataTypes.STRING(50),
			allowNull: false
		},
		topDepth: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		bottomDepth: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		step: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
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
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		idProject: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'project',
				key: 'idProject'
			}
		},
		idGroup: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'groups',
				key: 'idGroup'
			}
		}
	}, {
		tableName: 'well',
		paranoid: true,
		timestamp: true
	});
};
