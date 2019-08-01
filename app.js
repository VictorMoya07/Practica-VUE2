const app = new Vue({
    el:'#app',
    data:{
        titulo:'TAREAS QUE HACER',
        tareas:[],
        nuevaTarea:''

    },
    methods:{
    agregarTarea: function(){
         this.tareas.push({
             nombre: this.nuevaTarea,
             estado: false
         });
         this.nuevaTarea =' ';
         localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },
    editarTarea:function(index){
            this.tareas[index].estado=true;
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },
    eliminarTarea:function(index){
            this.tareas.splice(index ,1);
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
    }
    },
    created:function(){
        let datosDB = JSON.parse(localStorage.getItem("tareas-vue"));
        if(datosDB===null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }

    }

});