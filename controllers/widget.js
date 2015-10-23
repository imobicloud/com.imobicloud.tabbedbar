init(arguments[0]);
function init(args) {
	var exclude = ['id', 'children'];
    $.tabbedbar.applyProperties( _.omit(args, exclude) );
}

/*
 params = {
 	index: 0,
 	labels: [{ enabled: true, image: '', title: '', width: 100 }]
 }
 * */
exports.load = function(params) {
	var labels = params.labels,
		index = params.index || 0;

	if (OS_ANDROID) {
		for(var i=0,ii=labels.length; i<ii; i++){
			var label = labels[i];
			var icon, styleTab, styleTitle;
			if (i !== index) {
				icon = label.image;
				styleTab = 'imc-tabbedbar-tab imc-tabbedbar-tab-off';
				styleTitle = 'imc-tabbedbar-title imc-tabbedbar-title-off';
			} else {
				icon = label.imageOn || label.image;
				styleTab = 'imc-tabbedbar-tab imc-tabbedbar-tab-on';
				styleTitle = 'imc-tabbedbar-title imc-tabbedbar-title-on';
			}
			if (i === 0) { styleTab += ' imc-tabbedbar-tab-first'; }
			var tab = $.UI.create('View', { tabIndex: i, classes: styleTab, width: label.width || Ti.UI.SIZE, touchEnabled: label.enabled || true });
				label.image && tab.add( $.UI.create('ImageView', { image: icon, classes: 'imc-tabbedbar-icon', touchEnabled: false }) );
				label.title && tab.add( $.UI.create('Label', { text: label.title, classes: styleTitle, touchEnabled: false }) );
		  	$.tabbedbar.add(tab);
		};
	}
	
	$.tabbedbar.labels = labels;
	$.tabbedbar.index = index;
};

exports.unload = function() {
	$.tabbedbar.removeAllChildren();
};

function tabbedbarClick(e) {
	var index;
	if (OS_IOS) {
		index = e.index;
	} else {
		index = e.source.tabIndex;
		var lastIndex = $.tabbedbar.index;
		if (index == null || index == lastIndex) { return; }
		
		var labels = $.tabbedbar.labels;
		
		var tab = e.source;
  		$.addClass(tab, 'imc-tabbedbar-tab-on');
  		$.addClass(tab.children[1], 'imc-tabbedbar-title-on');
  		if (labels[index].imageOn) { tab.children[0].image = labels[index].imageOn; }
  		
  		var lastTab = $.tabbedbar.children[lastIndex];
		$.addClass(lastTab, 'imc-tabbedbar-tab-off');
		$.addClass(lastTab.children[1], 'imc-tabbedbar-title-off');
		if (labels[lastIndex].imageOn) { lastTab.children[0].image = labels[lastIndex].image; }
		
		$.tabbedbar.index = index;
	}
	$.trigger('click', { index: index, label: $.tabbedbar.labels[index] });
}

exports.getIndex = function() {
	return $.tabbedbar.index;
};