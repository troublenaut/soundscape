#pragma strict

var toggleColor : boolean = true;
var toggleLight : boolean = true;
var useRGB : boolean = false;
var randomizeColor : boolean = false;

var randomSpeed : float;
private var nextRandomizeTime : float = 1;

var myColor : Color = Color.white;

var R : float = 0;
var G : float = 0;
var B : float = 0;
var A : float = 0;

private var targetColor : Color;

var Ease : float = 1;

function Start () {
}

function Update () {
	//randomizes the color of the material/light
	if (randomizeColor) {
		//the following 'if' statement acts as a timer for when to randomize the color
		if (Time.time > nextRandomizeTime ) {
			nextRandomizeTime += randomSpeed;
			if (useRGB) {
				targetColor = Color(Random.value, Random.value, Random.value, Random.value);
			} else {
				myColor = Color(Random.value, Random.value, Random.value, Random.value);
			}
		}
	} else {
		targetColor = Color(R, G, B, A);
	}
	
	//changes the color of the material
	if (toggleColor) {
		if (useRGB) {
			renderer.material.color = Color.Lerp(renderer.material.color, targetColor, Time.deltaTime * Ease);
		} else {
		renderer.material.color = Color.Lerp(renderer.material.color, myColor, Time.deltaTime * Ease);
		}
	}
	
	//changes the color of the light, if a light component is attached to the gameobject
	if (GetComponent(Light) && toggleLight){
		if (useRGB) {
			GetComponent(Light).color = Color.Lerp(renderer.material.color, targetColor, Time.deltaTime * Ease);
		} else {
		GetComponent(Light).color = Color.Lerp(renderer.material.color, myColor, Time.deltaTime * Ease);
		}
	}
}