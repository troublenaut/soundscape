#pragma strict

var lockToggle : boolean = true;

function Start () {
	lockToggle = false;
	Screen.lockCursor = lockToggle;
}

function Update () {

}