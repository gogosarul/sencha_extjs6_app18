/**
 * @author christian portilla pauca
 */
Ext.define('app18.view.ajax.AlumnoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'ajaxalumnogrid',

    requires: [
    	'app18.controller.ajax.AlumnoController',
        'app18.store.ajax.AlumnoStore'
    ],

    title: 'Usuarios',
    
    controller: 'ajaxalumno',

    store: {
        type: 'ajaxalumno'
    },

    columns: [
        { 
        	text: 'Id',  
        	dataIndex: 'id' 
        },
        { 
        	text: 'Nombres', 
        	dataIndex: 'nombres', 
        	flex: 1 
        },
        { 
        	text: 'Apellidos', 
        	dataIndex: 'apellidos', 
        	flex: 1 
        },
        { 
        	text: 'Email', 
        	dataIndex: 'email', 
        	flex: 1 
        },
        { 
        	text: 'Nacimiento', 
        	dataIndex: 'nacimiento', 
        	flex: 1 
        },    
        {
        	xtype:'widgetcolumn',
        	text:'Accion',
        	flex:1,
        	widget: {
    			xtype: 'button',
    			text:'Eliminar',
    			scale: 'small',
    			listeners: {
			        click: 'eliminarAlumno'
			    }        			
        	}
        	 	
        }
    ],

    listeners: {
        select: 'seleccionar'
    }
});
