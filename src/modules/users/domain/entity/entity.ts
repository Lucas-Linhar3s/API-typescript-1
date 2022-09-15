import { DataTypes, Sequelize } from "sequelize";
import { db } from "../../../../shared/db/db";

export const Users = db.define("usu", {
        id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
        },
        fisrt_name: {
                type: DataTypes.STRING,
                allowNull: false,
        },
        last_name: {
                type: DataTypes.STRING,
                allowNull: false,
        },
        phone:{
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
        },
        email:{
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
        },
        password:{
                type: DataTypes.STRING,
                allowNull: false,
        }
});