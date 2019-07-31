$(document).ready(
    function () {
        $(document).on('click', '#res', function () {
            $.ajax({
                url: '2.php',
                cache: false,

            });
        });

        /*        $.get(
                    'ajax.html',
                    {},
                    function(data) {
                        $('#aim').html(data);
                    }
                );*/
    }

);