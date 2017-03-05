
var visitor_age;

function main()
{
	$('.Age_Input').on("submit", Entered_Age())
}


function Entered_Age( entered_age )
{
	if ( isNaN(entered_age) )
	{
		alert('Uh, sorry but ' + entered_age + ' is not a number. That/s very confusing.');
		return;
	}
	
	$('.Age_Input').hide();
	
	if ( entered_age >= 25 )
	{
		$('.expired_walrus').show();
		$('.walrus_longevity').show();
	}
	else
	{
		$('.walrus_longevity').show();
	}
}