import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient;

export const setupPrismaClient = async () =>{
    if(!prisma){
        try{
            console.info('Connecting to PostgreSQL - catalog');
            prisma = new PrismaClient({
                datasourceUrl: 'postgresql://ddl:password@localhost:5432/catalog?schema=public'
            });
            await prisma.$connect()
            console.info('Connected to PostgreSQL')
        }catch (err) {
            console.error("Failed to connect to PostgreSQL", err)
        }
    }

    return prisma
}

export const getPrismaClient = (): PrismaClient =>{
    if(!prisma){
        throw new Error(
            "No Prisma client has been setup yet, might want to run setupPrismaClient first"
        );
    }
    return prisma;
}