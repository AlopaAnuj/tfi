/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
    let eventDetails = sequelize.define(
        "eventDetails",
        {
            id: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
                primaryKey: true,
            },
            eventName: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            eventType: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            eventDate: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            venue: {
                type: DataTypes.INTEGER(100),
                allowNull: false,
            },
            organizer: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            contactNumber: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            createddatetime: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            modifieddatetime: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            tableName: "eventDetails",
            timestamps: false,
        }
    );
    return eventDetails;
};
