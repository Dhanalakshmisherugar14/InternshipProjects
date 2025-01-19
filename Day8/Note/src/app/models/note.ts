export interface Note {
    id: number;
    title: string;
    content: string;
    createdAt: Date;

    get createdAtString(): string;
    set createdAtString(value: string);
  }
  