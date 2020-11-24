const array = new Array(10000).fill('Kranthi');

function findKran3(arr) {
  const timer1 = performance.now();

  for(let i=0; i < arr.length; i++) {
    if(arr[i] === 'Kranthi') {
      console.log('Founded Kranthi');
    }
  }
  const timer2 = performance.now();

  console.log(`Kranthi Timer ${timer2 - timer1} Time`)
}
findKran3(array)