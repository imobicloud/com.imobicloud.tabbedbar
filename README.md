# Tabbed Bar
====

Tabbed bar for iOS and Android

xml

	<Widget id="tabbedbar" class="tabbedbar" src="com.imobicloud.tabbedbar" onClick="tabbedbarClick"/>

tss

	".tabbedbar": { 
		Container: { 
			width: Ti.UI.SIZE, height: 29, layout: 'horizontal', 
			backgroundColor: '#fff', borderColor: '#e52d5b', borderRadius: 4, borderWidth: 1, 
		}, 
		index: 0, 
		labels: [{ title: 'Current Location' }, { title: 'Anywhere' }],
		Tab: { width: 118, backgroundColor: '#e52d5b' },
		Tab0: {},
		Tab1: {},
		TabOn: { backgroundColor: '#e52d5b' },
		TabOff: { backgroundColor: 'transparent' },
		TabTitle: { font: { fontSize: 12.66, fontFamily: 'Poppins-Regular' } },
		TabTitleOn: { color: '#fff' },
		TabTitleOff: { color: '#e52d5b' },
	}

js 

    $.tabbedbar.load({
        index: 0,
        labels: [
            { title: 'Browse' }, // { enabled: true, image: '', title: '', width: 100 }
            { title: 'Applied' },
            { title: 'Upcoming' }
        ]
    });

	$.tabbedbar.getIndex();
	$.tabbedbar.setIndex(1);
	
	$.tabbedbar.unload();
	
	function tabbedbarClick(e) {
		e.index,
		e.label
	}
	
Change log:

- 04/07/2017
	+ Deprecate inline styles
    + Add [Container] parameter to replace inline styles. 
	
		- old:
		".tabbedbar": { width: Ti.UI.SIZE, height: 29, layout: 'horizontal', 
			backgroundColor: '#fff', borderColor: '#e52d5b', borderRadius: 4, borderWidth: 1, 
			index: 0, 
			labels: [{ title: 'Current Location' }, { title: 'Anywhere' }],
			Tab: { width: 118, backgroundColor: '#e52d5b' },
			Tab0: {},
			Tab1: {},
			TabOn: { backgroundColor: '#e52d5b' },
			TabOff: { backgroundColor: 'transparent' },
			TabTitle: { font: { fontSize: 12.66, fontFamily: 'Poppins-Regular' } },
			TabTitleOn: { color: '#fff' },
			TabTitleOff: { color: '#e52d5b' },
		}
		- new:
		".tabbedbar": { 
			Container: { 
				width: Ti.UI.SIZE, height: 29, layout: 'horizontal', 
				backgroundColor: '#fff', borderColor: '#e52d5b', borderRadius: 4, borderWidth: 1, 
			}, 
			index: 0, 
			labels: [{ title: 'Current Location' }, { title: 'Anywhere' }],
			Tab: { width: 118, backgroundColor: '#e52d5b' },
			Tab0: {},
			Tab1: {},
			TabOn: { backgroundColor: '#e52d5b' },
			TabOff: { backgroundColor: 'transparent' },
			TabTitle: { font: { fontSize: 12.66, fontFamily: 'Poppins-Regular' } },
			TabTitleOn: { color: '#fff' },
			TabTitleOff: { color: '#e52d5b' },
		}
		
	+ Add [Wrapper] parameter.
	+ Add [Indicator] parameter.
	
- 16/06/2016
	+ Use local styles, we don't have to put the styles in app.tss anymore
	+ Change styles syntax
	+ Remove Alloy parameter ($) in $.tabbedbar.load($, {});
	+ Remove useCustom + useDivider parameters
	
	
	
	
	
	
