export interface IToast {
  description: string;
  header: string;
  options?: {
  closeButton?: boolean;
  timeOut?: number;
  enableHtml?: boolean;
  extendedTimeOut?: number;
  progressBar?: boolean;
  toastClass?: string;
  positionClass?: string;
  titleClass?: string ;
  messageClass?: string;
  tapToDismiss?: boolean;
  onActivateTick?: boolean;
  };
}
