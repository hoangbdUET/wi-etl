/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('overlay_line', {
		idOverlayLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		family_group_x: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		family_group_y: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		overlay_line_specs: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'overlay_line',
		timestamp: true
	});
};
