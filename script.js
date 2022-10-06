'use strict';
const div = document.getElementById('tasks')
const input = document.getElementById('input')
const button = document.getElementById('btn_add')
const button_del_all = document.getElementById('btn_del_all')
const btn_del_complete_tasks = document.getElementById('btn_del_complete_tasks')

input.addEventListener('input', getInput)
function getInput() {
    const val = document.querySelector('input').value;
    return val;
}

    
button.addEventListener('click', create_task)


function create_task() {
        
        const div_task = document.createElement('div')
        div_task.style.padding = '24px'
        const input_checkbox = document.createElement('input')
        input_checkbox.type = 'checkbox'
        input_checkbox.style.cursor = 'pointer'
        const p = document.createElement('p')
        p.textContent = getInput()
        p.style.width = '500px'
        p.style.textAlign = 'left'
        const button_cross = document.createElement('button')
        button_cross.textContent = '❌'
        button_cross.style.border = 'none'
        button_cross.style.backgroundColor = '#ffffff'
        button_cross.style.cursor = 'pointer'
        div_task.style.display = 'flex'
    div_task.style.justifyContent = 'space-between'
        if (input.value === "") {
            button.removeEventListener(); 
        }
        if (input !== 0) { list_delete.style.display = 'flex'; }
        
btn_del_all.addEventListener('click', del_all)
function del_all() {
    div.innerHTML = '';
    list_delete.style.display = 'none'
}
        btn_del_complete_tasks.addEventListener('click', del_task)
        function del_task() { 
    if (input_checkbox.checked) {div_task.outerHTML = ""}
}
        button_cross.addEventListener('click', del_cross)
        function del_cross() {
            div_task.outerHTML = ""
    }  
    
        div_task.append(input_checkbox)
        div_task.append(p)
        div_task.append(button_cross)
        div.append(div_task)
    return div

}
