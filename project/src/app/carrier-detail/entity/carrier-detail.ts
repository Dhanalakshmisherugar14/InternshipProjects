export class CarrierDetail {
  id!: string;
  carrierType!: string;

  // for carrier type self employeed
  companyName!: string;
  foundingAcademicYear!: string;
  startDate: any;
  endDate: any;

  // for carrier type working for a company
  joiningAcademicYear: any;
  joiningDate: any;
  ctc!: string;

  // for carrier type higher education
  institute!: string;
  qualification!: string;
  specialization!: string;
  status!: string;
  board!: string;
  passingAcademicYear!: Number;
  yearOfPassing!: Number;
  yearOfAdmission!: Number;
  overallPercentageOrCgpa!: string;
}
