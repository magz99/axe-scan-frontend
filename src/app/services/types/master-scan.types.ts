// SITE SCAN RESULTS RESPONSE
export interface MasterScan {
  scannedPages: Scan[];
  topViolations: {
    critical: number;
    serious: number;
    moderate: number;
    minor: number;
  };
  totalViolations: number;
  urlScanned: string;
}

export interface Scan {
  filename: string;
  url: string;
  errorCount?: number;
}
