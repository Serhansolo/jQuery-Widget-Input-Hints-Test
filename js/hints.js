$.widget("su.hint", {
    options: {
        hintFor: "common",
        opened: true
    },
    privateOptions: {},
    _privateVariables: function() {
        this.privateOptions.inputField = $('#' + this.options.hintFor).parent();
        this.privateOptions.that = this;
    },
    _create: function() {
        this._privateVariables();
        this.element.attr('id', "hint-" + this.options.hintFor);

        this._addOpenButton();
        this._addCloseButton();
    },

    close: function() {
        this.element.addClass('close');
    },

    open: function() {
        this.element.removeClass('close');
    },

    _addOpenButton: function() {
        var button = $('<button class="open-hint for-hint-' + this.options.hintFor + '" type="button">?</button>');
        this.privateOptions.inputField.append(button);
        var that = this;
        button.on("click", function() {
            that.open();
        })
    },

    _addCloseButton: function() {
        var button = $('<button class="close-hint for-hint-' + this.options.hintFor + '" type="button">X</button>');
        this.element.append(button);
        var that = this;
        button.on("click", function() {
                that.close();
            }
        )
    }

});