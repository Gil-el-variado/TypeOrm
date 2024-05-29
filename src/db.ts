import { DataSource } from "typeorm";
import {User} from "../src/entity/user";

/*
export const AppDataSource = new DataSource ({
    type: 'postgres',
    host: 'localhost',
    username: 'administrador',
    password: 'administrador',
    port: 5432,
    database: 'db_sice',
    entities:[User],
    logging: true,
    synchronize: true,

})*/



export const AppDataSource = new DataSource ({
    type: 'postgres',
    host: 'viaduct.proxy.rlwy.net',
    username: 'postgres',
    password: 'XxDQewsOQyfTKBmoaIcwmNrTVhXAEzpA',
    port: 11690,
    database: 'railway',
    entities:[User],
    logging: true,
    synchronize: true,

})