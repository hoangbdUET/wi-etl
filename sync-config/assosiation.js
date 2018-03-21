module.exports = function (m) {
    m.Project.hasMany(m.Well, {
        foreignKey: {
            name: "idProject",
            allowNull: false,
            unique: "name-idProject"
        }, onDelete: 'CASCADE'
    });
    m.Project.hasMany(m.Groups, {
        foreignKey: {
            name: "idProject",
            allowNull: false,
            unique: "name-idProject"
        }, onDelete: 'CASCADE'
    });
    m.Groups.hasMany(m.Well, {
        foreignKey: {
            name: "idGroup",
            allowNull: true
        }
    });

    m.Groups.hasMany(m.Groups, {
        foreignKey: {
            name: "idParent",
            allowNull: true
        }, onDelete: 'CASCADE'
    });

    m.Well.hasMany(m.Dataset, {
        foreignKey: {
            name: "idWell",
            allowNull: false,
            unique: "name-idWell"
        }, onDelete: 'CASCADE', hooks: true
    });
    m.Well.hasMany(m.Plot, {
        foreignKey: { name: "idWell", allowNull: false, unique: "name-idWell" },
        onDelete: 'CASCADE'
    });
    m.Well.hasMany(m.ZoneSet, {
        foreignKey: { name: "idWell", allowNull: false, unique: "name-idWell" },
        onDelete: 'CASCADE'
    });
    m.Well.hasMany(m.CrossPlot, {
        foreignKey: { name: "idWell", allowNull: false, unique: "name-idWell" },
        onDelete: 'CASCADE'
    });
    m.Well.hasMany(m.Histogram, {
        foreignKey: { name: "idWell", allowNull: false, unique: "name-idWell" },
        onDelete: 'CASCADE'
    });
    m.Well.hasMany(m.CombinedBox, {
        foreignKey: { name: "idWell", allowNull: false, unique: "name-idWell" },
        onDelete: 'CASCADE'
    });
    m.Well.hasMany(m.WellHeader, {
        foreignKey: { name: "idWell", allowNull: false },
        onDelete: 'CASCADE'
    });

    m.Dataset.hasMany(m.Curve, {
        foreignKey: {
            name: "idDataset",
            allowNull: false,
            unique: "name-idDataset"
        }, onDelete: 'CASCADE', hooks: true
    });
    m.Plot.hasMany(m.Track, { foreignKey: { name: "idPlot", allowNull: false }, onDelete: 'CASCADE' });
    m.Plot.hasMany(m.DepthAxis, {
        foreignKey: { name: "idPlot", allowNull: false },
        onDelete: 'CASCADE'
    });
    m.Plot.hasMany(m.ImageTrack, { foreignKey: { name: "idPlot", allowNull: false }, onDelete: 'CASCADE' });
    m.ImageTrack.hasMany(m.ImageOfTrack, {
        foreignKey: { name: "idImageTrack", allowNull: false },
        onDelete: 'CASCADE'
    });
    m.Plot.hasMany(m.ObjectTrack, { foreignKey: { name: "idPlot", allowNull: false }, onDelete: 'CASCADE' });
    m.ObjectTrack.hasMany(m.ObjectOfTrack, {
        foreignKey: { name: "idObjectTrack", allowNull: false },
        onDelete: 'CASCADE'
    });
    m.Plot.hasMany(m.ZoneTrack, { foreignKey: { name: "idPlot", allowNull: false }, onDelete: 'CASCADE' });
    m.ZoneTrack.belongsTo(m.ZoneSet, { foreignKey: { name: "idZoneSet", allowNull: true } });//TODO allowNull??
    m.ZoneSet.hasMany(m.Zone, { foreignKey: { name: "idZoneSet", allowNull: false }, onDelete: 'CASCADE' });
    m.Plot.belongsTo(m.Curve, { foreignKey: 'referenceCurve' });

    m.Track.hasMany(m.Line, { foreignKey: { name: "idTrack", allowNull: false }, onDelete: 'CASCADE' });
    m.Track.hasMany(m.Shading, { foreignKey: { name: "idTrack", allowNull: false }, onDelete: 'CASCADE' });
    m.Track.hasMany(m.Image, { foreignKey: { name: "idTrack", allowNull: false }, onDelete: 'CASCADE' });
    m.Track.hasMany(m.Marker, { foreignKey: { name: 'idTrack', allowNull: false }, onDelete: 'CASCADE' });
    m.Track.hasMany(m.Annotation, { foreignKey: { name: 'idTrack', allowNull: false }, onDelete: 'CASCADE' });
    m.Line.belongsTo(m.Curve, { foreignKey: { name: "idCurve", allowNull: false }, onDelete: 'CASCADE' });

    m.FamilyCondition.belongsTo(m.Family, { foreignKey: 'idFamily' });
    m.Family.hasMany(m.FamilySpec, { as: 'family_spec', foreignKey: 'idFamily' });
    m.Curve.belongsTo(m.Family, { as: 'LineProperty', foreignKey: 'idFamily' });

    m.Shading.belongsTo(m.Line, { foreignKey: 'idLeftLine', as: 'leftLine', onDelete: 'CASCADE' });
    m.Shading.belongsTo(m.Line, { foreignKey: 'idRightLine', as: 'rightLine', onDelete: 'CASCADE' });
    m.Shading.belongsTo(m.Curve, { foreignKey: 'idControlCurve' });

    m.CrossPlot.hasMany(m.Polygon, { foreignKey: { name: 'idCrossPlot', allowNull: false }, onDelete: 'CASCADE' });
    m.CrossPlot.hasMany(m.RegressionLine, {
        foreignKey: { name: 'idCrossPlot', allowNull: false },
        onDelete: 'CASCADE'
    });
    m.CrossPlot.hasMany(m.ReferenceCurve, {
        foreignKey: { name: 'idCrossPlot', allowNull: true },
        onDelete: 'CASCADE'
    });
    m.CrossPlot.hasMany(m.Ternary, { foreignKey: { name: 'idCrossPlot', allowNull: false }, onDelete: 'CASCADE' });
    m.CrossPlot.hasMany(m.PointSet, { foreignKey: { name: 'idCrossPlot', allowNull: false }, onDelete: 'CASCADE' });
    m.CrossPlot.hasMany(m.UserDefineLine, {
        foreignKey: {
            name: 'idCrossPlot',
            allowNull: false,
            onDelete: 'CASCADE'
        }
    });

    m.PointSet.belongsTo(m.Curve, { foreignKey: { name: 'idCurveX', allowNull: true } });
    m.PointSet.belongsTo(m.Curve, { foreignKey: { name: 'idCurveY', allowNull: true } });
    m.PointSet.belongsTo(m.Curve, { foreignKey: { name: 'idCurveZ', allowNull: true } });
    m.PointSet.belongsTo(m.Well, { foreignKey: { name: 'idWell', allowNull: false }, onDelete: 'CASCADE' });
    m.PointSet.belongsTo(m.ZoneSet, { foreignKey: { name: 'idZoneSet', allowNull: true } });
    m.PointSet.belongsTo(m.OverlayLine, { foreignKey: { name: 'idOverlayLine', allowNull: true } });


    m.Histogram.belongsTo(m.Curve, { foreignKey: 'idCurve' });
    m.Histogram.belongsTo(m.ZoneSet, { foreignKey: { name: 'idZoneSet', allowNull: true } });
    m.Histogram.hasMany(m.ReferenceCurve, {
        foreignKey: { name: 'idHistogram', allowNull: true },
        onDelete: 'CASCADE'
    });

    m.Polygon.belongsToMany(m.RegressionLine, {
        through: 'Polygon_RegressionLine',
        foreignKey: 'idPolygon'
    });
    m.RegressionLine.belongsToMany(m.Polygon, {
        through: 'Polygon_RegressionLine',
        foreignKey: 'idRegressionLine'
    });
    //combined box
    m.CombinedBox.hasMany(m.CombinedBoxTool, {
        foreignKey: { name: "idCombinedBox", allowNull: true },
        onDelete: 'CASCADE'
    });
    m.CombinedBox.belongsToMany(m.Plot, {
        through: 'combined_box_plot',
        foreignKey: 'idCombinedBox'
    });
    m.CombinedBox.belongsToMany(m.CrossPlot, {
        through: 'combined_box_crossplot',
        foreignKey: 'idCombinedBox'
    });
    m.CombinedBox.belongsToMany(m.Histogram, {
        through: 'combined_box_histogram',
        foreignKey: 'idCombinedBox'
    });
    m.Plot.belongsToMany(m.CombinedBox, {
        through: 'combined_box_plot',
        foreignKey: 'idPlot'
    });
    m.CrossPlot.belongsToMany(m.CombinedBox, {
        through: 'combined_box_crossplot',
        foreignKey: 'idCrossPlot'
    });
    m.Histogram.belongsToMany(m.CombinedBox, {
        through: 'combined_box_histogram',
        foreignKey: 'idHistogram'
    });

    //end combined box
    m.ReferenceCurve.belongsTo(m.Curve, {
        foreignKey: { name: 'idCurve', allowNull: false },
        onDelete: 'CASCADE'
    });

    m.CombinedBox.hasMany(m.SelectionTool, {
        foreignKey: { name: 'idCombinedBox', allowNull: false },
        onDelete: 'CASCADE'
    });
    m.CombinedBoxTool.hasOne(m.SelectionTool, {
        foreignKey: { name: 'idCombinedBoxTool', allowNull: false },
        onDelete: 'CASCADE'
    });

    // m.Project.hasMany(m.WorkflowSpec, {
    //     foreignKey: {name: 'idProject', allowNull: false},
    //     onDelete: 'CASCADE'
    // });
    m.Plot.hasOne(m.Workflow, {
        foreignKey: { name: 'idPlot', allowNull: true }
    });
    m.WorkflowSpec.hasMany(m.Workflow, {
        foreignKey: { name: 'idWorkflowSpec', allowNull: true },
        onDelete: 'CASCADE'
    });
}