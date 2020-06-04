var tasks = [
    {name: 'Recoger setas en el campo', completed: false},
    {name: 'Comprar pilas', completed: true},
    {name: 'Poner una lavadora de blancos', completed: true},
    {name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false}
];


function pintarListaTares () {
    var html_task = "", cont_completa = 0, cont_por_realizar = 0;
    tasks.forEach( (task, index) =>{
        task.completed?cont_completa++:cont_por_realizar++;
        html_task += `<li class = "${task.completed?"completa":""}">${task.name}</li>
                        <input class = "tarea" type = "checkbox" ${task.completed?"checked":""} index = ${index}>  `;
    }); 
    $("#completadas span").html(cont_completa);
    $("#por_realizar span").html(cont_por_realizar)
    $("#lista_tares").html(html_task);
    
}



$(document).ready( (e) => {
	
    $(document).on('click', '.tarea', (e) => {
        tasks[e.target.getAttribute('index')].completed = e.target.checked?true:false;
        pintarListaTares();
    })
	
    $('#hola').click((e) => {
        alert("Diste click");
    });
    
    
    pintarListaTares ();
});