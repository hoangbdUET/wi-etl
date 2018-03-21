/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('object_of_track', {
		idObjectOfTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		object: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		topDepth: {
			type: "DOUBLE",
			allowNull: false
		},
		bottomDepth: {
			type: "DOUBLE",
			allowNull: false
		},
		left: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		right: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '100'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		idObjectTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'object_track',
				key: 'idObjectTrack'
			}
		}
	}, {
		tableName: 'object_of_track',
		timestamp: true
	});
};
