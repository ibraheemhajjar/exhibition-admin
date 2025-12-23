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
      totalAreaSqm
      ceilingHeightM
      floorMaterial
      hasLighting
      hasAirConditioning
      hasEmergencyExit
      hasInternet
      hasElectricity
      parkingSpots
      isActive
      sectionType
      hasReserveByAdmin
      reserveFrom
      reserveTo
      createDate
      updateDate
    }
  }
`;

export const GET_SECTION_BY_ID = gql`
  query GetSectionById($sectionId: ID!) {
    getSectionById(sectionId: $sectionId) {
      id
      name
      totalAreaSqm
      ceilingHeightM
      floorMaterial
      hasLighting
      hasAirConditioning
      hasEmergencyExit
      hasInternet
      hasElectricity
      parkingSpots
      notes
      sectionType
      isActive
      sectionImage
      hasReserveByAdmin
      reserveFrom
      reserveTo
      createDate
      updateDate
      services {
        id
        code
        name
        description
        category
        unitType
        defaultPrice
        isMandatory
        isActive
      }
    }
  }
`;

export const GET_SECTION_RESERVES = gql`
  query GetSectionReserves(
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
      status
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
