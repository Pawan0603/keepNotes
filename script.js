let titlec;
let notec;
let noteAdd;
let NoteAdd;

let getValue = () => {
    titlec = title.value
    notec = note.value
}
let LSdata = () => {
    noteAdd = localStorage.getItem("todo");
    NoteAdd = JSON.parse(noteAdd);
}

let ClearData = () => {
    document.getElementById("card").innerHTML = "";
}

let LoadData = () => {
    ClearData();
    LSdata();
    for (item in NoteAdd) {
        // console.log(NoteAdd[item])
        document.getElementById("card").innerHTML += `
            <div class="card" style="width: 18rem;">
              <div class="card-body" id="cardbody">
                <h5 class="card-title" id="card-title">${NoteAdd[item].title}</h5>
                <p class="card-text" id="card-text">${NoteAdd[item].note}</p>
                <button type="button" class="btn btn-danger" id="${item}" onclick="DelNote(${item})">Delete</button>
              </div>
            </div>
    `
        // console.log(`btn${item}`)

    }
}

saveNote.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("todo", JSON.stringify(NoteAdd))

    if (noteAdd == null) {
        getValue();
        localStorage.setItem("todo", JSON.stringify([{ title: titlec, note: notec }]))
        // console.log(noteAdd);
    }
    else {
        getValue();
        let localStorageAddNew = ({ title: titlec, note: notec })
        let localStorageAdded = NoteAdd.push(localStorageAddNew);
        localStorage.setItem("todo", JSON.stringify(NoteAdd))
    }

    LoadData();

})

deleteNote.addEventListener("click", () => {
    let conf = confirm("Do you want delete all node");
    if (conf == true) {
        localStorage.clear();
        LSdata();
        document.getElementById("card").innerHTML = "";
    }

})

LoadData();

let DelNote = (item) => {
    LSdata();
    // console.log(NoteAdd[item])
    // console.log(item)
    // console.log(NoteAdd)
    function arrayRemove(arr, value) {
        return arr.filter(function(geeks) {
            return geeks != value;
        });
    }
    var tempdata = arrayRemove(NoteAdd, NoteAdd[item]);
    // console.log(tempdata)
    localStorage.setItem("todo", JSON.stringify(tempdata))
    LoadData();
    // console.log("chal gaya delnoate") 
}

// LoadData();