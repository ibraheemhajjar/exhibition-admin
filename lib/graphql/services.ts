import { gql } from '@apollo/client';

export const GET_ALL_EXTRA_SERVICES = gql`
  query GetAllExtraServices($page: Int = 0, $size: Int = 100) {
    getAllExtraService(page: $page, size: $size) {
      page
      size
      totalPages
      totalElements
      content {
        ... on ExtraService {
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
  }
`;
