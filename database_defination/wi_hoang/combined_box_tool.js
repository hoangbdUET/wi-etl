/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('combined_box_tool', {
		idCombinedBoxTool: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		color: {
			type: DataTypes.TEXT,
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
		idCombinedBox: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'combined_box',
				key: 'idCombinedBox'
			}
		}
	}, {
		tableName: 'combined_box_tool',
		timestamp: true
	});
};
