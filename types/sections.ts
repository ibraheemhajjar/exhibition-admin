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

export enum FloorMaterial {
  CONCRETE = 'CONCRETE',
  CERAMIC = 'CERAMIC',
  CARPET = 'CARPET',
  WOOD = 'WOOD',
  EPOXY = 'EPOXY',
  OTHER = 'OTHER',
}

export const FLOOR_MATERIAL_LABELS: Record<FloorMaterial, string> = {
  [FloorMaterial.CONCRETE]: 'خرسانة',
  [FloorMaterial.CERAMIC]: 'سيراميك',
  [FloorMaterial.CARPET]: 'سجاد',
  [FloorMaterial.WOOD]: 'خشب',
  [FloorMaterial.EPOXY]: 'إيبوكسي',
  [FloorMaterial.OTHER]: 'أخرى',
};

export enum SectionType {
  OPEN = 'OPEN',
  EQUIPPED = 'EQUIPPED',
  NOT_EQUIPPED = 'NOT_EQUIPPED',
  CLOSED = 'CLOSED',
  OTHER = 'OTHER',
}

export const SECTION_TYPE_LABELS: Record<SectionType, string> = {
  [SectionType.OPEN]: 'مكشوف',
  [SectionType.EQUIPPED]: 'مجهز',
  [SectionType.NOT_EQUIPPED]: 'غير مجهز',
  [SectionType.CLOSED]: 'مغلق',
  [SectionType.OTHER]: 'غير ذلك',
};

export interface Service {
  id: string;
  name: string;
}

export interface GetAllExtraServiceResponse {
  getAllExtraService: {
    page: number;
    size: number;
    totalPages: number;
    totalElements: number;
    content: Service[];
  };
}

export interface SectionFormData {
  name: string;
  totalAreaSqm: number | null;
  ceilingHeightM: number | null;
  floorMaterial: FloorMaterial | null;
  hasLighting: boolean;
  hasAirConditioning: boolean;
  hasEmergencyExit: boolean;
  hasInternet: boolean;
  hasElectricity: boolean;
  parkingSpots: boolean;
  sectionImage: string | null;
  services: string[];
  sectionType: string | null;
  hasReserveByAdmin: boolean;
  reserveFrom: string | null;
  reserveTo: string | null;
}

export interface GetSectionByIdFullResponse {
  getSectionById: {
    id: string;
    name: string;
    totalAreaSqm: number;
    ceilingHeightM: number;
    floorMaterial: FloorMaterial;
    hasLighting: boolean;
    hasAirConditioning: boolean;
    hasEmergencyExit: boolean;
    hasInternet: boolean;
    hasElectricity: boolean;
    parkingSpots: boolean;
    notes: string | null;
    sectionImage: string | null;
    services: Service[];
    sectionType: SectionType | null;
    hasReserveByAdmin: boolean;
    reserveFrom: string | null;
    reserveTo: string | null;
  };
}

export interface GetSectionByIdVariables {
  sectionId: string;
}

export interface CreateSectionVariables {
  input: {
    name: string;
    totalAreaSqm: number;
    ceilingHeightM: number;
    floorMaterial: FloorMaterial;
    hasLighting: boolean;
    hasAirConditioning: boolean;
    hasEmergencyExit: boolean;
    hasInternet: boolean;
    hasElectricity: boolean;
    parkingSpots: boolean;
    notes?: string;
    sectionImage?: string;
    services?: string[];
    sectionType?: SectionType | null;
    hasReserveByAdmin: boolean;
    reserveFrom?: string | null;
    reserveTo?: string | null;
  };
}

export interface UpdateSectionVariables {
  input: {
    id: string;
    name?: string;
    totalAreaSqm?: number;
    ceilingHeightM?: number;
    floorMaterial?: FloorMaterial;
    hasLighting?: boolean;
    hasAirConditioning?: boolean;
    hasEmergencyExit?: boolean;
    hasInternet?: boolean;
    hasElectricity?: boolean;
    parkingSpots?: boolean;
    notes?: string;
    sectionImage?: string;
    newServicesId?: string[];
    sectionType?: SectionType | null;
    hasReserveByAdmin?: boolean;
    reserveFrom?: string | null;
    reserveTo?: string | null;
  };
}

export interface DeleteSectionVariables {
  sectionId: string;
}

export interface GetSectionReserveByIdResponse {
  getSectionReserveBySectionId: {
    id: string;
    eventName: string;
  }[];
}

export interface GetSectionReserveByIdVariables {
  sectionId: string;
}

export interface GetAllExtraServiceVariables {
  page?: number;
  size?: number;
}
