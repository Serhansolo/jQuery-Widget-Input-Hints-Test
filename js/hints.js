$.widget("su.hint", {
    options: {
        hintFor: "common",
        opened:  true
    },

    _create: function() {
        this._privateVariables();
        this.element.attr('id', hintID);

    },

    _privateVariables: function () {
        hintID = "hint-" + this.options.hintFor;
    },


});