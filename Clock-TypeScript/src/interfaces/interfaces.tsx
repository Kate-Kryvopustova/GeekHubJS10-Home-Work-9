export interface ICountry {
  value: string;
  timeZone: string;
};

export interface IShowSelectedCountry {
  (event : React.ChangeEvent<{ value: unknown }>) : void;
};

export interface ISelectTimeZone {
  (item: string): void;
};

export interface ISelectorCountryProps {
  selectTimeZone: ISelectTimeZone;
};

export interface IChangeTimeFormat {
  (): void;
};