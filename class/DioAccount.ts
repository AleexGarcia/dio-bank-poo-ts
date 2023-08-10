export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  public setStatus = (): void => {
    if (this.balance === 0) {
      this.status = this.status ? false : true;
    } else {
      console.log("Saldo deve ser igual a 0 para desativar a conta!");
    }
  };

  public getAccountNumber = (): number => {
    return this.accountNumber;
  };

  public getName = (): string => {
    return this.name
  };

  public deposit(value: number): void {
    if (this.validateStatus() && value > 0) {
      this.balance += value;
      console.log("Deposito realizado com sucesso!");
    }
  };

  public withdraw(value: number): void{
    if (value > 0 && this.validateStatus()) {
      if (this.balance >= value) {
        this.balance -= value;
        console.log("Saque efetuado com sucesso!");
        return;
      }
      console.log("Saldo insuficiente!");
    }
  };

  public getBalance(): number{
    return this.balance;
  };

  private validateStatus(): boolean{
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  };
}
