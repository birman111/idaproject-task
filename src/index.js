import $ from 'jquery';
import './css/main.css'
import './scss/main.scss'

const jquery_validation = require('jquery-validation');

$('.menu-header-control__button').on('click', () => {
    $('.menu-mobile').toggleClass('menu-mobile_active');
    $('html').css('overflow', 'hidden');
    $('html').css('height', '100%');
})
$('.menu-mobile__back-item').on('click', () => {
    $('.menu-mobile').toggleClass('menu-mobile_active');
    $('html').css('overflow', 'auto');
    $('html').css('height', 'auto');
})


$('.form-payment__card-number-field').keyup(function(e) {
    $(this).val($(this).val().replace(/[^0-9]/, ""));
    if ($(this).val().length == 4) {
        $(this).next('.form-payment__card-number-field').focus();
    }  
});


$('.form-payment__field-cvc').keyup(function(e) {
    $(this).val($(this).val().replace(/[^0-9]/, ""));  
});

$('.form-payment__owner-name').keyup(function(e) {
    var symb = String.fromCharCode(e.charCode);   
    $(this).val($(this).val().replace(/[^a-zA-Z ]/, '')); 
    $(this).val($(this).val().toUpperCase()); 
});


$('.form-payment__submit').click(function() {
    $(".form-payment__form").validate({
      errorClass: 'form-payment__field_error',  
      rules: {
        card_number1: {
            required: true,
            minlength: 4
        },
        card_number2: {
            required: true,
            minlength: 4
        },
        card_number3: {
            required: true,
            minlength: 4
        },
        card_number4: {
            required: true,
            minlength: 4
        },
        owner_name: {
            required: true,
            minlength: 4
        },
        cvc: {
            required: true,
            minlength: 3
        }
      },
      errorPlacement: function(){
        return false;
      }
    });
});
  
