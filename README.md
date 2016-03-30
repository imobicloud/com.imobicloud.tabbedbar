# Tabbed Bar
====

Tabbed bar for iOS and Android

xml

	<Widget id="tabbedbar" class="tabbedbar" src="com.imobicloud.tabbedbar"/>

app.tss

	".tabbedbar": { height: 30 }
	    ".imc-tabbedbar[platform=ios]": { backgroundColor: '#fff', style: Titanium.UI.iPhone.SystemButtonStyle.BAR }
		".imc-tabbedbar": { width: Ti.UI.SIZE, height: 30, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, borderWidth: 1, layout: 'horizontal' }
			".imc-tabbedbar-tab": {  }
			".imc-tabbedbar-tab-0": { left: 0 }
			".imc-tabbedbar-tab-1": { left: 1 }
			".imc-tabbedbar-tab-2": { left: 1 }
			".imc-tabbedbar-tab-off": { backgroundColor: '#000' }
			".imc-tabbedbar-tab-on": { backgroundColor: 'transparent' }
				".imc-tabbedbar-icon": {}
				".imc-tabbedbar-icon-0": {}
				".imc-tabbedbar-icon-1": {}
				".imc-tabbedbar-icon-2": {}
				".imc-tabbedbar-title": { width: Ti.UI.SIZE, left: 12, right: 12, font: { fontSize: 14 } }
				".imc-tabbedbar-title-0": {}
				".imc-tabbedbar-title-1": {}
				".imc-tabbedbar-title-2": {}
				".imc-tabbedbar-title-off": { color: '#fff' }
				".imc-tabbedbar-title-on": { color: '#000' }

js 

    $.tabbedbar.load($, {
    	useCustom: false, // use custom tabbedbar for ios
    	useDivider: false, // use custom divider when useCustom is true
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