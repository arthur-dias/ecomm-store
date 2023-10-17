export interface Banner {
  id: string
  name: string
  imageUrl: string
}

export interface Category {
  id: string
  name: string
  banner: Banner
}
