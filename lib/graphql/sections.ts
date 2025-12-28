import { gql } from '@apollo/client';

export const GET_ALL_SECTIONS = gql`
  query GetAllSections(
    $timeFilter: TimeFilter!
    $searchLabel: String
    $fromDate: Date
    $toDate: Date
  ) {
    getAllSection(
      timeFilter: $timeFilter
      searchLabel: $searchLabel
      fromDate: $fromDate
      toDate: $toDate
    ) {
      id
      name
      hasReserveByAdmin
    }
  }
`;

export const GET_SECTION_BY_ID = gql`
  query GetSectionById($sectionId: ID!) {
    getSectionById(sectionId: $sectionId) {
      id
      name
    }
  }
`;

export const GET_SECTION_RESERVATIONS = gql`
  query GetSectionReservations(
    $sectionId: ID!
    $eventName: String
    $from: Date
    $to: Date
  ) {
    getSectionReserveBySectionId(
      sectionId: $sectionId
      eventName: $eventName
      from: $from
      to: $to
    ) {
      id
      eventName
      description
      type
      startDate
      endDate
      owner {
        id
        companyName
        ownerFullName
        companyPhone
      }
    }
  }
`;

export const CREATE_SECTION = gql`
  mutation CreateSection($input: SectionCreateInput!) {
    createSection(input: $input) {
      id
      name
    }
  }
`;

export const UPDATE_SECTION = gql`
  mutation UpdateSection($input: SectionUpdateInput!) {
    updateSection(input: $input) {
      id
      name
    }
  }
`;

export const DELETE_SECTION = gql`
  mutation DeleteSection($sectionId: ID!) {
    deleteSection(sectionId: $sectionId)
  }
`;
