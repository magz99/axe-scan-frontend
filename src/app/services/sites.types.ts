export interface AWSListing {
  prefixes: AWSSite[];
}

export interface AWSSite {
  prefix: string;
}

export interface AWSSiteListingResponse {
  data: AWSListing;
}

export interface Content {
  Key: string;
  LastModified: string;
  ETag: string;
  Size: number;
  StorageClass: string;
}
