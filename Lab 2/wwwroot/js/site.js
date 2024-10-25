//const uri = 'api/todoitems';
//let todos = [];

//function getItems() {
//    fetch(uri)
//        .then(response => response.json())
//        .then(data => _displayItems(data))
//        .catch(error => console.error('Unable to get items.', error));
//}

//function addItem() {
//    const addNameTextbox = document.getElementById('add-name');
//    const addCompletionDateTextbox = document.getElementById('add-completionDate');

//    // Check if the value is being correctly captured
//    console.log('Completion Date Input Value:', addCompletionDateTextbox.value);

//    const item = {
//        isComplete: false,
//        completionDate: addCompletionDateTextbox.value ? new Date(addCompletionDateTextbox.value) : null,
//        name: addNameTextbox.value.trim()
//    };

//    console.log('Item object:', item);

//    fetch(uri, {
//        method: 'POST',
//        headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(item)
//    })
//        .then(response => response.json())
//        .then(() => {
//            getItems();
//            addNameTextbox.value = '';
//            addCompletionDateTextbox.value = '';
//        })
//        .catch(error => console.error('Unable to add item.', error));
//}

//function deleteItem(id) {
//    fetch(`${uri}/${id}`, {
//        method: 'DELETE'
//    })
//        .then(() => getItems())
//        .catch(error => console.error('Unable to delete item.', error));
//}

//function displayEditForm(id) {
//    const item = todos.find(item => item.id === id);

//    document.getElementById('edit-name').value = item.name;
//    document.getElementById('edit-id').value = item.id;
//    document.getElementById('edit-isComplete').checked = item.isComplete;
//    document.getElementById('edit-completionDate').value = item.completionDate ? new Date(item.completionDate).toISOString().substring(0, 10) : '';
//    document.getElementById('editForm').style.display = 'block';
//}

//function updateItem() {
//    const itemId = document.getElementById('edit-id').value;
//    const item = {
//        id: parseInt(itemId, 10),
//        isComplete: document.getElementById('edit-isComplete').checked,
//        name: document.getElementById('edit-name').value.trim(),
//        completionDate: document.getElementById('edit-completionDate').value ? new Date(document.getElementById('edit-completionDate').value) : null
//    };

//    fetch(`${uri}/${itemId}`, {
//        method: 'PUT',
//        headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(item)
//    })
//        .then(() => getItems())
//        .catch(error => console.error('Unable to update item.', error));

//    closeInput();

//    return false;
//}

//function closeInput() {
//    document.getElementById('editForm').style.display = 'none';
//}

//function _displayCount(itemCount) {
//    const name = (itemCount === 1) ? 'to-do' : 'to-dos';

//    document.getElementById('counter').innerText = `${itemCount} ${name}`;
//}

//function _displayItems(data) {
//    const tBody = document.getElementById('todos');
//    tBody.innerHTML = '';

//    _displayCount(data.length);

//    const button = document.createElement('button');

//    data.forEach(item => {
//        let isCompleteCheckbox = document.createElement('input');
//        isCompleteCheckbox.type = 'checkbox';
//        isCompleteCheckbox.disabled = true;
//        isCompleteCheckbox.checked = item.isComplete;


//        let editButton = button.cloneNode(false);
//        editButton.innerText = 'Edit';
//        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

//        let deleteButton = button.cloneNode(false);
//        deleteButton.innerText = 'Delete';
//        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

//        let tr = tBody.insertRow();

//        let td1 = tr.insertCell(0);
//        td1.appendChild(isCompleteCheckbox);

//        let td2 = tr.insertCell(1);
//        let completionDateNode = document.createTextNode(item.completionDate ? new Date(item.completionDate).toLocaleDateString() : 'N/A'); 
//        td2.appendChild(completionDateNode);

//        let td3 = tr.insertCell(2);
//        let textNode = document.createTextNode(item.name);
//        td3.appendChild(textNode);

//        let td4 = tr.insertCell(3);
//        td4.appendChild(editButton);

//        let td5 = tr.insertCell(4);
//        td5.appendChild(deleteButton);
//    });

//    todos = data;
//}