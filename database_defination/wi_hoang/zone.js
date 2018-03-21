/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('zone', {
		idZone: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		startDepth: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		endDepth: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		fill: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		showName: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
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
		idZoneSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'zone_set',
				key: 'idZoneSet'
			}
		}
	}, {
		tableName: 'zone',
		paranoid: true,
		timestamp: true
	});
};
