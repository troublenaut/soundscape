#pragma strict

var myTimeScale : float = 1;

function Start () {

}

function Update () {
	//changes the speed of time in the scene
	Time.timeScale = myTimeScale;
}