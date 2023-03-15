export type DataStateType = {
    isLoading: boolean;
    isSuccessful: boolean;
    data: any;
    error: any;
};

export type SearchedBooksType = {
    title: string;
    author_name: string[];
    coverImage: string;
    key: string;
    cover_i: any;
    seed: string[];
    id?: string;
  };