var list = document.getElementById('list');

        function addItem() {
            
            var input = document.getElementById('inpu');
            var li = document.createElement('li');
             // Checkbox
             var checkbox = document.createElement('input');
             checkbox.type = 'checkbox';
             checkbox.addEventListener('change', function () {
                 if (this.checked) {
                     li.classList.add('completed');
                 } else {
                     li.classList.remove('completed');
                 }
             });
             li.appendChild(checkbox);
            var liText = document.createTextNode(input.value);

            li.appendChild(liText);
            // Edit button
            var editBtn = document.createElement('button');
            var editBtnText = document.createTextNode('EDIT');
            editBtn.appendChild(editBtnText);
            editBtn.setAttribute("onclick", 'edit(this)');
            li.appendChild(editBtn);


            



            
        
            
            
            
            // Delete button
            var delBtn = document.createElement('button');
            var btnText = document.createTextNode('DELETE');
            delBtn.appendChild(btnText);
            delBtn.setAttribute("onclick", "del(this)");
            delBtn.setAttribute('class', 'color');
            li.appendChild(delBtn);

            

            list.appendChild(li);
            input.value = "";
        }

        function del(h) {
            h.parentNode.remove();
        }

        function delAll() {
            list.innerHTML = '';
        }

        
        function edit(e) {
            var updatedValue = prompt('Enter updated value', e.parentNode.childNodes[1].nodeValue);
        
            
            if (updatedValue !== null) {
               
                var newText = document.createTextNode(updatedValue);
        
               
                e.parentNode.replaceChild(newText, e.parentNode.childNodes[1]);
            }
        }
        