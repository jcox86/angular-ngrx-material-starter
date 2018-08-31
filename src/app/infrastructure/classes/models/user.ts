export class User {
  accountName: string;
  displayName: string;
  claims: string[];
  isSupervisor: boolean;
  settings: UserSettings;
}

export class UserSettings {
  theme: string;
  font: string;
  fontSize: number;
  enableRouteAnimations: boolean;
  enablePageAnimations: boolean;
}
