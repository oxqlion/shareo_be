import { Router } from 'express';
const router = Router();

// Create a new item
router.get('/', async (req, res) => {
    try {
        res.status(201).json({ "msg": "Hello World!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
export default router;
