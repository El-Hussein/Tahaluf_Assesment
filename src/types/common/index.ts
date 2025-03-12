export type RequestOptions =
  | (RequestInit & {
    refetch?: boolean;
    params?: { [key: string]: any };
    lazy?: boolean;
    public?: boolean;
    URL?: string;
  })
  | undefined;


export type Localizations = {
  header: string;
  description: string;
  locale: string;
  bookTitle?: string;
  squareName?: string;
  sectionName?: string;
  name?: string;
}[];

export type ServerImage = {
  mainProvider: string;
  publicId: string;
  url: string;
  assetId: string;
  folder: string;
};
