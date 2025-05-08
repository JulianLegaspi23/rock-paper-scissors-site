// controller/loginDetailsController.js

import LoginTable from '../models/LoginTable.js';

// SEARCH USER

export const loginUser = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const login = await LoginTable.findOne({
            where: { userName, password }
        });

        if (!login) {
            return res.status(404).json({ error: 'User not found or incorrect password' });
        }
        return res.json(login);
    } catch (error) {
        console.error('Error fetching login records:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


// CREATE
export const createLogin = async (req, res) => {
    try {
        const { userName, password, tempPassword } = req.body;
        const payload = await LoginTable.create({ userName, password, tempPassword });
        return res.status(201).json(payload);
    } catch (error) {
        console.error('Error creating login record:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// READ ALL
export const getAllLogins = async (req, res) => {
    try {
        const logins = await LoginTable.findAll();
        return res.json(logins);
    } catch (error) {
        console.error('Error fetching login records:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// READ ONE
export const getLoginById = async (req, res) => {
    try {
        const { id } = req.params;
        const login = await LoginTable.findByPk(id);
        if (!login) {
        return res.status(404).json({ error: 'Record not found' });
        }
        return res.json(login);
    } catch (error) {
        console.error('Error fetching login record:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// UPDATE
export const updateLogin = async (req, res) => {
    try {
        console.log('req.params :>> ', req.params);
        console.log('req.body :>> ', req.body);
        const { id } = req.params;
        const [updatedCount] = await LoginTable.update(req.body, {
        where: { _id: id }
        });
        console.log('updatedCount :>> ', updatedCount);
        if (updatedCount === 0) {
        return res.status(404).json({ error: 'Record not found or no changes' });
        }
        const updatedLogin = await LoginTable.findByPk(id);
        return res.json(updatedLogin);
    } catch (error) {
        console.error('Error updating login record:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// DELETE
export const deleteLogin = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCount = await LoginTable.destroy({
            where: { _id: id }
        });
        if (deletedCount === 0) {
        return res.status(404).json({ error: 'Record not found' });
        }
        return res.status(204).send();
    } catch (error) {
        console.error('Error deleting login record:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
