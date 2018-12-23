class Casino {


	constructor(slotMachineNumber, money) {
	this.slotMachine = [];
  	this.money = 0;
  	let moneyForSlot = money / slotMachineNumber;
  	for(let i = 0; i < slotMachineNumber; i++) {
    	this.slotMachine.push(new slotMachine(moneyForSlot));
    }
    console.log(moneyForSlot);
  }

  
  getMoney(money) {
  	this.money = money;
  }
  

  
  getSlotsNumber() {
  	return this.slotMachine.length;
  }
}

class slotMachine { 

	constructor(money) {
  	this.money = 0;
  }
  
  showMeTheMoney() {
  	return this.money;
  }
  
  reduceMoney(moneyToReduce) {
  	this.money = this.money - moneyToReduce;
  }
  
  increaseMoney(moneyToIncrease) {
  	this.money = this.money + moneyToIncrease;
  }
}

let casino = new Casino(5, 110);

console.log(casino.getMoney());

console.log(casino.getSlotsNumber());

casino.slotMachine[2].reduceMoney(10);