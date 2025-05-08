// routes/loginDetails-routes.js

import express from 'express';
import {
    createLogin,
    getAllLogins,
    getLoginById,
    updateLogin,
    deleteLogin,
    loginUser,
} from '../controller/loginDetailsController.js';

const router = express.Router();

// login
router.post('/login', loginUser);

// Create a new login record
router.post('/create', createLogin);

// Get all login records
router.get('/', getAllLogins);

// Get a single login record by ID
router.get('/getById/:id', getLoginById);

// Update a login record by ID
router.put('/updateDetails/:id', updateLogin);

// Delete a login record by ID
router.delete('/removeDetails/:id', deleteLogin);

export default router;
