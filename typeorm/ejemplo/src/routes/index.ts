import {Router} from 'express';
import autor from './autor'
const routes=Router();
routes.use('/autor',autor)
export default routes;