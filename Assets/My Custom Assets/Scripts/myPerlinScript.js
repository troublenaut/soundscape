#pragma strict

var waveScale : float = 1;
var waveHeight : float = 1;
var yOffset : float = 0;

function Start () {

}

function Update () {
	//gets the mesh filter component of whatever gameobject the script is attached to
	var mesh : Mesh = GetComponent(MeshFilter).mesh;
	//makes an array with each vertex's positions in 3d space
	var vertices : Vector3[] = mesh.vertices;
	for (var i = 0; i < vertices.Length; i++) {
			//change the y position of each vertex in the object's mesh
			//to match the value of generated perlin noise values
			vertices[i].y = (waveHeight * Mathf.PerlinNoise(Time.time * (vertices[i].x * waveScale), Time.time * (vertices[i].z * waveScale))) + yOffset;
	}
	//update the gameobject's mesh so that it deforms during runtime
	mesh.vertices = vertices;
	mesh.RecalculateBounds();
}