var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');



//Form submit event

form.addEventListener('submit',addItem);

//Delete event 
itemList.addEventListener('click',removeItem);

//Filter Event
filter.addEventListener('keyup',filterItems);

//Filter Function
function filterItems(e){
    
    //converts text to lowercase
    var text=e.target.value.toLowerCase();
    // console.log(text)
    var items=itemList.getElementsByTagName('li');
   
    //Convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none'
        }

        console.log(itemName)
    })
}

//Remove Function

function removeItem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Add item

function addItem(e){
    e.preventDefault();
     
    //Get Input Value

    var newItem=document.getElementById('item');

    //Create new li element

    var li=document.createElement('li');
    li.className='list-group-item';
    
    //Add text node with Input Value
    li.appendChild(document.createTextNode(newItem.value));

    //Create Delete Button Element

    var deleteBtn=document.createElement('button');
    
    //Add classes to del Button
    deleteBtn.className='btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append to li
    li.appendChild(deleteBtn);

    //Append to itemList
    itemList.appendChild(li);
    newItem.value='';

    console.log(li)
}