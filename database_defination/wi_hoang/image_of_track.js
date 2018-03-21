/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('image_of_track', {
		idImageOfTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		fill: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		showName: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		imageUrl: {
			type: DataTypes.STRING(255),
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
		smartDisplay: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
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
		idImageTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'image_track',
				key: 'idImageTrack'
			}
		}
	}, {
		tableName: 'image_of_track',
		timestamp: true
	});
};
