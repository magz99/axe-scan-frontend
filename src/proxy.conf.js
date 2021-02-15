const PROXY_CONFIG = {
  "/api/scannedSiteList": {
    "target": process.env.SCANNED_SITE_LIST_API,
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "pathRewrite": {
      "^/api/scannedSiteList": ""
    }
  },
  "/api/singleSiteAllScans": {
    "target": process.env.SINGLE_SITE_ALL_SCANS_API,
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "pathRewrite": {
      "^/api/singleSiteAllScans": ""
    }
  },
  "/api/scannedSingleSiteMappingS3": {
    "target": process.env.SCANNED_SINGLE_SITE_MAPPING_API,
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "pathRewrite": {
      "^/api/scannedSingleSiteMappingS3": ""
    }
  },
  "/api/singleSiteSingleScan": {
    "target": process.env.SINGLE_SITE_SINGLE_SCAN_API,
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "pathRewrite": {
      "^/api/singleSiteSingleScan": ""
    }
  }
}

module.exports = PROXY_CONFIG;
