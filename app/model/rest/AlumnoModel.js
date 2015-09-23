/**
 * @author christian portilla pauca
 */
Ext.define(
	'app18.model.rest.AlumnoModel',
	{
		extend: 'Ext.data.Model',
		fields:
			[
				{
					name:'id',
					type:'int'
				},
				{
					name:'nombres',
					type:'string'
				},
				{
					name:'apellidos',
					type:'string'
				},
				{
					name:'email',
					type:'string'
				},
				{
					name:'nacimiento',
					type:'string'
				}
			]		
	}	
);