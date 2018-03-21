/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dataset', {
		idDataset: {
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
		datasetKey: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		datasetLabel: {
			type: DataTypes.STRING(250),
			allowNull: true
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
		tableName: 'dataset',
		paranoid: true,
		timestamp: true
	});
};
