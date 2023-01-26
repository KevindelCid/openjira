import { EntryStatus } from "../interfaces/entry";

interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {

    description: string;
    status:EntryStatus;
    createdAt: number;

}

export const seedData:SeedData = {

    entries:[
        {
            description: "construir open jira",
            status: "pending",
            createdAt: Date.now()
        },
        {
            description: "Terminar de familiarizarme con nodejs",
            status: "in-progress",
            createdAt: Date.now()
        },
        {
            description: "aprender Next.js",
            status: "in-progress",
            createdAt: Date.now()
        },
        {
            description: "Aprender React native",
            status: "pending",
            createdAt: Date.now()
        },
        {
            description: "construir Usuaal.com",
            status: "in-progress",
            createdAt: Date.now()
        },
        {
            description: "aprender React js",
            status: "finished",
            createdAt: Date.now()
        },
    ]
}