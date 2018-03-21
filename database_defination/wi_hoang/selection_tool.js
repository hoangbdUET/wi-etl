/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('selection_tool', {
		idSelectionTool: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		data: {
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
			allowNull: false,
			references: {
				model: 'combined_box',
				key: 'idCombinedBox'
			}
		},
		idCombinedBoxTool: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'combined_box_tool',
				key: 'idCombinedBoxTool'
			}
		}
	}, {
		tableName: 'selection_tool',
		timestamp: true
	});
};
