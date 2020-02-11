let notes = getSavedNotes();

const filters = {
  searchText: ''
}

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function(e) {
  const id = uuid()
  notes.push({
    id: id,
    title: "",
    body: ""
  })
  saveNotes(notes);
   location.assign(`/edit.html#${id}`)
});




document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes,filters);
});

// document.querySelector('#name-form').addEventListener('submit',function(e){
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);  //we target the name value in HTML
//     e.target.elements.firstName.value = ''
// })

document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});
