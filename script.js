//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function(){
	var dropdown = document.getElementById("colorSelect");
	var selectedIndex = dropdown.selectedIndex;

	if(selectedIndex !== -1)
	{
		dropdown.remove(selectedIndex);
	}
});