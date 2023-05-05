'use strict';

var Settings = function(){

    var set = this;

	set.mainPath = '../src/';



    set.styleFiles = [set.mainPath + 'scss/Base.scss',
					  set.mainPath + 'scss/style.scss',
					  set.mainPath + 'scss/adaptive.scss'];

    set.otherCSS = [];

    
}

module.exports = Settings;
