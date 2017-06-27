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

    },

    },


});