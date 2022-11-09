
function selectQuotes(character) {
    let selectedCharacter = movieQuote.filter(movieQuote => movieQuote.character === character);
    selectedCharacter.forEach(printQuote);

}

function printQuote(element) {
    console.log(element.quote);
    jQuery(function ($) {
        $("#quote-section").append(`<div class="character-quote"><p>"${element.quote}"</P></div>`);
    });
}
