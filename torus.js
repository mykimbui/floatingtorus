
var camera, scene, renderer;
var geometry, material, mesh;
var uniforms;


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.TorusGeometry( 10, 3, 16, 10 );
var material = new THREE.ShaderMaterial({ //where you call the shader
  uniforms: uniforms,
  vertexShader:   document.getElementById('vs').textContent,
  fragmentShader: document.getElementById('fs').textContent
});
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 30;

var animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();
