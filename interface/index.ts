export interface Note {
    id: string | null,
    title: string | null,
    phone: string | null,
    description: string | null,
    date: Date | null | string | number
}

export interface NoteData {
    title: string ,
    phone: string ,
    description: string ,
    date: string
}
