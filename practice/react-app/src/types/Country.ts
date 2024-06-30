export interface Country {
  name: {
    common: string
    official: string
  },
  flags: {
    png: string,
    svg: string
  }
  population: number
}
