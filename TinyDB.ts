import {Table} from "./Table.ts"

interface TinyDBOptions {
    readonly _fileIndent?: boolean;
}

export class TinyDB {
    constructor(
        private name: string,
        // private options: TinyDBOptions
    ) {
        this.name = name;
        // this.options = options;
    }

    public async createTable(name: string): Promise<Table> {
        const table = new Table(name);
        await table.init();
        return table;
    }
}
