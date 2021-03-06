import express from 'express';
import userRoutes from './userRoutes';

// すべてのルーティングをここにまとめます。
const router = express.Router();

router.use('/users', userRoutes);

export default router;
