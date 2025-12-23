import { gql } from '@apollo/client';

export const GET_EVENT_BY_ID = gql`
  query GetEventById($eventId: ID!) {
    getEventById(eventId: $eventId) {
      id
      eventName
      description
      address
      startDate
      endDate
      eventTime
      endTime
      type
      exhibitionType
      eventLink
      eventImage
      expectedNumberOfAttendees
      expectedNumberOfCompanyAttendees
      status
      category {
        id
        nameAr
        nameEn
        description
      }
      owner {
        id
        companyName
        ownerFullName
        companyPhone
        companyEmail
        companyAddress
      }
      agents {
        id
        companyName
        companyPhoto
      }
      sections {
        id
        name
      }
      services {
        id
        name
        category
      }
    }
  }
`;
