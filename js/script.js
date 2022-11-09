const movieQuote = [
  // Don Corleone quotes
  { movie: "The Godfather", quote: "I'm going to make him an offer he can't refuse", character: "Vito Corleone" },
  { movie: "The Godfather", quote: "The lawyer with the briefcase can steal more money than the man with the gun", character: "Vito Corleone" },
  { movie: "The Godfather", quote: "I'm going to make him an offer he can't refuse", character: "Vito Corleone" },
  { movie: "The Godfather", quote: "I swear, on the souls of my grandchildren, that I will not be the one to break the peace we have made here today.", character: "Vito Corleone" },
  { movie: "The Godfather", quote: "You have to take time and trouble.", character: "Vito Corleone" },
  { movie: "The Godfather", quote: "I'm not interested in things that don't concern me.", character: "Vito Corleone" },
  { movie: "The Godfather", quote: "A man who doesn't spend time with his family can never be a real man.", character: "Vito Corleone" },
  { movie: "The Godfather", quote: "And if by chance an honest man like yourself should make enemies then they would become my enemies... and then they will fear you.", character: "Vito Corleone" },
  { movie: "The Godfather", quote: "A friend should always underestimate your virtues and an enemy overestimate your faults.", character: "Vito Corleone" },
  { movie: "The Godfather Part II", quote: "My father's name was Antonio Andolini, and this is for you! ", character: "Vito Corleone" },


  // Michael Corleone quotes
  { movie: "The Godfather", quote: "I respect those who tell me the truth no matter how hard it is.", character: "Michael Corleone" },
  { movie: "The Godfather Part II", quote: "Soldiers are paid to fight. The rebels aren't.", character: "Michael Corleone" },
  { movie: "The Godfather Part II", quote: "See, all our people are businessmen. Their loyalty's based on that. One thing I learned from Pop was to try to think as people around you think. And on that basis, anything's possible.", character: "Michael Corleone" },
  { movie: "The Godfather Part II", quote: "I don't feel I have to wipe everybody out, Tom. Just my enemies.", character: "Michael Corleone" },
  { movie: "The Godfather Part II", quote: "My father taught me many things here - he taught me in this room. He taught me: keep your friends close, but your enemies closer.", character: "Michael Corleone" },
  { movie: "The Godfather Part II", quote: "I know it was you, Fredo. You broke my heart. You broke my heart!", character: "Michael Corleone" },
  { movie: "The Godfather Part II", quote: "If anything in this life is certain, if history has taught us anything, it is that you can kill anyone.", character: "Michael Corleone" },
  { movie: "The Godfather Part II", quote: "Fredo, you're nothing to me now. You're not a brother, you're not a friend. I don't want to know you or what you do. I don't want to see you at the hotels, I don't want you near my house. When you see our mother, I want to know a day in advance, so I won't be there.", character: "Michael Corleone" },
  { movie: "The Godfather Part II", quote: "He's has been dying from the same heart attack for the last twenty years.", character: "Michael Corleone" },
  { movie: "The Godfather Part III", quote: "Never hate your enemies. It affects your judgment.", character: "Michael Corleone" },
  { movie: "The Godfather Part III", quote: "Just when I thought I was out... they pull me back in.", character: "Michael Corleone" },
  { movie: "The Godfather Part III", quote: "Friends and money - oil and water.", character: "Michael Corleone" },
  { movie: "The Godfather Part III", quote: "When they come... they come at what you love.", character: "Michael Corleone" },

  // Kay quotes
  { movie: "The Godfather Part II", quote: 'It made me think of what you once told me: "In five years the Corleone family will be completely legitimate." That was seven years ago.', character: "Kay Corleone" },
  { movie: "The Godfather Part II", quote: "They're my children too.", character: "Kay Corleone" },

  // Fredo Quotes
  { movie: "The Godfather Part II", quote: "It ain't the way I wanted it! I can handle things! I'm smart! Not like everybody says... like dumb... I'm smart and I want respect!", character: "Fredo Corleone" },
  { movie: "The Godfather Part II", quote: "How do you say 'banana daiquiri'?", character: "Fredo Corleone" },
  { movie: "The Godfather Part II", quote: "That's for you to find out.", character: "Fredo Corleone" },
  { movie: "The Godfather Part II", quote: "Every time I said a Haily Mary, I caught a fish.", character: "Fredo Corleone" },
  { movie: "The Godfather Part II", quote: "Send Fredo off to do this, send Fredo off to do that!", character: "Fredo Corleone" },

  // Clemenza quotes

  { movie: "The Godfather", quote: "You know, Mike, you're gonna turn out all right.", character: "Peter Clemenza" },
  { movie: "The Godfather", quote: "They should have stopped Hitler at Munich.", character: "Peter Clemenza" },
  { movie: "The Godfather", quote: "Leave the gun. Take the cannoli.", character: "Peter Clemenza" },

  // Luca quotes
  { movie: "The Godfather", quote: "I'm going to leave you now because I know that you are busy on this, the day of your daughter's wedding.", character: "Luca Brasi" },
  { movie: "The Godfather", quote: "Don Corleone, I am honored and grateful that you have invited me to your daughter's wedding...on the day of your daughter's wedding. And I hope their first child be a masculine child. I pledge my never-ending loyalty.", character: "Luca Brasi" },

  // Sonny Quotes

  { movie: "The Godfather", quote: "We're going to the mattresses.", character: 'Santino “Sonny” Corleone' },
  { movie: "The Godfather", quote: "You gotta get them close like this, and badda-bing, you blow their brains all over your nice Ivy League suit.", character: 'Santino “Sonny” Corleone' },

  // Sollozzo
  { movie: "The Godfather", quote: "I don't like violence, Tom. I'm a businessman. Blood is a big expense.", character: 'Virgil Sollozzo' },

  // Hyman Quotes

  { movie: "The Godfather Part II", quote: "I'm going to take a nap. When I wake up, if the money is on the table, I'll know I have a partner. If it isn't, I'll know I don't.", character: 'Hyman Roth' },
  { movie: "The Godfather Part II", quote: "Good health is the most important thing. More than success, more than money, more than power.", character: 'Hyman Roth' },
  { movie: "The Godfather Part II", quote: "I'd give four million just to be able to take a piss without it hurting.", character: 'Hyman Roth' },

  // Connie Quotes

  { movie: "The Godfather Part II", quote: "I hated you for so many years. I think that I did things to myself, to hurt myself so that you'd know - that I could hurt you.", character: 'Connie Corleone' },
  { movie: "The Godfather", quote: "Papa never talked about business in front of the kids.", character: 'Connie Corleone' },

  // Tom Quotes
  { movie: "The Godfather", quote: "Italians have a little joke, that the world is so hard a man must have two fathers to look after him, and that's why they have godfathers.", character: 'Tom Hagen' },
  { movie: "The Family Corleone", quote: "I'm not sure I'm entirely representative of my family.", character: 'Tom Hagen' },
  { movie: "The Godfather", quote: "I have a special practice. I handle one client.", character: 'Tom Hagen' },
  { movie: "The Godfather", quote: "No Sicilian can ever refuse a request on his daughter's wedding day.", character: 'Tom Hagen' },
  { movie: "The Godfather", quote: "Can't do it, Sally.", character: 'Tom Hagen' },
  { movie: "The Godfather", quote: "Mr. Corleone never asks a second favor once he's refused the first, understood?", character: 'Tom Hagen' },
  { movie: "The Godfather", quote: "You owe your don a service. He has no doubt that you will repay him.", character: 'Tom Hagen' },
];

