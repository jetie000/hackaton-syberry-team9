export interface IImagesResp {
    total: number
    totalPages: number
    items: {
        imageUrl: string
        previewUrl: string
    }[]
}