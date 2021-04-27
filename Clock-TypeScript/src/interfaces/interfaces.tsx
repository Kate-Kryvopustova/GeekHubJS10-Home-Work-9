export interface ICountry {
  value: string;
  timeZone: string;
}

export interface ISelectTimeZone {
  (item: string): void;
}

export interface ISelectorCountryProps {
  mockData: Array<ICountry>;
  selectTimeZone: ISelectTimeZone;
}
