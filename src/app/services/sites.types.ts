export interface AWSListing {
  CommonPrefixes: CommonPrefix[];
}

export interface CommonPrefix {
  Prefix: string;
}

export interface AWSSiteListing {
  Contents: Content[];
  CommonPrefixes: CommonPrefix[];
}

export interface Content {
  Key: string;
  LastModified: string;
  ETag: string;
  Size: number;
  StorageClass: string;
}
