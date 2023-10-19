const array = [];

function lisaaNimi() {
  // Onko tyhjä
  if (nameInput === "") {
      alert("Nimi ei voi olla tyhjä");
      return;
  }
  // declare input, list, and list child to be added
  var nameInput = document.getElementById('nameInput');
  var ul = document.getElementById('list');
  var li = document.createElement('li');

  // place input into array
  array.push(nameInput.value);
  // initialize list child with name and id, then add it to list
  li.setAttribute('id', nameInput.value);
  li.appendChild(document.createTextNode(nameInput.value));
  ul.appendChild(li);
  console.log(array);
}

function poistaNimi() {
  // declare input, list, and list child to be deleted
  var nameInput = document.getElementById('nameInput');
  var ul = document.getElementById('list');
  var li = document.getElementById(nameInput.value);

  // remove from array
  var index = array.indexOf(nameInput.value);
  if (index > -1) {
    array.splice(index, 1);

    ul.removeChild(li);
    console.log(array);
  }
}

function jarjestaNimi() {
  array.sort();

  // required variables
  var list_item, i, run, li, stop;

  // Get list elements and make a list-to-be-sorted
  list_item = document.getElementById('list');


  run = true;
  while (run) {
    run = false;
    li = list_item.getElementsByTagName('LI');

    // Iterate through all list items
    for (i = 0; i < li.length - 1; i++) {
      stop = false;
      // if next item is shorter than current, set Stop True
      if (li[i].innerHTML.toLowerCase() > li[i + 1].innerHTML.toLowerCase()) {
        stop = true;
        break;
      }
    }
    // if stop True, place next list item before current item
    if (stop){
      li[i].parentNode.insertBefore(li[i + 1], li[i]);

      // forgetting this causes script to not to loop
      run =true;
    }
  }
  console.log(array);
}
