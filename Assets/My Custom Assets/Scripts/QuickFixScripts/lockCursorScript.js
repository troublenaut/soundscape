#pragma strict

var lockToggle : boolean = true;

function Start () {

}

function Update () {
	
	//this script will lock the mouse cursor in the center of the screen and make it invisable
	//if you click on the game window, or if the game has just loaded
	
	//if you hit any key, or right click you get your cursor back and the script that controls looking around with the mouse
	//is disabled

	if (Input.anyKeyDown && Input.GetKeyDown(KeyCode.Space) == false) {
    	lockToggle = false;
    }
   	if (Input.GetMouseButton(0)) {
   		lockToggle = true;
    }
	Screen.lockCursor = lockToggle;
	GetComponent(typeof(SmoothMouseLook)).enabled = lockToggle;
}