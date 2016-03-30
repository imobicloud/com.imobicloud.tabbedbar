var G, tabbedbar, useCustom;

init(arguments[0] || {});
function init(args) {
	var exclude = ['id', 'children'];
	$.container.applyProperties(_.omit(args, exclude));
}

/*
 params = {
 	useCustom: false,
 	index: 0,
 	labels: [{ enabled: true, image: '', title: '', width: 100 }]
 }
 * */
exports.load = function(_G, params) {
	G = _G;
	useCustom = params.useCustom;
	
	var labels = params.labels,
		index = params.index || 0;
	
	if (OS_IOS && useCustom !== true) {
		tabbedbar = G.UI.create('TabbedBar', { classes: 'imc-tabbedbar', labels: labels, index: index });
	} else {
		tabbedbar = G.UI.create('View', { classes: 'imc-tabbedbar' });
		
		for(var i=0,ii=labels.length; i<ii; i++){
			var label = labels[i];
			var icon, status;
			if (i !== index) {
				icon = label.image;
				status = '-off';
			} else {
				icon = label.imageOn || label.image;
				status = '-on';
			}
			var tab = G.UI.create('View', { tabIndex: i, classes: 'imc-tabbedbar-tab imc-tabbedbar-tab' + status });
				if (i === 0) {
					tab.applyProperties( G.createStyle({ classes: 'imc-tabbedbar-tab-first' }) );
				}
				label.width != null && (tab.width = label.width);
				label.enabled != null && (tab.touchEnabled = label.enabled);
				label.image && tab.add( G.UI.create('ImageView', { image: icon, classes: 'imc-tabbedbar-icon', touchEnabled: false }) );
				label.title && tab.add( G.UI.create('Label', { text: label.title, classes: 'imc-tabbedbar-title imc-tabbedbar-title' + status, touchEnabled: false }) );
				if (params.useDivider) {
					if (i) {
						tab.add( G.UI.create('View', { classes: 'imc-tabbedbar-divider', touchEnabled: false }) );
					} else {
						tab.add( G.UI.create('View', { classes: 'imc-tabbedbar-divider imc-tabbedbar-divider-first', touchEnabled: false }) );
					}
				}
		  	tabbedbar.add(tab);
		};
		
		tabbedbar.labels = labels;
		tabbedbar.index = index;
	}
	
	tabbedbar.addEventListener('click', tabbedbarClick);
	
	// $.addTopLevelView(tabbedbar);
	$.container.add(tabbedbar);
};

exports.unload = function() {
	tabbedbar.labels = [];
	if (OS_ANDROID || useCustom) {
		tabbedbar.removeAllChildren();
	}
	tabbedbar = null;
	G = null;
};

function tabbedbarClick(e) {
	var index;
	if (OS_IOS && useCustom !== true) {
		index = e.index;
	} else {
		index = e.source.tabIndex;
		var lastIndex = tabbedbar.index;
		if (index == null || index == lastIndex) { return; }
		
		var labels = tabbedbar.labels;
		
		var tab = e.source;
		tab.applyProperties( G.createStyle({ classes: 'imc-tabbedbar-tab-on' }) );
  		if (labels[index].imageOn) { tab.children[0].image = labels[index].imageOn; }
  		if (labels[index].title) { tab.children[1].applyProperties( G.createStyle({ classes: 'imc-tabbedbar-title-on' }) ); }
  		
  		var lastTab = tabbedbar.children[lastIndex];
		lastTab.applyProperties( G.createStyle({ classes: 'imc-tabbedbar-tab-off' }) );
		if (labels[lastIndex].imageOn) { lastTab.children[0].image = labels[lastIndex].image; }
		if (labels[lastIndex].title) { lastTab.children[1].applyProperties( G.createStyle({ classes: 'imc-tabbedbar-title-off' }) ); }
		
		tabbedbar.index = index;
	}
	$.trigger('click', { index: index, label: tabbedbar.labels[index] });
}

exports.getIndex = function() {
	return tabbedbar.index;
};