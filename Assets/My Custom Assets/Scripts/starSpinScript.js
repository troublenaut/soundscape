#pragma strict

var xSpeed : float = 0;
var ySpeed : float = 0;
var zSpeed : float = 0;

function Start () {

}

function Update () {
	//rotates whatever object this script is attached to
	transform.Rotate(new Vector3(xSpeed, ySpeed, zSpeed) * Time.deltaTime);
}