import {PrismaClient} from "@prisma/client"

let prisma: PrismaClient;

export const getPrismaClient = (): PrismaClient =>{
    if(!prisma){
        throw new Error(
            "No Prisma client has been setup yet"
        );
    }
    return prisma;
}

export const setupPrismaClient = async ()=>{
    if(!prisma){
        try{
            console.info('Connecting to PostgreSQL - catalog');
            prisma = new PrismaClient({
                datasourceUrl: 'postgresql://ddl:password@localhost:5432/catalog?schema=public'
            });
            console.info('Connected to PostgreSQL')
        }catch (err) {
            console.error("Failed to connect to PostgreSQL", err)
        }
    }

    return prisma;
}