import { TimeFilter } from './dashboard';

export interface Section {
  id: string;
  name: string;
  hasReserveByAdmin: boolean;
}

export interface Event {
  id: string;
  eventName: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  owner: {
    id: string;
    companyName: string;
    ownerFullName: string | null;
    companyPhone: string;
  };
}

// Get all sections
export interface GetAllSectionsVariables {
  timeFilter: TimeFilter;
  searchLabel?: string;
  fromDate?: string;
  toDate?: string;
}

export interface GetAllSectionsResponse {
  getAllSection: Section[];
}

// Get section by ID
export interface GetSectionByIdVariables {
  sectionId: string;
}

export interface GetSectionByIdResponse {
  getSectionById: {
    id: string;
    name: string;
  };
}

// Get section reservations
export interface GetSectionReservationsVariables {
  sectionId: string;
  eventName?: string;
  from?: string;
  to?: string;
}

export interface GetSectionReservationsResponse {
  getSectionReserveBySectionId: Event[];
}
