import { IMovieShort } from "../movieShort.interface"

export interface IPremiereResp {
    total: number
    items: Omit<IMovieShort, "ratingKinopoisk" |
        "ratingImbd" |
        "type" |
        "nameOriginal">[]
}