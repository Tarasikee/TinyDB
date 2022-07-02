import { AbstractUtil } from "./AbstractUtil.ts";
import { ensureDir } from "https://deno.land/std@0.78.0/fs/mod.ts";

export class FileUtils extends AbstractUtil {
    static async writeJson(path: string, data: Record<string, unknown> | Array<never>): Promise<string> {
        try {
            await Deno.writeTextFile(path, JSON.stringify(data));
            return "Written to " + path;
        } catch (e) {
            return e.message;
        }
    }

    static async createOrCheckDir(path: string): Promise<string> {
        try {
            await ensureDir(path);
            return "Created directory " + path;
        } catch (e) {
            return e.message;
        }
    }

    static async readJson(path: string): Promise<Record<string, unknown> | Array<never>> {
        try {
            const data = await Deno.readTextFile(path);
            return JSON.parse(data);
        } catch (e) {
            return e.message;
        }
    }
}
