/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('annotation', {
		idAnnotation: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		text: {
			type: DataTypes.STRING(250),
			allowNull: false,
			defaultValue: 'Example text'
		},
		textStyle: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '{}'
		},
		vAlign: {
			type: DataTypes.ENUM('Top','Center','Bottom'),
			allowNull: false,
			defaultValue: 'Center'
		},
		hAlign: {
			type: DataTypes.ENUM('Left','Center','Right'),
			allowNull: false,
			defaultValue: 'Center'
		},
		background: {
			type: DataTypes.STRING(250),
			allowNull: false,
			defaultValue: '{}'
		},
		fitBounds: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		deviceSpace: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		vertical: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		shadow: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		left: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		width: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '100'
		},
		top: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		bottom: {
			type: "DOUBLE",
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
		idTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'track',
				key: 'idTrack'
			}
		}
	}, {
		tableName: 'annotation',
		timestamp: true
	});
};
