export interface EventOwner {
  id: string;
  ownerFullName: string | null;
  companyName: string | null;
  companyAddress: string | null;
  companyPhone: string | null;
  companyEmail: string | null;
}

export interface EventAgent {
  id: string;
  companyName: string;
  companyPhoto: string | null;
}

export interface EventSection {
  id: string;
  name: string;
}

export interface Event {
  id: string;
  eventName: string;
  description: string | null;
  startDate: string;
  endDate: string;
  eventTime: string | null;
  endTime: string | null;
  eventLink: string | null;
  address: string | null;
  ticketPrice: number | null;
  numberOfCompanies: number | null;
  type: string;
  status: string;
  sections: EventSection[];
  owner: EventOwner;
  agents: EventAgent[];
}

export interface GetEventByIdVariables {
  eventId: string;
}

export interface GetEventByIdResponse {
  getEventById: Event;
}
