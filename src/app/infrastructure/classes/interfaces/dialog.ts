export interface IDialog {
  title: string;
  message: string;
  showTitle?: boolean;
  buttons?: Array<ButtonConfiguration>;
}

export interface ButtonConfiguration {
  text: string;
  icon: string;
  type: string;
}
