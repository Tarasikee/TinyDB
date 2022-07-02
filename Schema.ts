import {Table} from "./Table.ts";

export class Schema<T> {
    constructor(
        private table: Table
    ) {
        return this;
    }

    public addColumn(name: keyof T): Schema<T> {
        this.table.columns.push({name});
        return this;
    }

    // public withID() {
    //
    // }

    public async insert(record: T) {
        await this.table.insert(record);
    }
}
