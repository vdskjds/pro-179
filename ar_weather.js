let coodinates={}

$(document).ready(function(){
    get_coordinates()
    render_elements()
})

function get_coordinates(){
    let searchParams = new URLSearchParams(window.location.sreach)
    if(sreachParams.has('source')&&sreachParams.has('destination')){
        let source=sreachParams.get('source')
        let destination=sreachParams.get('destination')
        coodinates.source_lat=source.split(";")[0]
        coodinates.source_lng=source.split(";")[1]
        coodinates.destination_lat=destination.split(";")[0]
        coodinates.destination_lng=destination.split(";")[1]
    }else{
        alert("Coordinates not selected!")
        window.history.back()
    }
}

$(function(){
    $("#navigated-button").click(function(){
        window.location.href=`ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})