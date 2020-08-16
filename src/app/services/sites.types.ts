export interface AWSListing {
  prefixes: AWSSite[];
}

export interface AWSSite {
  prefix: string;
}

export interface AWSSiteListingResponse {
  data: AWSListing;
}

export interface AWSSiteListing {
  siteFolders: AWSSite[];
}

export interface FixedAWSSite {
  prefix: string;
  displayName: string;
}
