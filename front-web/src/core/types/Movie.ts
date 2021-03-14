export type MovieResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genre: Genre;
    reviews: Reviews[];
}

export type Genre = {
    id: number;
    name: string;
}

export type Reviews ={
    id: number;
    text: string;
}