import { AutoIncrement, Column, DataType, Model, Table } from "sequelize-typescript";
import * as Sequelize from 'sequelize-typescript'
import {conn} from "../database/connection";

export interface AssetAddModel{
    id: number;
    name: string;
    description: string;
}

export interface AssetModel extends Sequelize.Model<AssetModel, AssetAddModel>{
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export const Asset = conn.define<AssetModel, AssetAddModel>( 'assets',{
    id: {
        type: Sequelize.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: Sequelize.DataType.STRING(50),
        unique: true,
    },

    description: {
        type: Sequelize.DataType.STRING(250)
    }
})