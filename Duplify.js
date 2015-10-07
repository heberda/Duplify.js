(function ($) {
    $.fn.duplify = function (options) {
        var $table = $(this);

        var opts = $.extend({}, $.fn.duplify.defaults, options);

        $table.find('th:last').after('<th><span id="new-lineitem" class="glyphicon glyphicon-plus ' + opts.newItemClass + '"></span></th>');
        $table.find('tbody tr:first').append($('<td>'));
        
        $("#new-lineitem").bind('click', function () {
            var $newRow = $(this).closest('table').find('tbody tr:first').clone().appendTo('tbody');
            $newRow.find('input').val('');
            if (opts.canRemove) { $newRow.find('td:last').append('<span class="glyphicon glyphicon-remove remove-row ' + opts.removeItemClass + '"></span>'); }
        });

        $table.closest('form').bind('submit', function () {
            var $rows = $('table tbody tr');
            var count = 0;
            $.each($rows, function () {
                var $inputs = $(this).find(':input');
                $.each($inputs, function () {
                    var name = $(this).prop('id');
                    $(this).prop('name', opts.htmlPrefix + '.' + listName + '[' + count + '].' + name);
                });
                count++;
            });
        });

        if (opts.canRemove) {
            $(document).on('click', '.remove-row', function () {
                $(this).closest('tr').remove();
            });
        }
    };

    // Plugin defaults – added as a property on our plugin function.
    $.fn.duplify.defaults = {
        canRemove: true,
        htmlPrefix: undefined,
        listName: undefined,
        newItemClass: 'link-hover',
        removeItemClass: 'link-hover'
    };
}
)(jQuery);
