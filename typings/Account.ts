export enum AccountType {
  Personal = 'personal',
  Shared = 'shared',
}

export enum AccountRole {
  Owner = 'owner',
  Admin = 'admin',
  Contributor = 'contributor',
}

export type PreDBAccount = {
  fromAccountId: number;
  accountName: string;
  isDefault?: boolean;
  isShared?: boolean;
};

export type RenameAccountInput = {
  accountId: number;
  name: string;
};

export interface Account {
  id: number;
  balance: number;
  identifier: string;
  isDefault: boolean;
  accountName: string;
  ownerIdentifier: string;
  role: AccountRole;
  type: AccountType;
}

export interface SharedAccount {
  id: number;
  user: string;
  role: AccountRole;
  account?: Account;
  accountId?: number;
  setAccount?(): void;
}
export type SharedAccountUser = Pick<SharedAccount, 'user' | 'role'>;
export interface SharedAccountInput {
  user: string;
  accountId: number;
  role?: AccountRole;
}
export interface AddToSharedAccountInput {
  identifier: string;
  accountId: number;
  role?: AccountRole;
}

export interface RemoveFromSharedAccountInput {
  accountId: number;
  identifier: string;
}

export type TransactionAccount = Pick<Account, 'id' | 'accountName'>;

export interface ATMInput {
  amount: number;
  message: string;
  accountId?: number;
}
