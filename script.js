var tasks = [
    {name: 'Recoger setas en el campo', completed: true},
    {name: 'Comprar pilas', completed: true},
    {name: 'Poner una lavadora de blancos', completed: true},
    {name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false}
];


function pintarListaTares () {
    var html_task = "";
    tasks.forEach( (task, index) =>{
        if(task.completed)
            html_task += `<li class = "completa">${task.name}</li>
                        <input type = "checkbox" checked disabled index = ${index}>  `;
        else
            html_task += `<li>${task.name}</li>
                        <input type = "checkbox" index = ${index} class = "tarea"> `;
    }); 

    document.querySelector("#lista_tares").innerHTML = html_task;
    
    if(document.querySelector('.tarea') != null){
        document.querySelector('.tarea').addEventListener('click', (e) => {
            if(e.target.checked){
                var idBuscar = e.target.getAttribute('index') ;
                tasks = tasks.map( (task, index) => {
                    if(idBuscar ==  index)
                        task.completed = true;
                    return task;
                });
                pintarListaTares();
            }
        });
    }
}

pintarListaTares () ;