let selectedQuote = getQuote();


$(function () {
  $("#navbar").load("\\nav.html");
});


$(function () {

  var img = document.createElement("IMG");
  img.src = getCharImage(selectedQuote.character);
  $('#quotes').append(img);
  $("#quotes").append(`<p>"${selectedQuote.quote}"</P><P>${selectedQuote.character}, ${selectedQuote.movie}</p>`);
});

$(document).ready(function () {
  // Insert elements on click of the button
  $("button").click(function () {
    // Creating a div element at the end
    $(".container").append('<div class="content">Appended DIV</div>');

    // Creating a div element at the start
    $(".container").prepend('<div class="content">Prepended DIV</div>');
  });
});

function getQuote() {
  let length = movieQuote.length;
  thisQuote = Math.floor(Math.random() * length);

  return movieQuote[thisQuote];
}

function getCharImage(character) {
  let image;
  switch (character) {
    case 'Peter Clemenza':
      image = "/img/char_clemenza.jpg";
      break;
    case 'Fredo Corleone':
      image = "/img/char_fredo.jpg";
      break;
    case 'Hyman Roth':
      image = "/img/char_hyman.jpg";
      break;
    case 'Kay Corleone':
      image = "/img/char_kay.jpg";
      break;
    case 'Michael Corleone':
      image = "/img/char_michael.jpg";
      break;
    case 'Santino “Sonny” Corleone':
      image = "/img/char_sonny.jpg";
      break;
    case 'Tom Hagan':
      image = "/img/char_tom.jpg";
      break;
    case 'Luca Brasi':
      image = "/img/char_luca.jpg";
      break;
    case 'Virgil Sollozzo':
      image = "/img/char_sollozzo.jpg";
      break;
    case 'Tom Hagen':
      image = "/img/char_tom.jpg";
      break;
    case 'Connie Corleone':
      image = "/img/char_connie.jpg";
      break;
    case 'Vito Corleone':
      image = "/img/char_vito.jpg";
      break;

    default:
      image = "/img/char_michael.jpg";

  }
  return image;
}

