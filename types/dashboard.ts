export enum TimeFilter {
  TODAY = 'TODAY',
  THIS_WEEK = 'THIS_WEEK',
  THIS_MONTH = 'THIS_MONTH',
  DURATION = 'DURATION',
}

export interface AdminStaticsResponse {
  activeCount: number;
  puplishedCount: number;
  newRequest: number;
  newLicense: number;
  availableSection: number;
  unAvailableSection: number;
}

export interface GetAdminHomeStaticsVariables {
  timeFilter: TimeFilter;
  fromDate?: string; // YYYY-MM-DD format
  toDate?: string; // YYYY-MM-DD format
}
