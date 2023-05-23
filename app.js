//button
const addbtn = document.querySelector("#addbtn")
//main 
const main = document.querySelector('#main');

const savenotes = () =>{
    const notes = document.querySelectorAll('.note textarea');
    const data=[];
    notes.forEach( //for loop
        //small function
        (i)=>{
        data.push(i.value)
        }
    )
    console.log(data)
    if(data.length === 0){
        localStorage.removeItem("name of local storage");
    }
    else{
        localStorage.setItem("name of local storage",JSON.stringify(data)) //stringyfy -> convert object 2 string
    }
    
}



addbtn.addEventListener(
    'click',
    function(){
        addnote();
    }
)


const addnote = (text = "") =>{
    const note = document.createElement('div');
    note.classList.add("note");
    note.innerHTML = `

    <div class="tool">
    <i class="save fas fa-save">Save</i>
    <i class="trash fas fa-trash">Delete</i>
  </div>
  <textarea placeholder="write your message here.....">${text}</textarea>

    `;
    
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove()
            savenotes()
        }
    )

    note.querySelector('.save').addEventListener(
        'click',
        function(){
            savenotes();
        }
      )


    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            savenotes()
        }
    )

    main.appendChild(note);




}
//self calling function

(
    function(){
        const item = JSON.parse(localStorage.getItem("name of local storage"));
       if (item === null){
        addnote()
       }else{
            item.forEach(
                (i)=>{
                    addnote(i)
                }
            )
       }
    }
)()
