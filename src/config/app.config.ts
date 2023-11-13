interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Individual Customer'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Store Employee', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'View company information',
    'Edit personal information',
    'Delete personal information',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage user information',
    'Edit company details',
    'Edit user details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1bd5f283-01dd-4912-93c1-ae68cc503451',
};
