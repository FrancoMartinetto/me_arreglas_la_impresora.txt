document.addEventListener('DOMContentLoaded', function () {
  // your marvelous code here
});
function emptyBoard() {
  console.log('click');
  const preLoaderOne = document.querySelector('#pre_loader_1');
  const preLoaderTwo = document.querySelector('#pre_loader_2');
  preLoaderOne.classList.add('loaded');
  preLoaderTwo.classList.add('loaded');
}
