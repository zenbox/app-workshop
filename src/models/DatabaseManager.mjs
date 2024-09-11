import sqlite3 from "sqlite3";
import { open } from "sqlite";

class DatabaseManager {
    constructor() {
        this.db = null;
    }

    async initDb() {
        this.db = await open({
            filename: "./src/models/database.db",
            driver: sqlite3.Database,
        });
    }

    async createTable(tableName, columns) {
        const columnsDefinition = columns
            .map((col) => `${col.name} ${col.type}`)
            .join(", ");
        const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${columnsDefinition})`;
        await this.db.run(query);
    }

    async insertData(tableName, data) {
        const columns = Object.keys(data).join(", ");
        const placeholders = Object.keys(data)
            .map(() => "?")
            .join(", ");
        const values = Object.values(data);
        const query = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;
        await this.db.run(query, values);
    }

    async fetchData(tableName, conditions = {}) {
        const conditionKeys = Object.keys(conditions);
        const conditionString =
            conditionKeys.length > 0
                ? "WHERE " +
                  conditionKeys.map((key) => `${key} = ?`).join(" AND ")
                : "";
        const values = Object.values(conditions);
        const query = `SELECT * FROM ${tableName} ${conditionString}`;
        return await this.db.all(query, values);
    }

    async deleteData(tableName, conditions) {
        const conditionKeys = Object.keys(conditions);
        const conditionString =
            "WHERE " + conditionKeys.map((key) => `${key} = ?`).join(" AND ");
        const values = Object.values(conditions);
        const query = `DELETE FROM ${tableName} ${conditionString}`;
        await this.db.run(query, values);
    }

    listAllRows(tableName) {
        return this.db.all(`SELECT * FROM ${tableName}`);
    }
    


    async closeDb() {
        await this.db.close();
    }
}

export default DatabaseManager;
