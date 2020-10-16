import Images from 'src/models/Images'

export default {
  render (image: Images) {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`
    }
  },

  renderMany (images: Images[]) {
    return images.map(orphanage => this.render(orphanage))
  }
}
