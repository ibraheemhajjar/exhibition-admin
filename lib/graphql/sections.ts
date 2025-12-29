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

export const GET_SECTION_BY_ID_FULL = gql`
  query GetSectionByIdFull($sectionId: ID!) {
    getSectionById(sectionId: $sectionId) {
      id
      name
      totalAreaSqm
      ceilingHeightM
      floorMaterial
      hasLighting
      hasAirConditioning
      hasInternet
      hasEmergencyExit
      hasElectricity
      parkingSpots
      notes
      sectionImage
      sectionType
      hasReserveByAdmin
      reserveFrom
      reserveTo
      services {
        id
        name
      }
    }
  }
`;

export const GET_ALL_EXTRA_SERVICE = gql`
  query GetAllExtraService($page: Int, $size: Int) {
    getAllExtraService(page: $page, size: $size) {
      page
      size
      totalPages
      totalElements
      content {
        ... on ExtraService {
          id
          name
        }
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

export const GET_SECTION_RESERVE_BY_SECTION_ID = gql`
  query GetSectionReserveBySectionId($sectionId: ID!) {
    getSectionReserveBySectionId(sectionId: $sectionId) {
      id
      eventName
    }
  }
`;
