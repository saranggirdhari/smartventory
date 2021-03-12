import express, { Router } from 'express';
const router = express.Router();
import { getAssets, getAssetsByLink } from '../controllers/assetController.js';

router.route('/').get(getAssets);
router.route('/:dlink').get(getAssetsByLink);

export default router;
