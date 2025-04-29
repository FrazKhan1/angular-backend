import express from 'express';
import { addForm, getAllForms, getSingleForm } from '../controllers/formController.js';

const router = express.Router();

router.post("/create" , addForm)
router.get("/get", getAllForms)
router.get("/get-by-id/:id", getSingleForm)

export default router