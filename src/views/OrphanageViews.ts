import Orphanage from 'src/models/Ophanage'
import ImagesViews from './ImagesViews'

export default {
  render (orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      image: ImagesViews.renderMany(orphanage.images)
    }
  },

  renderMany (orphanage: Orphanage[]) {
    return orphanage.map(orphanage => this.render(orphanage))
  }
}
