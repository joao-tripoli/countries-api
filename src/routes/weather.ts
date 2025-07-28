import { Router } from 'express';
import { getCurrentWeather } from '../handlers/weather';

const router = Router();

router.get('/current/:location', getCurrentWeather);

export default router;
