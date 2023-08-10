import { CompanyAccount } from './class/CompanyAccount'
import { LuckAccount } from './class/LuckAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const luckAccount: LuckAccount = new LuckAccount("Alex",2546)


console.log("Saldo companyAccount: ", companyAccount.getBalance());
companyAccount.getLoan(4000);
console.log("Saldo companyAccount: ", companyAccount.getBalance());
companyAccount.withdraw(4000);
console.log("Saldo companyAccount: ", companyAccount.getBalance());
companyAccount.withdraw(4000);

console.log("Saldo luckAccount: ", luckAccount.getBalance());
luckAccount.deposit(100);
console.log("Saldo luckAccount: ", luckAccount.getBalance());
luckAccount.withdraw(110);
console.log("Saldo luckAccount: ", luckAccount.getBalance());

console.log("Saldo peopleoAccount: ",peopleAccount.getBalance());
peopleAccount.deposit(50)
console.log("Saldo peopleoAccount: ", peopleAccount.getBalance());
peopleAccount.setStatus();
peopleAccount.withdraw(50);
console.log("Saldo peopleoAccount: ", peopleAccount.getBalance());
peopleAccount.setStatus();
peopleAccount.deposit(50)
