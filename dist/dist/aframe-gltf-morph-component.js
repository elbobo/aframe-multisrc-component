AFRAME.registerComponent('gltf-morph', {

  multiple: true,

  schema:{
    morphtarget: {type: 'string', default: ''},
    value: {type: 'number', default: 0},
  },//end schema

  init: function(){

    //make sure object3D is set at first
    this.el.addEventListener('object3dset', () =>{ 
      
      //run morpher function
      this.morpher()

    });

  },//end init
  
  update: function(){
    
    //run morpher function
    this.morpher()
    
  },//end update

  morpher: function(){
    
    //get the mesh
    var mesh = this.el.object3D
    
    //traverse it looking for morphtargets and targetnames
    mesh.traverse((o) => {

      //if morphtargets exist & targetNames exist
      if ( o.morphTargetInfluences && o.userData.targetNames ){

        //store the array position of the passed targetname
        var pos = o.userData.targetNames.indexOf(this.data.morphtarget);

        //target that morphtarget and update value
        o.morphTargetInfluences[pos] = this.data.value

      }//end if

    });//end traverse
    
  },//end morpher

})//end morph