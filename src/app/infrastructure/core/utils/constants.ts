import { IToast } from '../../classes/interfaces/toast';

export interface Pattern {
  CURRENCY_REGEX: RegExp;
  DATE_REGEX_MASK: (string | RegExp)[];
  DECIMAL_DIGITS_ONLY: RegExp;
  EMAIL_REGEX: RegExp;
  FULL_SSN_REGEX: RegExp;
  LAST_4_SSN_REGEX: RegExp;
  NON_DECIMAL_DIGITS: RegExp;
  PHONE_REGEX: RegExp;
  SYSTEM_NUMBER_REGEX: RegExp;
  ZIPCODE_FULL_REGEX: RegExp;
}

export interface IStorage {
  CURRENT_USER: string;
}

export interface IConstants {
  timeToExpire: number;
  logoutMessage: IToast;
  loggedOutMessage: IToast;
  blacklist: string[];
  blacklistWildcard: string[];
  minInt: string;
  currencyFormat: {
    type: string;
    precision: number;
  };
  patterns: Pattern;
  storageKeys: IStorage;
}

export const Constants: IConstants = {
  timeToExpire: 1140000,
  logoutMessage: {
    description: 'slo.logout.warning',
    header: '',
    options: {
      progressBar: true,
      timeOut: 60000,
      enableHtml: true,
      positionClass: 'toast-top-center'
    }
  },
  loggedOutMessage: {
    description: 'slo.logout.success',
    header: '',
    options: {
      timeOut: 0,
      closeButton: true,
      positionClass: 'toast-top-center'
    }
  },
  blacklist: ['dashboard'],
  blacklistWildcard: [
    'validate-password',
  ],
  minInt: '-2147483648',
  currencyFormat: {
    type: 'currency',
    precision: 2
  },
  storageKeys: {
    CURRENT_USER: 'currentUser'
  },
  patterns: {
    // tslint:disable-next-line:max-line-length
    CURRENCY_REGEX: /^\$?\-?([1-9]{1}[0-9]{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))$|^\-?\$?([1-9]{1}\d{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))$|^\(\$?([1-9]{1}\d{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))\)$/,
    DATE_REGEX_MASK: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    DECIMAL_DIGITS_ONLY: /[^0-9.]/g,
    EMAIL_REGEX: /^[a-z0-9!#$%&'*+\/=?^_\`{|}~.-]+@[a-z0-9]([a-z0-9-])+(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
    FULL_SSN_REGEX: /(^\d{9}$)/,
    LAST_4_SSN_REGEX: /(^\d{4}$)/,
    NON_DECIMAL_DIGITS: /\D/g,
    PHONE_REGEX: /(^\d{10}$)/,
    SYSTEM_NUMBER_REGEX: /(^\d{1,7}$)/,
    ZIPCODE_FULL_REGEX: /^\d{5}((?:[-\s]\d{4})|(\d{4}))?$/
  }
};
