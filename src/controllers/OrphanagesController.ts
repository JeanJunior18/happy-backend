import { NextFunction, Request, Response } from 'express'
import OrphanageViews from 'src/views/OrphanageViews'
import { getRepository } from 'typeorm'
import Orphanage from '../models/Ophanage'
import { orphanageCreate } from '../schemas/orphanate'

export = {
  async index (req: Request, res: Response, next: NextFunction) {
    try {
      const orphanagesRepository = getRepository(Orphanage)

      const orphanages = await orphanagesRepository.find({
        relations: ['images']
      })

      return res.json(OrphanageViews.renderMany(orphanages))
    } catch (error) {
      next(error)
    }
  },
  async show (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      const orphanagesRepository = getRepository(Orphanage)

      const orphanage = await orphanagesRepository.findOne(id, {
        relations: ['images']
      })

      return res.json(OrphanageViews.render(orphanage))
    } catch (error) {
      next(error)
    }
  },
  async store (req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body

      const requestImages = req.files as Express.Multer.File[]
      data.images = requestImages.map(image => {
        return { path: image.filename }
      })

      const orphanagesRepository = getRepository(Orphanage)

      await orphanageCreate.validate(data, {
        abortEarly: false
      })

      const orphanage = orphanagesRepository.create()

      await orphanagesRepository.save(orphanage)

      return res.status(201).json({ message: 'ok' })
    } catch (error) {
      next(error)
    }
  },
  async update (req: Request, res: Response, next: NextFunction) {},
  async delete (req: Request, res: Response, next: NextFunction) {}
}
