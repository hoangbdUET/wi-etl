/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('combined_box', {
		idCombinedBox: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			unique: "name-idWell",
			type: DataTypes.STRING(50),
			allowNull: false
		},
		selection: {
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
		idWell: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'well',
				key: 'idWell'
			}
		}
	}, {
		tableName: 'combined_box',
		timestamp: true
	});
};
