/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('zone_set', {
		idZoneSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			unique: "name-idWell",
			type: DataTypes.STRING(100),
			allowNull: false
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
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
		tableName: 'zone_set',
		paranoid: true,
		timestamp: true
	});
};
