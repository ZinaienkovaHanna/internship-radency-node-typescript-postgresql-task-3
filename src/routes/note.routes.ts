import express from 'express';
import {
    addNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote,
    getNotesStats,
} from '../services/note.service.js';

const router = express.Router();

router.get('/notes', getNotes);

router.get('/notes/stats', getNotesStats);

router.get('/notes/:id', getNote);

router.post('/notes', addNote);

router.patch('/notes/:id', updateNote);

router.delete('/notes/:id', deleteNote);

export default router;
