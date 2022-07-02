import {TinyDB} from "./TinyDB.ts";
import {Schema} from "./Schema.ts";

interface User {
    name: string;
    age: number;
}

const db = new TinyDB('MyFirstBase');

const usersTable = await db.createTable('users');
const usersSchema = new Schema<User>(usersTable);

const users = usersSchema
    .addColumn('name')
    .addColumn('age')


await users
    .insert({ name: 'John Doe', age: 30 })

