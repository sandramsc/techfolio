//Designed & coded by Sandra Ashipala <https://github.com/sandramsc> 
//create stripe client//Publishable key
var stripe = Stripe('...insert your stripe publishable api key here...');

var elements = stripe.elements();
//custom styling can be passed to options when creating an Element.
var style = {
  base: {
    iconColor: '#c4f0ff',
    color: '#fff',
    fontWeight: 500,
    fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
    fontSize: '16px',
    fontSmoothing: 'antialiased',

    ':-webkit-autofill': {
      color: '#fce883',
    },
    '::placeholder': {
      color: '#87BBFD',
    },
  },
  invalid: {
    iconColor: '#FFC7EE',
    color: '#FFC7EE',
  },
};

//create an instance of the card Element.
var card = elements.create('card', {style: style});

//add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

//real time validation errors
card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

//create a token or display an error when the form is submitted.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      //inform the customer that there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      //send the token to your server.
      stripeTokenHandler(result.token);
    }
  });
});

function stripeTokenHandler(token) {
  //insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  //submit the form
  form.submit();
}
