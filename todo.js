var ul = document.getElementById('list');
var li  = document.getElementById('mycheck');


var addButton = document.getElementById('Add');
addButton.addEventListener('click' , addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click' , removeItem);


function addItem () {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(item);

    if (item === '') {
        return alert('Enter the credentials please!!!');
        
    }else{
        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id' , 'check');
        
        //create lable
        var lable = document.createElement('label');

        //adding all the elements to the web page
        ul.appendChild(lable);
        li.appendChild(checkbox);
        lable.appendChild(textNode);
        li.appendChild(lable);
        ul.insertBefore(li , ul.childNodes[0]);
        

        setTimeout(() => {
            li.className = 'visual';
        }, 5);

       input.value = ''
        
    }
}

function removeItem () {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
        
    }
}