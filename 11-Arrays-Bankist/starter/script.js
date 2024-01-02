'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Farouk Issa',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Maryam Issa',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Kafilat Issa',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Issa Issa',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const displayMovements: (movements: any) =>
//   void
// displayMovements(account1.movements)

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1
      }${type}</div>
    <div class="movements__value">${mov}₤</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })

}

// const user = 'Issa Farouk Olawale'//USerName === ifo
// const usernames = user.toLowerCase().split(' ')
//   .map((name) => name[0])
//   .join('')
// console.log(usernames)

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${balance}₤`;
};


const calcDisplaySummary = function (acc) {
  // const incomes = acc.movements
  //   // .filter(mov => mov > 0)
  //   .reduce((acc, mov) => acc + mov, 0);
  // labelBalance.textContent = `${incomes}₤`;

  // const out = acc.movements
  //   .filter(mov => mov < 0)
  //   .reduce((acc, mov) => acc + mov, 0);
  // labelSumOut.textContent = `${Math.abs(out)}₤`;

  const interest = accounts.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate / 100)).filter((int, i, arr) => {
    console.log(arr); ``
    return int >= 1;
  }).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}₤`

};
// calcDisplaySummary(currentAccount.movements)


const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  }

  )
};
createUserNames(accounts)

//Event Handler for Login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();
  console.log('I dey here');
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(currentAccount)
    //Display UI and a welcome message

    //Display balance
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    //clear the input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur()
    inputLoginUsername.blur();
    console.log('LOGIN!!');
    //Display Movement
    displayMovements(currentAccount.movements)

    calcDisplayBalance(currentAccount.movements)
    //Display summary
    calcDisplaySummary(currentAccount.movements)
    calcDisplayBalance(currentAccount.movements)

  }
})

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`)
// });

// const currenciesUnique = new Set(['usd', 'gbp', 'usd', 'eur']);
// console.log(currenciesUnique)
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`)
// });


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`In movement ${i + 1}:You've deposited the amount of ${movement} into your account`)
//   } else {
//     console.log(`You've withdraw the sum of ${Math.abs(movement)} from your account`)
//   }
// }

// console.log('========For Each====================😍😍😍😍')

// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} You've deposited the amount of ${movement} into your account`)
//   } else {
//     console.log(`You've withdraw the sum of ${Math.abs(movement)} from your account`)
//   }
// })

// const bankDepositSum = accounts.flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log('This is the bank deposit: ', bankDepositSum)
// /////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2))
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -1));
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE

// // console.log(arr.splice(2));
// // console.log('My Original array', arr);
// arr.splice(-1);

// console.log('my arr: ', arr);
// arr.splice(1, 2);
// console.log(arr);


const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30]

const eurTousd = 1.1;

//modern way of writing a call back function
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurTousd
// })
//Arrow function rquivalent
const movementsUSD = movements.map(mov => mov * eurTousd)

console.log(movements)
console.log(movementsUSD)
//Map keywords always gives us access to 3 parameters (1. The Index, The current element and the entire array)
//Another phylosophical solution/paradigm
const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurTousd)
console.log(movementUSDfor);

const movementsDescriptions = movements.map((mov, i) =>

  `Movement ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdraw'} ${Math.abs(mov)}`
)


console.log(movementsDescriptions)

//map retuen a new transformed array


//Filter method is used to filter for elements that satisfy some certain consition


const deposits = movements.filter(function (mov) {
  return mov > 0
})
console.log(deposits)
//Using the for loop instead of filter

const deposiFor = [];
for (const mov of movements) if (mov > 0) {
  deposiFor.push(mov)
}
console.log('Another Implementation:', deposiFor)


const withdrawals = movements.filter((mov) =>
  (mov < 0)
)
console.log((withdrawals))

//reduce method is used to boil down all the elements in an array to One Single Value
console.log(movements)
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`iteration ${i} : is ${acc}`)
  return acc + cur;
}, 0);
console.log(balance)

//Using a for loop to achieve the reduce functionality
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2)

// // REVERSE

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT;

// const letters = arr.concat(arr2);

// console.log(letters);
// console.log('arr 2😑😑😐😐', arr2)
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join('-'))

// const arr = ['23', '14', '64'];
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting the last element in an array
// console.log(arr.at(-1));
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// const arr = ([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));


// //Empty arrays with fill method
// const x = new Array(7);
// // console.log(x);
// // console.log(x.map(() => 5))
// x.fill(1, 3)
// console.log(x)

// arr.fill(23, 1, 6);
// console.log(arr);

// //Array.from
// const q = Array.from({ length: 7 }, () => 1);
// console.log(q);

// const z = Array.from({ length: 21 }, (_, i) => i + 1);
// console.log(z)

// const movementUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementUI)
