import {Client} from "pg";

export class DatabaseWrapper {
    private static client: Client;

    public static async connect() {
        const {Client} = require('pg');
        this.client = new Client();

        this.client.host = "localhost";
        this.client.database = "server";
        this.client.user = "root";
        this.client.password = "";
        this.client.ssl = true;

        await this.client.connect();
    }

    public static getClient(): Client {
        return this.client;
    }
}