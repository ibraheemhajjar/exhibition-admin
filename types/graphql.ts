/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigDecimal: { input: any; output: any };
  Date: { input: any; output: any };
  JSON: { input: any; output: any };
  LocalDateTime: { input: any; output: any };
  LocalTime: { input: any; output: any };
};

export type AdminStaticsResponse = {
  __typename?: 'AdminStaticsResponse';
  activeCount?: Maybe<Scalars['Int']['output']>;
  availableSection?: Maybe<Scalars['Int']['output']>;
  newLicense?: Maybe<Scalars['Int']['output']>;
  newRequest?: Maybe<Scalars['Int']['output']>;
  puplishedCount?: Maybe<Scalars['Int']['output']>;
  unAvailableSection?: Maybe<Scalars['Int']['output']>;
};

export enum AttendeeType {
  Company = 'COMPANY',
  Private = 'PRIVATE',
  Vib = 'VIB',
}

export type Company = Node & {
  __typename?: 'Company';
  commercialRegistryFile?: Maybe<Scalars['String']['output']>;
  companyAddress?: Maybe<Scalars['String']['output']>;
  companyDescription?: Maybe<Scalars['String']['output']>;
  companyEmail?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companyPhone?: Maybe<Scalars['String']['output']>;
  companySectors?: Maybe<Array<Maybe<ProfessionalSector>>>;
  companyType?: Maybe<OrganizationType>;
  cover?: Maybe<Scalars['String']['output']>;
  establishmentYear?: Maybe<Scalars['Int']['output']>;
  firstPass?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  ownerFullName?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Province>;
  webUrl?: Maybe<Scalars['String']['output']>;
};

