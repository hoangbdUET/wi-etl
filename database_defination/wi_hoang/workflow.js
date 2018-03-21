/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('workflow', {
		idWorkflow: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		description: {
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
		},
		idPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'plot',
				key: 'idPlot'
			}
		},
		idWorkflowSpec: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'workflow_spec',
				key: 'idWorkflowSpec'
			}
		}
	}, {
		tableName: 'workflow',
		timestamp: true
	});
};
