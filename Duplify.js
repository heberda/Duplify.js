(function ($) {
    $.fn.duplify = function (options) {
        var $table = $(this);
        var bin = [];

        var opts = $.extend({}, $.fn.duplify.defaults, options);

        $table.find('th:last').after('<th style="max-width:20px;"><span class="glyphicon glyphicon-plus new-lineitem ' + opts.newItemClass + '"></span></th>');
        $table.find('tbody tr').append($('<td>').css('max-width', '20px'));
        var rows = $table.find('tbody tr');
        var nRows = $(rows).length;
        if (nRows > 1) {
            $.each(rows, function (index, value) {
                if (index !== 0)
                    $(value).find('td:last').append('<span class="glyphicon glyphicon-remove remove-row ' + opts.removeItemClass + '"></span>');
            });
        }

        $table.find(".new-lineitem").bind('click', function () {
            if (bin.length > 0) {
                $table.find('tbody').append(bin.pop());
            } else {
                var $newRow = $table.find('tbody tr:first').clone().appendTo($table.find('tbody'));
                $newRow.find(':input').val('');
                if (opts.canRemove) {
                    $newRow.find('td:last').append('<span class="glyphicon glyphicon-remove remove-row ' + opts.removeItemClass + '"></span>');
                }
            }
        });

        $table.closest('form').bind('submit', function () {
            var $rows = $table.find('tbody tr');
            var count = 0;
            $.each($rows, function () {
                var $inputs = $(this).find(':input');
                $.each($inputs, function () {
                    var name = $(this).prop('id');
                    $(this).prop('name', opts.htmlPrefix + '.' + opts.listName + '[' + count + '].' + name);
                });
                count++;
            });
        });

        if (opts.canRemove) {
            $(document).on('click', '.remove-row', function () {
                bin.push($(this).closest('tr').detach());
                //$(this).closest('tr').remove();
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
