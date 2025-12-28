import { gql } from '@apollo/client';

export const GET_ADMIN_HOME_STATICS = gql`
  query GetAdminHomeStatics(
    $timeFilter: TimeFilter!
    $fromDate: Date
    $toDate: Date
  ) {
    getAdminHomeStatics(
      timeFilter: $timeFilter
      fromDate: $fromDate
      toDate: $toDate
    ) {
      activeCount
      puplishedCount
      newRequest
      newLicense
      availableSection
      unAvailableSection
    }
  }
`;
