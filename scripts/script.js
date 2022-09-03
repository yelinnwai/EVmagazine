// action for navbar
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('activate');
});

// home page highlight news objects
var news = {
  "articles": [
    {
      "grid": "one",
      "img-code": "1",
      "date": "Sept 15, 2022",
      "title": "India to add 5,000+ electric buses in 65 cities in ongoing massive EV push",
      "preview": "An Indian government committee has sanctioned 5,645 electric buses for 65 cities in one of the largest electric bus initiatives the world has seen outside of China."
    },
    {
      "grid": "two",
      "img-code": "2",
      "date": "Sept 13, 2022",
      "title": "BMW, Ford, Honda, and VW strike deal with California on vehicle emissions",
      "preview": "Four big automakers have cut a deal with California to adopt the state’s vehicle emissions rules in a compromise agreement, bypassing the Trump administration’s plan."
    },
    {
      "grid": "three",
      "img-code": "3",
      "date": "Aug 1, 2022",
      "title": "Warsaw orders 130 articulated electric buses from Solaris to replace diesel buses",
      "preview": "Warsaw has placed an order for 130 articulated electric buses from Polish bus maker Solaris in one of the largest European orders for e-buses to date."
    },
    {
      "grid": "four",
      "img-code": "4",
      "date": "Jul 25, 2022",
      "title": "America’s first fast and affordable 45 mph electric scooter is finally here",
      "preview": "The Wiz electric scooter is a quick and sporty two-seater designed for tooting around cities and suburbs. And starting this week it will be making deliveries across the US."
    },
    {
      "grid": "five",
      "img-code": "5",
      "date": "June 7, 2022",
      "title": "CUPRA teases new all-electric concept crossover before Frankfurt debut",
      "preview": "CUPRA has teased its first all-electric vehicle ahead of its official debut at the Frankfurt motor show next month."
    },
    {
      "grid": "six",
      "img-code": "6",
      "date": "June 20, 2022",
      "title": "VW prepares Zwickau factory for 330,000 all-electric cars per year",
      "preview": "VW is converting its entire Zwickau factory to electric vehicle production, and as it prepares for the start of ID3 production later this year."
    },
  ]
}

$(document).ready(function() {
  var newsTemplate = $("#highlight-news-template").html();
  var compliedCharacterTemplate = Handlebars.compile(newsTemplate);
  $(".highlight-news").html(compliedCharacterTemplate(news));
});
