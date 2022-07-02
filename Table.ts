import {FileUtils} from "./utils/FileUtils.ts";


interface Column {
    name: string | number | symbol;
}

export class Table {
    constructor(
        private readonly name: string,
        private _columns: Array<Column> = []
    ) {
        this.name = name;
    }

    get columns(): Array<Column> {
        return this._columns;
    }

    set columns(value: Array<Column>) {
        this._columns = value;
    }

    public async init(): Promise<Table | undefined> {
        try {
            await FileUtils.createOrCheckDir('./database');
            await FileUtils.writeJson(`./database/db.json`, {[this.name]: []});
            return this;
        } catch (e) {
            console.error(e.message);
        }
    }

    public async insert(record: any) {
        try {
            const db = await FileUtils.readJson('./database/db.json');
            console.log(db);
            // db[this.name].push(record);
            // await FileUtils.writeJson('./database/db.json', db);
            // return this;
        } catch (e) {
            console.error(e.message);
        }
    }
}
