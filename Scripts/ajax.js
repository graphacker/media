/// <reference path="../typings/jquery/jquery.d.ts" />

/** Finans Widget */

$.ajax({
    headers: {
        'Access-Control-Allow-Origin': 'http://www.doviz.com/api/v1/currencies/USD/latest',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Expose-Headers': 'FooBar',
        'Access-Control-Allow-Methods': 'GET',
    },
    type: 'GET',
    datatype: 'JSONp',
    crossDomain: 'TRUE',
    url: 'http://www.doviz.com/api/v1/currencies/all/latest',
    timeout: 30000,
    success: function (data) {
        var dolar = data[0].selling;
        var change_rate_dolar = data[0].change_rate;
        var euro = data[1].selling;
        var change_rate_euro = data[1].change_rate;
        if(change_rate_dolar < 0){
           $('.dolar').css('color','#ec2142');
        }
        else if (change_rate_dolar === 0){
            $('.dolar').css('color','gray');
        }
         if(change_rate_euro < 0){
           $('.euro').css('color','#ec2142');
        }
        else if (change_rate_euro === 0){
            $('.euro').css('color','gray');
        }
        $('.dolar').text(dolar.toFixed(3));
        $('.diss-doviz').first().text(change_rate_dolar.toFixed(2));
        $('.euro').text(euro.toFixed(3));
        $('.diss-doviz').last().text(change_rate_euro.toFixed(2));
    },
    error: function () {
       console.log('Döviz Kurları Sunucusuna Ulaşılamıyor !');
    }
});

////////////// FINANS WIDGET SON //////////////////////

////////////// HAVA DURUMU //////////////////////

$(function(){
$.ajax({
    type: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Sakarya&units=metric&lang=tr&appid=3f2731d25679ccc98e8280a3b0fff931',
    timeout: 30000,
    success: function (data) {

        var sicaklik = parseInt(data.main.temp);
        $(".sicaklik").html(sicaklik + '° C');

        var nem = parseInt(data.main.humidity);
        $(".nem").text('Nem :' + nem);

        var aciklama = data.weather[0].description;
        $(".aciklama").html(aciklama);

        var durum = data.weather[0].main;

        if (durum === 'Clouds') {
            $(".icon").find('i').addClass('wi-cloud');
        }
        else if (data.weather[0].main === 'Cloudy') {
           $(".icon").find('i').addClass('wi-cloudy');
        }
        else if (data.weather[0].main === 'Rain') {
           $(".icon").find('i').addClass('wi-rain');
        }
        else if (data.weather[0].main === 'Clear') {
            $(".icon").find('i').addClass('wi-day-sunny');
        }
        else if (data.weather[0].main === 'Drizzle') {
            $(".icon").find('i').addClass('wi-day-sleet');
        }
        else if (data.weather[0].main === 'Wind') {
           $(".icon").find('i').addClass('wi-day-windy');
        }
        else {
            $(".icon").find('i').addClass('wi-cloud');
        }
    },
    error: function () {
        console.log('Hava Durumu Bilgileri Sunucusuna Ulaşılamıyor !');
    }
});
});
////////////// HAVA DURUMU SON //////////////////////

$.ajax({
    type: 'GET',
    // url: 'http://www.namazvakitleri.namazdefteri.com/index.php?islem=getNamazVakitleri&ulke_id=2&sehir_id=565&ilce_id=9807',
    timeout: 30000,
    success: function (namaz) {
        var Aksam = namaz[0].Aksam;
        var zaman = new Date();
        var saat = parseInt(zaman.getHours());
        var dakika = parseInt(zaman.getMinutes());

        var aksamezani = Aksam.split(":");
        var aksamezanisaat = parseInt(aksamezani[0]);
        var aksamezanidakika = parseInt(aksamezani[1]);

        if (aksamezanidakika < dakika) {
            var kalansaat = aksamezanisaat - saat - 1;
            var kalandakika = aksamezanidakika - dakika + 60;
        } else if (aksamezanidakika > dakika) {
            var kalandakika = aksamezanidakika - dakika;
            var kalansaat = aksamezanisaat - saat;
        } else {
            var kalandakika = 0;
            var kalansaat = 0;
        }


        (function iftarLoop(kalansaat, kalandakika) {
            $(".iftar_saat").html(kalansaat);
            $(".ifar_dakika").html(kalandakika);
            setTimeout(function () {
                kalandakika = kalandakika - 1;
                if (kalandakika === -1) {
                    kalandakika = 59;
                    kalansaat--;
                }
                if (kalandakika == 0 && kalansaat == 0) {

                    $(".iftar").html("Afiyet Olsun");
                    return false;
                } else {
                    iftarLoop(kalansaat, kalandakika);
                }
            }, 60000)
        })(kalansaat, kalandakika);
    },
    error: function () {
        console.error("Hata İle Karşılaşıldı");
    }
});
///////////// İFTAR ZAMANI //////////////////////////
