const weather = document.getElementById('weather')

const weather_report = document.createElement('div')

weather_report.textContent = 'Phan tu'


weather.addEventListener('mouseenter', function(){
    weather.appendChild(weather_report)
})


weather.addEventListener('mouseleave', function() {
    if(weather.contains(weather_report)) {
        weather.removeChild(weather_report)
    }
})






const weather1 = document.getElementById('weather1')

const weather1_report = document.createElement('div')

weather1_report.textContent = 'con me may'

weather1.addEventListener('mouseenter', function(){
    weather1.appendChild(weather1_report)
})


weather1.addEventListener('mouseleave', function() {
    if(weather1.contains(weather1_report)) {
        weather1.removeChild(weather1_report)
    }
})
