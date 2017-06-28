$.widget("su.hint", {
    options: {
        hintFor: "common",
        opened: true
    },

    // Initialize our widget functionality
    _create: function() {
        this.element.attr('id', "hint-" + this.options.hintFor);
        if (this.element.data('visibility') !== undefined) this.options.opened = this.element.data('visibility');

        this._addOpenButton();
        this._addCloseButton();

        if (this.options.opened) {
            this.open();
        } else {
            this.close();
        }
    },

    // Public function needed to close the hint and do the right stuff so open other parts.
    close: function() {
        this.element.addClass('close');
        var inputField = $('#' + this.options.hintFor);
        inputField.next().removeClass('hide');
    },

    // Public function needed to open the hint and do the right stuff so close other parts.
    open: function() {
        this.element.removeClass('close');
        var inputField = $('#' + this.options.hintFor);
        inputField.next().addClass('hide');
    },

    _addOpenButton: function() {
        // Add the open button
        var button = $('<button class="open-hint for-hint-' + this.options.hintFor + '" type="button">?</button>');
        var inputField = $('#' + this.options.hintFor);
        inputField.parent().append(button);

        // Give this open button an on click open functionality
        var that = this;
        button.on("click", function() {
            that.open();
        })
    },

    _addCloseButton: function() {
        // Add the close button
        var button = $('<button class="close-hint for-hint-' + this.options.hintFor + '" type="button">X</button>');
        this.element.append(button);

        // Give this close button an on click close functionality
        var that = this;
        button.on("click", function() {
            that.close();
        })
    }

});