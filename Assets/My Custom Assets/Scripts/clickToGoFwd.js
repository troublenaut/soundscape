#pragma strict

private var currSpeed : float = 0;
var maxSpeed : float = 1;
var myAccel : float = 0.1;

function Start () {

}

function Update () {
	//if the left mouse button is down, 
	//increase the current speed variable by my acceleration variable.
	//otherwise, decrease the speed variable by the same amount
	if (Input.GetMouseButton(0)) {
		if (currSpeed < maxSpeed) {
			currSpeed += myAccel;
		}
	} else {
		if (currSpeed > 0) {
			currSpeed -= myAccel;
		}
	}
	
	if (currSpeed < 0){
		currSpeed = 0;
	}
	
	//move the object forward by the current speed variable
	transform.Translate (Vector3.forward * currSpeed);
	//https://docs.unity3d.com/Documentation/ScriptReference/Transform.Translate.html
}