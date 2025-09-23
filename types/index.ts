export interface IImage {
  url: string;
  altText?: string;
}

export interface ISeo {
  ogImage: IImage;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  canonical: string;
  structuredDataMarkup: string;
}
