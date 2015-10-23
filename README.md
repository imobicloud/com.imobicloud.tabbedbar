# Tabbed Bar
====

Tabbed bar for iOS and Android

xml

	<Widget id="tabbedbar" class="tabbedbar" src="com.imobicloud.tabbedbar"/>

app.tss

    ".imc-tabbedbar[platform=ios]": { backgroundColor: '#fff' }
    ".imc-tabbedbar[platform=android]": { width: Ti.UI.SIZE, height: 30, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, borderWidth: 1, layout: 'horizontal' }
        ".imc-tabbedbar-tab[platform=android]": { left: 1 }
        ".imc-tabbedbar-tab-first[platform=android]": { left: 0 }
        ".imc-tabbedbar-tab-off[platform=android]": { backgroundColor: '#000' }
        ".imc-tabbedbar-tab-on[platform=android]": { backgroundColor: 'transparent' }
            ".imc-tabbedbar-icon[platform=android]": {}
            ".imc-tabbedbar-title[platform=android]": { width: Ti.UI.SIZE, left: 12, right: 12, font: { fontSize: 14 } }
            ".imc-tabbedbar-title-off[platform=android]": { color: '#fff' }
            ".imc-tabbedbar-title-on[platform=android]": { color: '#000' }

js 

    $.tabbedbar.load({
        index: 0,
        labels: [
            { title: 'Browse' },
            { title: 'Applied' },
            { title: 'Upcoming' }
        ]
    });

	$.tabbedBar.getIndex();