import { gql } from '@apollo/client';

export const GET_EVENT_BY_ID = gql`
  query GetEventById($eventId: ID!) {
    getEventById(eventId: $eventId) {
      id
      eventName
      description
      startDate
      endDate
      eventTime
      endTime
      eventLink
      address
      ticketPrice
      numberOfCompanies
      type
      status
      sections {
        id
        name
      }
      owner {
        id
        ownerFullName
        companyName
        companyAddress
        companyPhone
        companyEmail
      }
      agents {
        id
        companyName
        companyPhoto
      }
    }
  }
`;
