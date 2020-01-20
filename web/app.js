var camera, scene, renderer;
			//var mesh;
			var id = 0;
			var lookAtObjectId = 8;
			var speed = 1;
			var _position = {x:0, y:0, z:0};
			var _move = {up:false, down:false, left:false, right:false};
			
			 // write to file test
				    $(window).keypress(function (e) {
                    var data = _position;
                    $.ajax({
                        url: 'http://localhost:59091',
						type: 'POST',
						//async: true,
                        data: { 
							id: lookAtObjectId, 
							x: _position.x, 
							y: _position.y, 
							z: _position.z,  
						},
                        //data: $(window)._position,
                        success: function(result) {
                            console.log('the data was successfully sent to the server');
                            //return data;
                        }
					});
					$.ajax({
						url: 'http://localhost:59091',
						type: 'GET',
						success: function(res) {
							console.log(res);
							//alert(res);
						}
					});
                    });
			
			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 400;
				
				scene = new THREE.Scene();
				
				


				var size = 1000, divisions = 100;
				var gridHelper = new THREE.GridHelper(size, divisions);
				gridHelper.rotation.x = -40;
				scene.add( gridHelper );

				scene.add( new createObject() );
				scene.add( new createObject() );
						
			

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				//

				window.addEventListener( 'resize', onWindowResize, false );
				
				window.addEventListener( 'keydown', function(e) {				
				    //console.log( e.keyCode );
				    // W - 87 move up
				    // S - 83 down
				    // A - 65 left
				    // D - 68 right
				    switch (e.keyCode) {
				        case 87: 
				            //scene.getObjectById(lookAtObjectId).position.x += speed;
				            //break;
				            _move.up	= true;	
				            break;		            
				        case 83:
				            //scene.getObjectById(lookAtObjectId).position.x -= speed;
				            //break;
				            _move.down	= true;	
				            break;
				        case 65:
				            //scene.getObjectById(lookAtObjectId).position.z += speed;
				            //break;
				            _move.left	= true;	
				            break;
				        case 68:  
				            //scene.getObjectById(lookAtObjectId).position.z -= speed;
				            //break;
				            _move.right	= true;	
				            break;
				    }
				    
				    //console.log(document.body);
				    
				   

				    
				}, false );
			
				window.addEventListener( 'keyup', function(e) {
				    switch (e.keyCode) {
				        case 87: 
				            _move.up	= false;	
				            break;		            
				        case 83:
				            _move.down	= false;
				            break;	
				        case 65:
				            _move.left	= false;
				            break;	
				        case 68:  
				            _move.right	= false;
				            break;	
				    }
				}, false );

			}		
			
			function createObject() {
			    var geometry = new THREE.BoxBufferGeometry( 50, 50, 50 );
				var material = new THREE.MeshBasicMaterial( { color: 'yellow' } );
				material.wireframe = true;
                
				var mesh = new THREE.Mesh( geometry, material );
				mesh.id = (++id);
				//console.log(mesh.id);
				
				return mesh;
			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {

				requestAnimationFrame( animate );

				//mesh.rotation.x += 0.005;
				//mesh.rotation.y += 0.01;
				//scene.getObjectById(8).position.x += (Math.sin(0.1));
				scene.getObjectById(9).position.y += 0.1;
				scene.getObjectById(9).rotation.z -= 0.01;
				//console.log();
				
				if (_move.up) {
				    _position.z -= speed;
				}
				if (_move.down) {
				    _position.z += speed;
				}
				if (_move.left) {
				    _position.x -= speed;
				}
				if (_move.right) {
				    _position.x += speed;
				}
				
				scene.getObjectById(lookAtObjectId).position.x = _position.x;
				scene.getObjectById(lookAtObjectId).position.y = _position.y;
				scene.getObjectById(lookAtObjectId).position.z = _position.z;
				
        	    camera.lookAt(scene.getObjectById(lookAtObjectId).position);
        	  	//console.log(scene.getObjectById(8).position);
				renderer.render( scene,  camera);

			}
