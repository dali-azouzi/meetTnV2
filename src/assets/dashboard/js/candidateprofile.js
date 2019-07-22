//Profile picture view


        $(document).ready(function () {
            // Prepare the preview for profile picture
            $("#wizard-picture").change(function () {
                readURL(this);
            });
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }


//-- Tags input script--
console.clear();

$(function () {
    $('input').on('change', function (event) {

        var $element = $(event.target);
        var $container = $element.closest('.example');

        if (!$element.data('tagsinput'))
            return;

        var val = $element.val();
        if (val === null)
            val = "null";
        var items = $element.tagsinput('items');
        console.log(items[items.length - 1]);

        $('code', $('pre.val', $container)).html(($.isArray(val) ? JSON.stringify(val) : "\"" + val.replace('"', '\\"') + "\""));
        $('code', $('pre.items', $container)).html(JSON.stringify($element.tagsinput('items')));

        console.log(val);
        console.log(items);
        console.log(JSON.stringify(val));
        console.log(JSON.stringify(items));

        console.log(items[items.length - 1]);

    }).trigger('change');
});

$("#button").click(function () {
    var input = $("input[name='tags']").tagsinput('items');
    console.clear();
    console.log(input);
    console.log(JSON.stringify(input));
    console.log(input[input.length - 1]);
});
$()

// dynamic input width


$.fn.textWidth = function(text, font) {

if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);

$.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));

return $.fn.textWidth.fakeEl.width();
};

$('.width-dynamic').on('input', function() {
var inputWidth = $(this).textWidth();
$(this).css({
width: inputWidth
})
}).trigger('input');


function inputWidth(elem, minW, maxW) {
elem = $(this);
console.log(elem)
}

var targetElem = $('.width-dynamic');

inputWidth(targetElem);



