$.widget("su.hint", {
    options: {
        hintFor: "common",
        opened:  true
    },

    _create: function() {
        this._initPrivateVars();
        this.element.attr('id', this._hintID());

    },

    _initPrivateVars: function() {
        this.hintID = "hint-" + this.options.hintFor;
    },

    _hintID: function(value) {

        if (value === undefined) {
            return this.hintID;
        }
        this.options.hintFor = value;
        this.hintID = "hint-" + value;
    }

});