import { calculateNotesStats } from '../helpers/note.helpers.js';
import { QueryResult } from 'pg';
import pool from '../db.js';
import { NoteType, StatsType } from '../types/note.types.js';

export async function addNoteRepo(noteData: NoteType): Promise<NoteType> {
    const query = `
        INSERT INTO note (name, date, category, content, archived)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;

    const { name, category, content } = noteData;
    const currentDate = new Date();
    const defaultArchived = false;

    const values = [name, currentDate, category, content, defaultArchived];

    try {
        const result: QueryResult = await pool.query(query, values);
        return result.rows[0];
    } catch (err) {
        throw new Error('Error adding record');
    }
}

export async function getNotesRepo(): Promise<NoteType[]> {
    const query = 'SELECT * FROM note';
    try {
        const result: QueryResult = await pool.query(query);
        return result.rows;
    } catch (err) {
        throw new Error('Error getting data');
    }
}

export async function getNoteRepo(id: number): Promise<NoteType | null> {
    const query = 'SELECT * FROM note WHERE id = $1';
    const values = [id];

    try {
        const result: QueryResult = await pool.query(query, values);
        return result.rows[0] || null;
    } catch (err) {
        throw new Error('Error getting note');
    }
}

export async function updateNoteRepo(
    id: number,
    updatedNote: NoteType
): Promise<NoteType | null> {
    const { name, category, content } = updatedNote;
    const query = `
        UPDATE note
        SET name = $1, category = $2, content = $3
        WHERE id = $4
        RETURNING *;
    `;

    const values = [name, category, content, id];

    try {
        const result: QueryResult = await pool.query(query, values);
        return result.rows[0] || null;
    } catch (err) {
        throw new Error('Error updating note');
    }
}

export async function deleteNoteRepo(id: number): Promise<NoteType | null> {
    const query = `
    DELETE FROM note
    WHERE id = $1
    RETURNING *;
`;

    const values = [id];

    try {
        const result: QueryResult = await pool.query(query, values);
        return result.rows[0] || null;
    } catch (err) {
        throw new Error('Error deleting note');
    }
}

export async function getNotesStatsRepo(): Promise<StatsType> {
    const query = 'SELECT * FROM note';
    try {
        const result: QueryResult = await pool.query(query);
        const stats: StatsType = calculateNotesStats(result.rows);

        return stats;
    } catch (err) {
        throw new Error('Error getting notes stats');
    }
}
