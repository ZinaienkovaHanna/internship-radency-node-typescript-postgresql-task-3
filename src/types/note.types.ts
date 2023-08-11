export interface NoteType {
    name: string;
    date: Date;
    category: string;
    content: string;
    archived: boolean;
}

export interface StatsType {
    [key: string]: { active: number; archived: number };
}

export type Request = {
    body: NoteType;
    params: { [key: string]: string };
};

export type Response = {
    status(code: number): Response;
    json(data: any): void;
};

export interface CustomError extends Error {
    message: string;
}
