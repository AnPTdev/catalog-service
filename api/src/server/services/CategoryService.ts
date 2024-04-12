import {category} from "@prisma/client";
import {getPrismaClient} from "../DatabaseHelper";


export const createCategory = async (name: string): Promise<category> => {
    const client = getPrismaClient();
    return await client.category.create({
        data: {
            name: name
        }
    });
}

export const getCategory = async (): Promise<category[]> => {
    const client = getPrismaClient();
    return await client.category.findMany()
}