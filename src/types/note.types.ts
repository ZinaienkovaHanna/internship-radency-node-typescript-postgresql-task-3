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

export interface ResponseType {
    data: NoteType[];
    status: any;
}

export interface RequestType {
    userId: number;
    queryParams: Record<string, any>;
    body: NoteType;
}
