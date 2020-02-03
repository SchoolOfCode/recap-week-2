/*
Part 1)
- Fetch data from this api https://dog.ceo/api/breeds/image/random
Part 2)
- Look at the data you are recieving and display the image in an alt tag
Part 3)
- Perform this action on the click of a button (or another event...)
*/

fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(d => console.log(d));
