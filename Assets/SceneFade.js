#pragma strict

var alphaFadeValue : float = 1;
var blackTexture : Texture;

var fadeOut : boolean = false;

var mySun : Transform;

var sceneName : String = "mySecondLevel";

function Start () {

}

function OnGUI () {
	if (fadeOut){
		if (alphaFadeValue<1) {
			alphaFadeValue += Mathf.Clamp01(Time.deltaTime / 5);
			mySun.GetComponent(AudioSource).volume -= Mathf.Clamp01(Time.deltaTime / 5);
		} else {
			Application.LoadLevel (sceneName);
		}
	} else if (alphaFadeValue>0){
		alphaFadeValue -= Mathf.Clamp01(Time.deltaTime / 5);
	}
	GUI.color = new Color(0, 0, 0, alphaFadeValue);
	GUI.DrawTexture( new Rect(0, 0, Screen.width, Screen.height ), blackTexture );
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Space)) {
		fadeOut = true;
	}
}