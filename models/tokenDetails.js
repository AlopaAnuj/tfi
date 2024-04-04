module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "tokenDetails",
        {
            id: {
                type: DataTypes.INTEGER(),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                type: DataTypes.INTEGER(),
                allowNull: false,
                unique: true,
                references: {
                    model: "stateLogin",
                    key: "id",
                },
            },
            refreshToken: {
                type: DataTypes.STRING(),
                allowNull: false,
                primaryKey: true,
            },
            createddatetime: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            },
            modifieddatetime: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            },
        },
        {
            tableName: "tokenDetails",
            timestamps: false,
        }
    );
};