export type CompanyInput = {
  commercialRegistryFile?: InputMaybe<Scalars['String']['input']>;
  companyAddress: Scalars['String']['input'];
  companyDescription: Scalars['String']['input'];
  companyEmail: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  companyPhone: Scalars['String']['input'];
  companySectors: Array<ProfessionalSector>;
  companyType: OrganizationType;
  cover?: InputMaybe<Scalars['String']['input']>;
  establishmentYear?: InputMaybe<Scalars['Int']['input']>;
  eventCode?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  ownerFullName: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  province: Province;
  webUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyUpdateInput = {
  commercialRegistryFile?: InputMaybe<Scalars['String']['input']>;
  companyAddress?: InputMaybe<Scalars['String']['input']>;
  companyDescription?: InputMaybe<Scalars['String']['input']>;
  companyEmail?: InputMaybe<Scalars['String']['input']>;
  /**  معرّف الشركة المراد تحديثها */
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyPhone?: InputMaybe<Scalars['String']['input']>;
  companySectors?: InputMaybe<Array<InputMaybe<ProfessionalSector>>>;
  companyType?: InputMaybe<OrganizationType>;
  cover?: InputMaybe<Scalars['String']['input']>;
  deleteCommercialRegistryFile?: InputMaybe<Scalars['Boolean']['input']>;
  deleteCover?: InputMaybe<Scalars['Boolean']['input']>;
  deleteLogo?: InputMaybe<Scalars['Boolean']['input']>;
  establishmentYear?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  logo?: InputMaybe<Scalars['String']['input']>;
  ownerFullName?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Province>;
  webUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUs = Node & {
  __typename?: 'ContactUs';
  createDate?: Maybe<Scalars['LocalDateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  problem?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  requestState?: Maybe<Scalars['String']['output']>;
  updateDate?: Maybe<Scalars['LocalDateTime']['output']>;
};

export type ContactUsCreateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  problem: Scalars['String']['input'];
  reason: Scalars['String']['input'];
};

export type ContactUsInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  problem: Scalars['String']['input'];
  reason: Scalars['String']['input'];
};

export enum ContractType {
  Other = 'OTHER',
  Permanent = 'PERMANENT',
  Seasonal = 'SEASONAL',
}

export type Employee = Node & {
  __typename?: 'Employee';
  address?: Maybe<Scalars['String']['output']>;
  contractPhoto?: Maybe<Scalars['String']['output']>;
  contractType?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  employeeSpecialText?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  idPhoto?: Maybe<Scalars['String']['output']>;
  isBlocked?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type EmployeeInput = {
  address: Scalars['String']['input'];
  contractPhoto?: InputMaybe<Scalars['String']['input']>;
  contractType: ContractType;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  idPhoto?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  permissions: Array<InputMaybe<Scalars['String']['input']>>;
  phone: Scalars['String']['input'];
};

export type EmployeeUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  contractPhoto?: InputMaybe<Scalars['String']['input']>;
  contractType?: InputMaybe<ContractType>;
  deleteContractPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  deleteIdPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  idPhoto?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type EnumLabelPair = {
  __typename?: 'EnumLabelPair';
  ar?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Event = Node & {
  __typename?: 'Event';
  address?: Maybe<Scalars['String']['output']>;
  agents?: Maybe<Array<Maybe<EventAgent>>>;
  category?: Maybe<EventCategory>;
  companyEventLink?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  endTime?: Maybe<Scalars['LocalTime']['output']>;
  eventCode?: Maybe<Array<Maybe<EventCode>>>;
  eventImage?: Maybe<Scalars['String']['output']>;
  eventLink?: Maybe<Scalars['String']['output']>;
  eventName?: Maybe<Scalars['String']['output']>;
  eventSmallImage?: Maybe<Scalars['String']['output']>;
  eventTime?: Maybe<Scalars['LocalTime']['output']>;
  exhibitionType?: Maybe<Scalars['String']['output']>;
  expectedNumberOfAttendees?: Maybe<Scalars['Int']['output']>;
  expectedNumberOfCompanyAttendees?: Maybe<Scalars['Int']['output']>;
  extraCompany?: Maybe<Scalars['JSON']['output']>;
  extraImages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  extraVisitor?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isFree?: Maybe<Scalars['Boolean']['output']>;
  isTicketsOpen?: Maybe<Scalars['Boolean']['output']>;
  numberOfCompanies?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<Company>;
  /**  company_id */
  sections?: Maybe<Array<Maybe<Section>>>;
  /**  من جدول EventSection */
  services?: Maybe<Array<Maybe<ExtraService>>>;
  startDate?: Maybe<Scalars['Date']['output']>;
  /**  من جدول EventService */
  status?: Maybe<Scalars['String']['output']>;
  ticketPrice?: Maybe<Scalars['BigDecimal']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type EventAgent = {
  __typename?: 'EventAgent';
  companyName?: Maybe<Scalars['String']['output']>;
  companyPhoto?: Maybe<Scalars['String']['output']>;
  /**  URL للصورة */
  createDate?: Maybe<Scalars['LocalDateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updateDate?: Maybe<Scalars['LocalDateTime']['output']>;
};

export type EventAgentInput = {
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyPhoto?: InputMaybe<Scalars['String']['input']>;
};

export type EventCategory = {
  __typename?: 'EventCategory';
  /** arabic وصف الفئة */
  description?: Maybe<Scalars['String']['output']>;
  /** arabic معرف الفئة */
  id?: Maybe<Scalars['ID']['output']>;
  /** arabic اسم الفئة بالعربية */
  nameAr?: Maybe<Scalars['String']['output']>;
  /** arabic اسم الفئة بالإنجليزية */
  nameEn?: Maybe<Scalars['String']['output']>;
};

export type EventCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  nameAr: Scalars['String']['input'];
  nameEn: Scalars['String']['input'];
};

export type EventCode = {
  __typename?: 'EventCode';
  code?: Maybe<Scalars['String']['output']>;
  isUsed?: Maybe<Scalars['Boolean']['output']>;
  usedTime?: Maybe<Scalars['LocalDateTime']['output']>;
};

/** ############################# ==== Inputs ==== */
export type EventInput = {
  address: Scalars['String']['input'];
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  endTime?: InputMaybe<Scalars['LocalTime']['input']>;
  eventImage?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  eventSmallImage?: InputMaybe<Scalars['String']['input']>;
  eventTime?: InputMaybe<Scalars['LocalTime']['input']>;
  exhibitionType?: InputMaybe<ExhibitionType>;
  expectedNumberOfAttendees?: InputMaybe<Scalars['Int']['input']>;
  expectedNumberOfCompanyAttendees?: InputMaybe<Scalars['Int']['input']>;
  extraCompany?: InputMaybe<Scalars['JSON']['input']>;
  extraVisitor?: InputMaybe<Scalars['JSON']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  isTicketsOpen?: InputMaybe<Scalars['Boolean']['input']>;
  organizationName?: InputMaybe<Scalars['String']['input']>;
  sectionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  ticketPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  type?: InputMaybe<EventType>;
};

/**  ==== EventRequest Type ==== */
export type EventRequest = Node & {
  __typename?: 'EventRequest';
  address?: Maybe<Scalars['String']['output']>;
  commercialRegistryFile?: Maybe<Scalars['String']['output']>;
  /**  من الـ BaseEntity */
  createDate?: Maybe<Scalars['LocalDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  estimatedPreparationTime?: Maybe<Scalars['String']['output']>;
  eventName?: Maybe<Scalars['String']['output']>;
  eventTime?: Maybe<Scalars['LocalTime']['output']>;
  expectedNumberOfAttendees?: Maybe<Scalars['Int']['output']>;
  expectedNumberOfCompanyAttendees?: Maybe<Scalars['Int']['output']>;
  extra?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  /**  الربط مع حدث تم إنشاؤه بعد الموافقة (يمكنك توسيع نوع Event لاحقًا) */
  linkedEvent?: Maybe<Event>;
  organizationCountry?: Maybe<Scalars['String']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  organizerEmail?: Maybe<Scalars['String']['output']>;
  organizerFirstName?: Maybe<Scalars['String']['output']>;
  organizerLastName?: Maybe<Scalars['String']['output']>;
  organizerPhone?: Maybe<Scalars['String']['output']>;
  organizerType?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Province>;
  sections?: Maybe<Array<Maybe<Section>>>;
  sector?: Maybe<Scalars['String']['output']>;
  services?: Maybe<Array<Maybe<ExtraService>>>;
  startDate?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updateDate?: Maybe<Scalars['LocalDateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type EventRequestInput = {
  address: Scalars['String']['input'];
  commercialRegistryFile?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  endDate: Scalars['Date']['input'];
  estimatedPreparationTime: Scalars['String']['input'];
  eventName: Scalars['String']['input'];
  eventTime?: InputMaybe<Scalars['LocalTime']['input']>;
  expectedNumberOfAttendees: Scalars['Int']['input'];
  expectedNumberOfCompanyAttendees: Scalars['Int']['input'];
  extra?: InputMaybe<Scalars['JSON']['input']>;
  justNeedApprove: Scalars['Boolean']['input'];
  organizationCountry: Scalars['String']['input'];
  organizationName: Scalars['String']['input'];
  organizerEmail: Scalars['String']['input'];
  organizerFirstName: Scalars['String']['input'];
  organizerLastName: Scalars['String']['input'];
  organizerPhone: Scalars['String']['input'];
  organizerType: OrganizationType;
  province: Province;
  sectionIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sector: ProfessionalSector;
  serviceIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startDate: Scalars['Date']['input'];
  type: EventType;
};

export type EventRequestUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  commercialRegistryFile?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  estimatedPreparationTime?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  eventTime?: InputMaybe<Scalars['LocalTime']['input']>;
  expectedNumberOfAttendees?: InputMaybe<Scalars['Int']['input']>;
  expectedNumberOfCompanyAttendees?: InputMaybe<Scalars['Int']['input']>;
  extra?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  justNeedApprove?: InputMaybe<Scalars['Boolean']['input']>;
  organizationCountry?: InputMaybe<Scalars['String']['input']>;
  organizationName?: InputMaybe<Scalars['String']['input']>;
  organizerEmail?: InputMaybe<Scalars['String']['input']>;
  organizerFirstName?: InputMaybe<Scalars['String']['input']>;
  organizerLastName?: InputMaybe<Scalars['String']['input']>;
  organizerPhone?: InputMaybe<Scalars['String']['input']>;
  organizerType?: InputMaybe<OrganizationType>;
  province?: InputMaybe<Province>;
  sectionIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sector?: InputMaybe<ProfessionalSector>;
  serviceIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<RequestStatus>;
  type?: InputMaybe<EventType>;
};

export enum EventType {
  Conference = 'CONFERENCE',
  Exhibition = 'EXHIBITION',
  Other = 'OTHER',
  Seminar = 'SEMINAR',
  Workshop = 'WORKSHOP',
}

/** ###### */
export type EventUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  deletedAgentIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deletedEventImage?: InputMaybe<Scalars['Boolean']['input']>;
  deletedEventSmallImage?: InputMaybe<Scalars['Boolean']['input']>;
  deletedImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['LocalTime']['input']>;
  eventImage?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  eventSmallImage?: InputMaybe<Scalars['String']['input']>;
  /**
   *  startDate: Date
   * endDate: Date
   */
  eventTime?: InputMaybe<Scalars['LocalTime']['input']>;
  exhibitionType?: InputMaybe<ExhibitionType>;
  expectedNumberOfAttendees?: InputMaybe<Scalars['Int']['input']>;
  expectedNumberOfCompanyAttendees?: InputMaybe<Scalars['Int']['input']>;
  extraCompany?: InputMaybe<Scalars['JSON']['input']>;
  extraVisitor?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  isTicketsOpen?: InputMaybe<Scalars['Boolean']['input']>;
  newAgents?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ticketPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  type?: InputMaybe<EventType>;
};

export enum ExhibitionType {
  BookFair = 'BOOK_FAIR',
  CarExhibition = 'CAR_EXHIBITION',
  EducationExhibition = 'EDUCATION_EXHIBITION',
  FashionExhibition = 'FASHION_EXHIBITION',
  FoodAndBeverageExhibition = 'FOOD_AND_BEVERAGE_EXHIBITION',
  HealthAndMedicineExhibition = 'HEALTH_AND_MEDICINE_EXHIBITION',
  Other = 'OTHER',
  RealEstateExhibition = 'REAL_ESTATE_EXHIBITION',
  TechnologyExhibition = 'TECHNOLOGY_EXHIBITION',
  WeddingExhibition = 'WEDDING_EXHIBITION',
}

export type ExternalService = Node & {
  __typename?: 'ExternalService';
  address?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  servicePhoto?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ServiceType>;
  webUrl?: Maybe<Scalars['String']['output']>;
};

export type ExternalServiceCreateInput = {
  address: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  servicePhoto?: InputMaybe<Scalars['String']['input']>;
  type: ServiceType;
  webUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ExternalServiceStatics = {
  __typename?: 'ExternalServiceStatics';
  cafeCount?: Maybe<Scalars['Int']['output']>;
  hotelCount?: Maybe<Scalars['Int']['output']>;
  restaurantCount?: Maybe<Scalars['Int']['output']>;
  taxiCount?: Maybe<Scalars['Int']['output']>;
  touristPlacesCount?: Maybe<Scalars['Int']['output']>;
};

export type ExternalServiceUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  deleteServicePhoto?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  servicePhoto?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ServiceType>;
  webUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ExtraService = Node & {
  __typename?: 'ExtraService';
  category: ServiceCategory;
  code: Scalars['String']['output'];
  createDate?: Maybe<Scalars['String']['output']>;
  defaultPrice: Scalars['BigDecimal']['output'];
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isMandatory: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  serviceImage?: Maybe<Scalars['String']['output']>;
  unitType: UnitType;
  updateDate?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type ExtraServiceInput = {
  category?: InputMaybe<ServiceCategory>;
  code: Scalars['String']['input'];
  defaultPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['JSON']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  serviceImage?: InputMaybe<Scalars['String']['input']>;
  unitType?: InputMaybe<UnitType>;
};

export type ExtraServiceUpdateInput = {
  category?: InputMaybe<ServiceCategory>;
  code?: InputMaybe<Scalars['String']['input']>;
  defaultPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  deleteServiceImage?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  serviceImage?: InputMaybe<Scalars['String']['input']>;
  unitType?: InputMaybe<UnitType>;
};

export type Faq = {
  __typename?: 'FAQ';
  answer?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  question?: Maybe<Scalars['String']['output']>;
};

export type FaqInput = {
  answer: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  question: Scalars['String']['input'];
};

/**
 *  ==== Enum ====
 *  حدّث القيم لتطابق sy.exhibition.enums.FloorMaterial في مشروعك
 */
export enum FloorMaterial {
  Carpet = 'CARPET',
  Ceramic = 'CERAMIC',
  Concrete = 'CONCRETE',
  Epoxy = 'EPOXY',
  Other = 'OTHER',
  Wood = 'WOOD',
}

/**  ==== Mutations ==== */
export type Mutation = {
  __typename?: 'Mutation';
  activateOrUnActivateExternalService?: Maybe<Scalars['Boolean']['output']>;
  addSectionToEvent?: Maybe<Event>;
  approveEventRequest?: Maybe<Scalars['Boolean']['output']>;
  blockUnBlockEmployee?: Maybe<Scalars['Boolean']['output']>;
  /** ## commpany */
  creatNewCompany?: Maybe<Company>;
  creatNewOrganizer?: Maybe<Company>;
  /** ###category */
  createCategory?: Maybe<EventCategory>;
  /** ##ContactUs */
  createContactUs?: Maybe<ContactUs>;
  /** ### Event */
  createEventByAdmin?: Maybe<Event>;
  /** #EventRequest */
  createEventRequest?: Maybe<EventRequest>;
  /** ## ExternalService */
  createExternalService?: Maybe<ExternalService>;
  /** ## ExtraService */
  createExtraService: ExtraService;
  /** ###Employee */
  createNewEmployee?: Maybe<Employee>;
  /** ## FAQ */
  createNewFAQ?: Maybe<Faq>;
  createSection: Section;
  /** ##Ticket */
  createTicket?: Maybe<Ticket>;
  deleteCategory?: Maybe<Scalars['Boolean']['output']>;
  deleteContactUs?: Maybe<Scalars['Boolean']['output']>;
  deleteEmployee?: Maybe<Scalars['Boolean']['output']>;
  deleteEvent?: Maybe<Scalars['Boolean']['output']>;
  deleteEventAgents?: Maybe<Scalars['Boolean']['output']>;
  deleteExternalService?: Maybe<Scalars['Boolean']['output']>;
  deleteExtraService: Scalars['Boolean']['output'];
  deleteFAQ?: Maybe<Scalars['Boolean']['output']>;
  deleteSection: Scalars['Boolean']['output'];
  deleteTicket?: Maybe<Scalars['Boolean']['output']>;
  generateCodeForEvent?: Maybe<EventCode>;
  registerToEvent?: Maybe<Scalars['Boolean']['output']>;
  rejectEventRequest?: Maybe<Scalars['Boolean']['output']>;
  toggleCanceledEvent?: Maybe<Scalars['Boolean']['output']>;
  updateCategory?: Maybe<EventCategory>;
  updateCompany?: Maybe<Company>;
  updateContactUsStatus?: Maybe<Scalars['Boolean']['output']>;
  updateEmployee?: Maybe<Employee>;
  updateEvent?: Maybe<Event>;
  updateEventRequest?: Maybe<EventRequest>;
  updateExternalService?: Maybe<ExternalService>;
  updateExtraService: ExtraService;
  updateFAQ?: Maybe<Faq>;
  updateSection: Section;
  /** ##user */
  updateUserPassword?: Maybe<Scalars['Boolean']['output']>;
  validateRegister?: Maybe<Scalars['Boolean']['output']>;
};

/**  ==== Mutations ==== */
export type MutationActivateOrUnActivateExternalServiceArgs = {
  externalServiceId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationAddSectionToEventArgs = {
  eventId: Scalars['ID']['input'];
  sectionIds: Array<Scalars['ID']['input']>;
};

/**  ==== Mutations ==== */
export type MutationApproveEventRequestArgs = {
  requestId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationBlockUnBlockEmployeeArgs = {
  employeeId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationCreatNewCompanyArgs = {
  input: CompanyInput;
};

/**  ==== Mutations ==== */
export type MutationCreatNewOrganizerArgs = {
  input: CompanyInput;
};

/**  ==== Mutations ==== */
export type MutationCreateCategoryArgs = {
  input?: InputMaybe<EventCategoryInput>;
};

/**  ==== Mutations ==== */
export type MutationCreateContactUsArgs = {
  input: ContactUsInput;
};

/**  ==== Mutations ==== */
export type MutationCreateEventByAdminArgs = {
  input?: InputMaybe<EventInput>;
};

/**  ==== Mutations ==== */
export type MutationCreateEventRequestArgs = {
  input?: InputMaybe<EventRequestInput>;
};

/**  ==== Mutations ==== */
export type MutationCreateExternalServiceArgs = {
  input: ExternalServiceCreateInput;
};

/**  ==== Mutations ==== */
export type MutationCreateExtraServiceArgs = {
  input: ExtraServiceInput;
};

/**  ==== Mutations ==== */
export type MutationCreateNewEmployeeArgs = {
  input?: InputMaybe<EmployeeInput>;
};

/**  ==== Mutations ==== */
export type MutationCreateNewFaqArgs = {
  faq: FaqInput;
};

/**  ==== Mutations ==== */
export type MutationCreateSectionArgs = {
  input: SectionCreateInput;
};

/**  ==== Mutations ==== */
export type MutationCreateTicketArgs = {
  eventId: Scalars['ID']['input'];
  input: TicketInput;
};

/**  ==== Mutations ==== */
export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationDeleteContactUsArgs = {
  contactId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationDeleteEmployeeArgs = {
  employeeId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationDeleteEventArgs = {
  eventId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationDeleteEventAgentsArgs = {
  agentId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationDeleteExternalServiceArgs = {
  externalServiceId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationDeleteExtraServiceArgs = {
  serviceId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationDeleteFaqArgs = {
  faqId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationDeleteSectionArgs = {
  sectionId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationDeleteTicketArgs = {
  ticketId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationGenerateCodeForEventArgs = {
  eventId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationRegisterToEventArgs = {
  otp: Scalars['String']['input'];
};

/**  ==== Mutations ==== */
export type MutationRejectEventRequestArgs = {
  requestId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationToggleCanceledEventArgs = {
  eventId: Scalars['ID']['input'];
};

/**  ==== Mutations ==== */
export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['ID']['input'];
  input?: InputMaybe<EventCategoryInput>;
};

/**  ==== Mutations ==== */
export type MutationUpdateCompanyArgs = {
  input: CompanyUpdateInput;
};

/**  ==== Mutations ==== */
export type MutationUpdateContactUsStatusArgs = {
  contactUsId: Scalars['ID']['input'];
  state?: InputMaybe<RequestState>;
};

/**  ==== Mutations ==== */
export type MutationUpdateEmployeeArgs = {
  input?: InputMaybe<EmployeeUpdateInput>;
};

/**  ==== Mutations ==== */
export type MutationUpdateEventArgs = {
  input?: InputMaybe<EventUpdateInput>;
};

/**  ==== Mutations ==== */
export type MutationUpdateEventRequestArgs = {
  input?: InputMaybe<EventRequestUpdateInput>;
};

/**  ==== Mutations ==== */
export type MutationUpdateExternalServiceArgs = {
  input: ExternalServiceUpdateInput;
};

/**  ==== Mutations ==== */
export type MutationUpdateExtraServiceArgs = {
  input: ExtraServiceUpdateInput;
};

/**  ==== Mutations ==== */
export type MutationUpdateFaqArgs = {
  faq: FaqInput;
};

/**  ==== Mutations ==== */
export type MutationUpdateSectionArgs = {
  input: SectionUpdateInput;
};

/**  ==== Mutations ==== */
export type MutationUpdateUserPasswordArgs = {
  newPass: Scalars['String']['input'];
  oldPass: Scalars['String']['input'];
};

/**  ==== Mutations ==== */
export type MutationValidateRegisterArgs = {
  otp: Scalars['String']['input'];
};

/** #################################### ==== Type ==== */
export type Node = {
  id?: Maybe<Scalars['ID']['output']>;
};

export enum OrganizationType {
  /** فرد */
  Company = 'COMPANY',
  /**  شركة */
  Government = 'GOVERNMENT',
  Individual = 'INDIVIDUAL',
  /**  جهة حكومية */
  NonProfit = 'NON_PROFIT',
  /**  منظمة غير ربحية */
  Other = 'OTHER',
}

export type PageResponse = {
  __typename?: 'PageResponse';
  content?: Maybe<Array<Maybe<Node>>>;
  page?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  totalElements?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PageResponseEvents = {
  __typename?: 'PageResponseEvents';
  content?: Maybe<Array<Maybe<YearMonthEventsDto>>>;
  page?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  totalElements?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Permission = {
  __typename?: 'Permission';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export enum ProfessionalSector {
  ConstructionAndRealEstate = 'CONSTRUCTION_AND_REAL_ESTATE',
  EducationAndScientificResearch = 'EDUCATION_AND_SCIENTIFIC_RESEARCH',
  EnergyAndEnvironment = 'ENERGY_AND_ENVIRONMENT',
  FinanceAndInsurance = 'FINANCE_AND_INSURANCE',
  HealthAndMedicine = 'HEALTH_AND_MEDICINE',
  HospitalityAndTourism = 'HOSPITALITY_AND_TOURISM',
  IndustryAndProduction = 'INDUSTRY_AND_PRODUCTION',
  MediaAndCreativeIndustries = 'MEDIA_AND_CREATIVE_INDUSTRIES',
  Other = 'OTHER',
  PublicSectorAndNonprofitOrganizations = 'PUBLIC_SECTOR_AND_NONPROFIT_ORGANIZATIONS',
  TechnologyAndCommunications = 'TECHNOLOGY_AND_COMMUNICATIONS',
  TraditionalAndECommerce = 'TRADITIONAL_AND_E_COMMERCE',
  TransportationAndLogisticsServices = 'TRANSPORTATION_AND_LOGISTICS_SERVICES',
}

export enum Province {
  Aleppo = 'ALEPPO',
  Damascus = 'DAMASCUS',
  Dara = 'DARA',
  DeirEzZor = 'DEIR_EZ_ZOR',
  Hama = 'HAMA',
  Hasakah = 'HASAKAH',
  Homs = 'HOMS',
  Idlib = 'IDLIB',
  Lattakia = 'LATTAKIA',
  Quneitra = 'QUNEITRA',
  Raqqa = 'RAQQA',
  Suwayda = 'SUWAYDA',
  Tartous = 'TARTOUS',
}

/**  ==== Queries ==== */
export type Query = {
  __typename?: 'Query';
  /** ##HomeQuery */
  attendeeTypesAllLabels?: Maybe<Array<Maybe<EnumLabelPair>>>;
  contractTypeAllLabels?: Maybe<Array<Maybe<EnumLabelPair>>>;
  exhibitionTypeAllLabels?: Maybe<Array<Maybe<EnumLabelPair>>>;
  floorMaterialAllLabels?: Maybe<Array<Maybe<EnumLabelPair>>>;
  getAdminHomeStatics?: Maybe<AdminStaticsResponse>;
  getAllAvailableAndUnAvailableSectionByTime?: Maybe<Array<Maybe<Section>>>;
  /** ###category */
  getAllCategories?: Maybe<Array<Maybe<EventCategory>>>;
  /** ####Company */
  getAllCompanyForEvent?: Maybe<PageResponse>;
  getAllCompanySectionForEvent?: Maybe<Array<Maybe<Section>>>;
  /** ##ContactUs */
  getAllContactUs?: Maybe<PageResponse>;
  /** ##Employee */
  getAllEmployees?: Maybe<PageResponse>;
  /** ###Event */
  getAllEvent?: Maybe<PageResponse>;
  /** #####eventRequest */
  getAllEventRequest?: Maybe<PageResponse>;
  /** ##ExternalService */
  getAllExternalService?: Maybe<PageResponse>;
  getAllExternalServiceStatics?: Maybe<ExternalServiceStatics>;
  /** ## ExtraService */
  getAllExtraService: PageResponse;
  /** ######## */
  getAllFAQs?: Maybe<Array<Maybe<Faq>>>;
  getAllOrganizer?: Maybe<PageResponse>;
  getAllSection?: Maybe<Array<Maybe<Section>>>;
  /** ###Ticket */
  getAllTicketsForEvent?: Maybe<PageResponse>;
  getAvailableServiceBySections?: Maybe<Array<Maybe<ExtraService>>>;
  getCategoryById?: Maybe<EventCategory>;
  getContactUsById?: Maybe<ContactUs>;
  getEmployeeById?: Maybe<Employee>;
  getEventById?: Maybe<Event>;
  getEventBySpecialText?: Maybe<Event>;
  getEventRequestById?: Maybe<EventRequest>;
  getEventsGroupedByYearMonth?: Maybe<PageResponseEvents>;
  getExternalServiceById?: Maybe<ExternalService>;
  getExtraServiceById?: Maybe<ExtraService>;
  getFAQById?: Maybe<Faq>;
  getSectionById?: Maybe<Section>;
  getSectionReserveBySectionId?: Maybe<Array<Maybe<Event>>>;
  organizationTypeAllLabels?: Maybe<Array<Maybe<EnumLabelPair>>>;
  professionalSectorAllLabels?: Maybe<Array<Maybe<EnumLabelPair>>>;
  serviceCategoryAllLabels?: Maybe<Array<Maybe<EnumLabelPair>>>;
  unitTypeAllLabels?: Maybe<Array<Maybe<EnumLabelPair>>>;
};

/**  ==== Queries ==== */
export type QueryGetAdminHomeStaticsArgs = {
  fromDate?: InputMaybe<Scalars['Date']['input']>;
  timeFilter: TimeFilter;
  toDate?: InputMaybe<Scalars['Date']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetAllAvailableAndUnAvailableSectionByTimeArgs = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

/**  ==== Queries ==== */
export type QueryGetAllCompanyForEventArgs = {
  eventId: Scalars['ID']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetAllCompanySectionForEventArgs = {
  eventId: Scalars['ID']['input'];
};

/**  ==== Queries ==== */
export type QueryGetAllContactUsArgs = {
  filter?: InputMaybe<TimeFilter>;
  from?: InputMaybe<Scalars['Date']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<RequestState>;
  to?: InputMaybe<Scalars['Date']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetAllEmployeesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  permission?: InputMaybe<Scalars['String']['input']>;
  searchLabel?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetAllEventArgs = {
  eventName?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TimeFilter>;
  fromDate?: InputMaybe<Scalars['Date']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  toDate?: InputMaybe<Scalars['Date']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetAllEventRequestArgs = {
  filter?: InputMaybe<TimeFilter>;
  from?: InputMaybe<Scalars['Date']['input']>;
  justNeedApprove: Scalars['Boolean']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  province?: InputMaybe<Province>;
  size?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<RequestStatus>;
  to?: InputMaybe<Scalars['Date']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetAllExternalServiceArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  type: ServiceType;
};

/**  ==== Queries ==== */
export type QueryGetAllExtraServiceArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetAllOrganizerArgs = {
  from?: InputMaybe<Scalars['Date']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  searchLabel?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  timeFilter?: InputMaybe<TimeFilter>;
  to?: InputMaybe<Scalars['Date']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetAllSectionArgs = {
  fromDate?: InputMaybe<Scalars['Date']['input']>;
  searchLabel?: InputMaybe<Scalars['String']['input']>;
  timeFilter: TimeFilter;
  toDate?: InputMaybe<Scalars['Date']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetAllTicketsForEventArgs = {
  eventId: Scalars['ID']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetAvailableServiceBySectionsArgs = {
  sectionIds: Array<Scalars['ID']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetCategoryByIdArgs = {
  categoryId: Scalars['ID']['input'];
};

/**  ==== Queries ==== */
export type QueryGetContactUsByIdArgs = {
  contactId: Scalars['ID']['input'];
};

/**  ==== Queries ==== */
export type QueryGetEmployeeByIdArgs = {
  employeeId: Scalars['ID']['input'];
};

/**  ==== Queries ==== */
export type QueryGetEventByIdArgs = {
  eventId: Scalars['ID']['input'];
};

/**  ==== Queries ==== */
export type QueryGetEventBySpecialTextArgs = {
  specialText?: InputMaybe<Scalars['String']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetEventRequestByIdArgs = {
  eventRequestId: Scalars['ID']['input'];
};

/**  ==== Queries ==== */
export type QueryGetEventsGroupedByYearMonthArgs = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/**  ==== Queries ==== */
export type QueryGetExternalServiceByIdArgs = {
  externalServiceId: Scalars['ID']['input'];
};

/**  ==== Queries ==== */
export type QueryGetExtraServiceByIdArgs = {
  serviceId: Scalars['ID']['input'];
};

/**  ==== Queries ==== */
export type QueryGetFaqByIdArgs = {
  faqId: Scalars['ID']['input'];
};

/**  ==== Queries ==== */
export type QueryGetSectionByIdArgs = {
  sectionId: Scalars['ID']['input'];
};

/**  ==== Queries ==== */
export type QueryGetSectionReserveBySectionIdArgs = {
  eventName?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['Date']['input']>;
  sectionId: Scalars['ID']['input'];
  to?: InputMaybe<Scalars['Date']['input']>;
};

export enum RequestState {
  Approved = 'APPROVED',
  Processing = 'PROCESSING',
  Rejected = 'REJECTED',
  Requested = 'REQUESTED',
}

export enum RequestStatus {
  /**  بانتظار المراجعة */
  Approved = 'APPROVED',
  /**  تم الرفض */
  Cancelled = 'CANCELLED',
  PartialApprove = 'PARTIAL_APPROVE',
  /**  تم إنشاؤه لكن لم يُرسل بعد */
  Pending = 'PENDING',
  /**  تمت الموافقة */
  Rejected = 'REJECTED',
}

export type Section = {
  __typename?: 'Section';
  /**  ارتفاع السقف بالمتر (مثال: 7.50) */
  ceilingHeightM?: Maybe<Scalars['Float']['output']>;
  /**  من BaseEntity */
  createDate?: Maybe<Scalars['String']['output']>;
  /**  نوع الأرضية */
  floorMaterial?: Maybe<FloorMaterial>;
  hasAirConditioning?: Maybe<Scalars['Boolean']['output']>;
  hasElectricity?: Maybe<Scalars['Boolean']['output']>;
  hasEmergencyExit?: Maybe<Scalars['Boolean']['output']>;
  hasInternet?: Maybe<Scalars['Boolean']['output']>;
  /**  توفر الخدمات */
  hasLighting?: Maybe<Scalars['Boolean']['output']>;
  hasReserveByAdmin?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  /**  حقل Transient في الـ Entity — إن كان يُحتسب منطقياً يمكنك إعادته أيضاً */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  /**  عدد المواقف (مثال: 500) */
  parkingSpots?: Maybe<Scalars['Boolean']['output']>;
  reserveFrom?: Maybe<Scalars['Date']['output']>;
  reserveTo?: Maybe<Scalars['Date']['output']>;
  sectionImage?: Maybe<Scalars['String']['output']>;
  sectionType?: Maybe<SectionType>;
  services?: Maybe<Array<Maybe<ExtraService>>>;
  /**  المساحة الإجمالية بالمتر المربع (مثال: 10000.00) */
  totalAreaSqm?: Maybe<Scalars['Float']['output']>;
  updateDate?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type SectionCreateInput = {
  ceilingHeightM: Scalars['Float']['input'];
  floorMaterial: FloorMaterial;
  hasAirConditioning: Scalars['Boolean']['input'];
  hasElectricity: Scalars['Boolean']['input'];
  hasEmergencyExit: Scalars['Boolean']['input'];
  hasInternet: Scalars['Boolean']['input'];
  hasLighting: Scalars['Boolean']['input'];
  hasReserveByAdmin: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  parkingSpots: Scalars['Boolean']['input'];
  reserveFrom?: InputMaybe<Scalars['Date']['input']>;
  reserveTo?: InputMaybe<Scalars['Date']['input']>;
  sectionImage?: InputMaybe<Scalars['String']['input']>;
  sectionType?: InputMaybe<SectionType>;
  services?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  totalAreaSqm: Scalars['Float']['input'];
};

export enum SectionType {
  Closed = 'CLOSED',
  Equipped = 'EQUIPPED',
  NotEquipped = 'NOT_EQUIPPED',
  Open = 'OPEN',
  Other = 'OTHER',
}

export type SectionUpdateInput = {
  ceilingHeightM?: InputMaybe<Scalars['Float']['input']>;
  deletedSectionImage?: InputMaybe<Scalars['Boolean']['input']>;
  deletedServicesId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  floorMaterial?: InputMaybe<FloorMaterial>;
  hasAirConditioning?: InputMaybe<Scalars['Boolean']['input']>;
  hasElectricity?: InputMaybe<Scalars['Boolean']['input']>;
  hasEmergencyExit?: InputMaybe<Scalars['Boolean']['input']>;
  hasInternet?: InputMaybe<Scalars['Boolean']['input']>;
  hasLighting?: InputMaybe<Scalars['Boolean']['input']>;
  hasReserveByAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  newServicesId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  parkingSpots?: InputMaybe<Scalars['Boolean']['input']>;
  reserveFrom?: InputMaybe<Scalars['Date']['input']>;
  reserveTo?: InputMaybe<Scalars['Date']['input']>;
  sectionImage?: InputMaybe<Scalars['String']['input']>;
  sectionType?: InputMaybe<SectionType>;
  totalAreaSqm?: InputMaybe<Scalars['Float']['input']>;
};

export enum ServiceCategory {
  /**  تغطية إعلامية / كاميرات */
  Advertising = 'ADVERTISING',
  /**  نقل داخلي / تجهيزات */
  Digital = 'DIGITAL',
  /**  رجال أمن */
  Emergency = 'EMERGENCY',
  /**  مُصلى */
  General = 'GENERAL',
  /**  لوحات / شاشات */
  Logistics = 'LOGISTICS',
  /**  إسعاف / إطفاء */
  Media = 'MEDIA',
  /**  موقع إلكتروني */
  Religious = 'RELIGIOUS',
  Security = 'SECURITY',
}

export enum ServiceType {
  Cafe = 'CAFE',
  Hotel = 'HOTEL',
  Restaurant = 'RESTAURANT',
  Taxi = 'TAXI',
  TouristPlaces = 'TOURIST_PLACES',
}

export type Ticket = Node & {
  __typename?: 'Ticket';
  /** arabic سعر التذكرة */
  Price?: Maybe<Scalars['BigDecimal']['output']>;
  /** arabic البريد الإلكتروني للحضور */
  attendeeEmail?: Maybe<Scalars['String']['output']>;
  /** arabic اسم  الاول الكامل */
  attendeeFirstName?: Maybe<Scalars['String']['output']>;
  /** arabic اسم  الاول الكامل */
  attendeeLastName?: Maybe<Scalars['String']['output']>;
  /** arabic رقم الهاتف للحضور */
  attendeePhone?: Maybe<Scalars['String']['output']>;
  attendeeType?: Maybe<AttendeeType>;
  /** arabic تاريخ إنشاء التذكرة */
  createDate?: Maybe<Scalars['LocalDateTime']['output']>;
  /** arabic معرف التذكرة */
  id?: Maybe<Scalars['ID']['output']>;
  /** arabic هل تم التحقق من حضور المستخدم؟ */
  isCheckedIn?: Maybe<Scalars['Boolean']['output']>;
  /** arabic هل التذكرة مجانية؟ */
  isFree?: Maybe<Scalars['Boolean']['output']>;
  province?: Maybe<Province>;
  /** arabic رابط  (QR) */
  qrCodeImageUrl?: Maybe<Scalars['String']['output']>;
  sector?: Maybe<ProfessionalSector>;
  /** arabic تاريخ آخر تعديل للتذكرة */
  updateDate?: Maybe<Scalars['LocalDateTime']['output']>;
};

export type TicketInput = {
  attendeeEmail?: InputMaybe<Scalars['String']['input']>;
  /** arabic اسم  الاول الكامل */
  attendeeFirstName: Scalars['String']['input'];
  /** arabic اسم  الاول الكامل */
  attendeeLastName: Scalars['String']['input'];
  attendeePhone: Scalars['String']['input'];
  attendeeType: AttendeeType;
  province: Province;
  sector: ProfessionalSector;
};

export enum TimeFilter {
  Duration = 'DURATION',
  ThisMonth = 'THIS_MONTH',
  ThisWeek = 'THIS_WEEK',
  Today = 'TODAY',
}

export enum UnitType {
  PerDay = 'PER_DAY',
  PerEvent = 'PER_EVENT',
  PerHour = 'PER_HOUR',
  PerTrip = 'PER_TRIP',
  PerUnit = 'PER_UNIT',
}

export type YearMonthEventsDto = {
  __typename?: 'YearMonthEventsDto';
  events?: Maybe<Array<Maybe<Event>>>;
  month?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type GetEventByIdQueryVariables = Exact<{
  eventId: Scalars['ID']['input'];
}>;

export type GetEventByIdQuery = {
  __typename?: 'Query';
  getEventById?: {
    __typename?: 'Event';
    id: string;
    eventName?: string | null;
    description?: string | null;
    address?: string | null;
    startDate?: any | null;
    endDate?: any | null;
    eventTime?: any | null;
    endTime?: any | null;
    type?: string | null;
    exhibitionType?: string | null;
    eventLink?: string | null;
    eventImage?: string | null;
    expectedNumberOfAttendees?: number | null;
    expectedNumberOfCompanyAttendees?: number | null;
    status?: string | null;
    category?: {
      __typename?: 'EventCategory';
      id?: string | null;
      nameAr?: string | null;
      nameEn?: string | null;
      description?: string | null;
    } | null;
    owner?: {
      __typename?: 'Company';
      id?: string | null;
      companyName?: string | null;
      ownerFullName?: string | null;
      companyPhone?: string | null;
      companyEmail?: string | null;
      companyAddress?: string | null;
    } | null;
    agents?: Array<{
      __typename?: 'EventAgent';
      id?: string | null;
      companyName?: string | null;
      companyPhoto?: string | null;
    } | null> | null;
    sections?: Array<{
      __typename?: 'Section';
      id: string;
      name?: string | null;
    } | null> | null;
    services?: Array<{
      __typename?: 'ExtraService';
      id: string;
      name: string;
      category: ServiceCategory;
    } | null> | null;
  } | null;
};

export type GetAllSectionsQueryVariables = Exact<{
  timeFilter: TimeFilter;
  searchLabel?: InputMaybe<Scalars['String']['input']>;
  fromDate?: InputMaybe<Scalars['Date']['input']>;
  toDate?: InputMaybe<Scalars['Date']['input']>;
}>;

export type GetAllSectionsQuery = {
  __typename?: 'Query';
  getAllSection?: Array<{
    __typename?: 'Section';
    id: string;
    name?: string | null;
    totalAreaSqm?: number | null;
    ceilingHeightM?: number | null;
    floorMaterial?: FloorMaterial | null;
    hasLighting?: boolean | null;
    hasAirConditioning?: boolean | null;
    hasEmergencyExit?: boolean | null;
    hasInternet?: boolean | null;
    hasElectricity?: boolean | null;
    parkingSpots?: boolean | null;
    isActive?: boolean | null;
    sectionType?: SectionType | null;
    hasReserveByAdmin?: boolean | null;
    reserveFrom?: any | null;
    reserveTo?: any | null;
    createDate?: string | null;
    updateDate?: string | null;
  } | null> | null;
};

export type GetSectionByIdQueryVariables = Exact<{
  sectionId: Scalars['ID']['input'];
}>;

export type GetSectionByIdQuery = {
  __typename?: 'Query';
  getSectionById?: {
    __typename?: 'Section';
    id: string;
    name?: string | null;
    totalAreaSqm?: number | null;
    ceilingHeightM?: number | null;
    floorMaterial?: FloorMaterial | null;
    hasLighting?: boolean | null;
    hasAirConditioning?: boolean | null;
    hasEmergencyExit?: boolean | null;
    hasInternet?: boolean | null;
    hasElectricity?: boolean | null;
    parkingSpots?: boolean | null;
    notes?: string | null;
    sectionType?: SectionType | null;
    isActive?: boolean | null;
    sectionImage?: string | null;
    hasReserveByAdmin?: boolean | null;
    reserveFrom?: any | null;
    reserveTo?: any | null;
    createDate?: string | null;
    updateDate?: string | null;
    services?: Array<{
      __typename?: 'ExtraService';
      id: string;
      code: string;
      name: string;
      description?: string | null;
      category: ServiceCategory;
      unitType: UnitType;
      defaultPrice: any;
      isMandatory: boolean;
      isActive: boolean;
    } | null> | null;
  } | null;
};

export type GetSectionReservesQueryVariables = Exact<{
  sectionId: Scalars['ID']['input'];
  eventName?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
}>;

export type GetSectionReservesQuery = {
  __typename?: 'Query';
  getSectionReserveBySectionId?: Array<{
    __typename?: 'Event';
    id: string;
    eventName?: string | null;
    status?: string | null;
    type?: string | null;
    startDate?: any | null;
    endDate?: any | null;
    owner?: {
      __typename?: 'Company';
      id?: string | null;
      companyName?: string | null;
      ownerFullName?: string | null;
      companyPhone?: string | null;
    } | null;
  } | null> | null;
};

export type CreateSectionMutationVariables = Exact<{
  input: SectionCreateInput;
}>;

export type CreateSectionMutation = {
  __typename?: 'Mutation';
  createSection: { __typename?: 'Section'; id: string; name?: string | null };
};

export type UpdateSectionMutationVariables = Exact<{
  input: SectionUpdateInput;
}>;

export type UpdateSectionMutation = {
  __typename?: 'Mutation';
  updateSection: { __typename?: 'Section'; id: string; name?: string | null };
};

export type DeleteSectionMutationVariables = Exact<{
  sectionId: Scalars['ID']['input'];
}>;

export type DeleteSectionMutation = {
  __typename?: 'Mutation';
  deleteSection: boolean;
};

export type GetAllExtraServicesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetAllExtraServicesQuery = {
  __typename?: 'Query';
  getAllExtraService: {
    __typename?: 'PageResponse';
    page?: number | null;
    size?: number | null;
    totalPages?: number | null;
    totalElements?: number | null;
    content?: Array<
      | { __typename?: 'Company' }
      | { __typename?: 'ContactUs' }
      | { __typename?: 'Employee' }
      | { __typename?: 'Event' }
      | { __typename?: 'EventRequest' }
      | { __typename?: 'ExternalService' }
      | {
          __typename?: 'ExtraService';
          id: string;
          code: string;
          name: string;
          description?: string | null;
          category: ServiceCategory;
          unitType: UnitType;
          defaultPrice: any;
          isMandatory: boolean;
          isActive: boolean;
        }
      | { __typename?: 'Ticket' }
      | null
    > | null;
  };
};

export const GetEventByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetEventById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'eventId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getEventById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'eventId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'eventId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'eventName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'eventTime' } },
                { kind: 'Field', name: { kind: 'Name', value: 'endTime' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'exhibitionType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'eventLink' } },
                { kind: 'Field', name: { kind: 'Name', value: 'eventImage' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'expectedNumberOfAttendees' },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'expectedNumberOfCompanyAttendees',
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nameAr' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nameEn' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'owner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'companyName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'ownerFullName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'companyPhone' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'companyEmail' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'companyAddress' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'agents' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'companyName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'companyPhoto' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sections' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'services' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEventByIdQuery, GetEventByIdQueryVariables>;
export const GetAllSectionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllSections' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'timeFilter' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TimeFilter' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'searchLabel' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'fromDate' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Date' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'toDate' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Date' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAllSection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'timeFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'timeFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'searchLabel' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'searchLabel' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'fromDate' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'fromDate' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'toDate' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'toDate' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'totalAreaSqm' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ceilingHeightM' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'floorMaterial' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'hasLighting' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasAirConditioning' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasEmergencyExit' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'hasInternet' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasElectricity' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'parkingSpots' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'isActive' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sectionType' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasReserveByAdmin' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'reserveFrom' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserveTo' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updateDate' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllSectionsQuery, GetAllSectionsQueryVariables>;
export const GetSectionByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSectionById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sectionId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getSectionById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sectionId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sectionId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'totalAreaSqm' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ceilingHeightM' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'floorMaterial' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'hasLighting' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasAirConditioning' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasEmergencyExit' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'hasInternet' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasElectricity' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'parkingSpots' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'notes' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sectionType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isActive' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sectionImage' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasReserveByAdmin' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'reserveFrom' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserveTo' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updateDate' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'services' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'unitType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'defaultPrice' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isMandatory' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isActive' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSectionByIdQuery, GetSectionByIdQueryVariables>;
export const GetSectionReservesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSectionReserves' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sectionId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'eventName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'from' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Date' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'to' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Date' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getSectionReserveBySectionId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sectionId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sectionId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'eventName' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'eventName' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'from' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'from' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'to' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'to' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'eventName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'owner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'companyName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'ownerFullName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'companyPhone' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSectionReservesQuery,
  GetSectionReservesQueryVariables
>;
export const CreateSectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateSection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'SectionCreateInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createSection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateSectionMutation,
  CreateSectionMutationVariables
>;
export const UpdateSectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateSection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'SectionUpdateInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateSection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateSectionMutation,
  UpdateSectionMutationVariables
>;
export const DeleteSectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteSection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sectionId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteSection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sectionId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sectionId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteSectionMutation,
  DeleteSectionMutationVariables
>;
export const GetAllExtraServicesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllExtraServices' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'size' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '100' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAllExtraService' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'page' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'page' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'size' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'size' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalPages' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'totalElements' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'content' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ExtraService' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'code' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'category' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'unitType' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'defaultPrice' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isMandatory' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isActive' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllExtraServicesQuery,
  GetAllExtraServicesQueryVariables
>;
