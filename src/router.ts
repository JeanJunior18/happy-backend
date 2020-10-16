import { Router } from 'express'
import multer from 'multer'

import OrphanageControler from './controllers/OrphanagesController'
import uploadConfig from './config/upload'

const router = Router()
const upload = multer(uploadConfig)

router.get('/orphanage', OrphanageControler.index)
router.get('/orphanage/:id', OrphanageControler.show)
router.post('/orphanage', upload.array('images'), OrphanageControler.store)

export default router
