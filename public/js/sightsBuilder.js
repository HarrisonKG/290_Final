function addRow(sight){
	var newRow = document.createElement("div");
	newRow.className = "sightRow";

	var newLink = document.createElement("a");
	newLink.href = sight.linkText;

	var newImage = document.createElement("img");
	newImage.src = sight.path;
	newImage.alt = sight.linkAlt;
	newImage.className = "sightThumbnail";

	var newHeader = document.createElement("h3");
	newHeader.textContent = sight.linkAlt;

	var newText = document.createElement("p");
	newText.textContent = sight.description;
	newText.className = "sightBlurb";

	newLink.appendChild(newImage);
	newRow.appendChild(newLink);
	newRow.appendChild(newHeader);
	newRow.appendChild(newText);
	document.body.appendChild(newRow);
}


var sights = [
	{"linkText":"https://www.lonelyplanet.com/germany/potsdam/attractions/schloss-park-sanssouci/a/poi-sig/1495400/359343", 
	"path":"images/thumbnails/sanssouci.jpeg", 
	"linkAlt": "Sans Souci", 
	"description": "This glorious park and palace ensemble is what happens when a king has good taste, plenty of cash and access to the finest architects and artists of the day. Sanssouci was dreamed up by Frederick the Great (1712–86) and is anchored by the eponymous palace, which was his favourite summer retreat, a place where he could be 'sans souci' (without cares). His grave is nearby."
	}, 
	{"linkText":"https://www.lonelyplanet.com/germany/berlin/attractions/schloss-charlottenburg/a/poi-sig/1119921/359343", 
	"path":"images/thumbnails/charlottenburg.jpeg", 
	"linkAlt": "Charlottenburg", 
	"description": "Charlottenburg Palace is one of the few sites in Berlin that still reflects the one-time grandeur of the Hohenzollern clan that ruled the region from 1415 to 1918. Originally a petite summer retreat, it grew into an exquisite baroque pile with opulent private apartments, richly festooned festival halls, collections of precious porcelain and paintings by French 18th-century masters. It's lovely in fine weather when you can fold a stroll in the palace park into a day of peeking at royal treasures."
	}, 
	{"linkText":"https://en.wikipedia.org/wiki/Wroc%C5%82aw_Town_Hall", 
	"path":"images/thumbnails/oldtownhall.jpeg", 
	"linkAlt": "Old Town Hall", 
	"description": "The Old Town Hall (Polish: Stary Ratusz, German: Breslauer Rathaus) of Wrocław stands at the center of the city’s Market Square (rynek). The Gothic town hall built from the 13th century is one of the main landmarks of the city. The Old Town Hall's long history reflects developments that have taken place in the city since its initial construction. The town hall serves the city of Wroclaw and is used for civic and cultural events such as concerts held in its Great Hall. In addition, it houses a museum and a basement restaurant."
	}, 
	{"linkText":"https://en.wikipedia.org/wiki/Malbork_Castle", 
	"path":"images/thumbnails/malborkcastle.jpeg", 
	"linkAlt": "Malbork Castle", 
	"description": "The Castle of the Teutonic Order in Malbork, (Polish: zamek w Malborku; German: Ordensburg Marienburg), is the largest castle in the world measured by land area. It was originally built by the Teutonic Knights, a German Roman Catholic religious order of crusaders, in a form of an Ordensburg fortress. The Order named it Marienburg (Mary's Castle). The town which grew around it was also named Marienburg. In 1466, both castle and town became part of Royal Prussia, a province of Poland. It served as one of the several Polish royal residences, interrupted by several years of Swedish occupation, and fulfilling this function until Prussia claimed the castle as a result of the First Partition of Poland in 1772."
	}, 
	{"linkText":"https://en.wikipedia.org/wiki/Wolin_National_Park", 
	"path":"images/thumbnails/wolin.jpeg", 
	"linkAlt": "Wolin National Park", 
	"description": "The Park's attractions include the sea cliffs of Gosań and Kawcza Góra, and a wisent (European bison) sanctuary. Best accessed from the resort of Międzyzdroje, Wolin National Park occupies the central section of Wolin Island. The park’s northern edge drops sharply into the sea, forming an 11km-long sandy cliff nearly 100m high in places. Back from the coast are a number of lakes, mostly on the remote eastern edge of the park. The most beautiful is the horseshoe-shaped Lake Czajcze. There’s Lake Turkusowe (Turquoise), named after the colour of its water, at the southern end of the park, and the lovely Lake Gardno close to the seashore, next to the Międzyzdroje–Dziwnów road. The lakes are surrounded by mixed forest, with beech, oak, and pine predominating."
	}, 
	{"linkText":"https://www.lonelyplanet.com/germany/wannsee/attractions/pfaueninsel/a/poi-sig/1204581/359343", 
	"path":"images/thumbnails/pfaueninsel.jpeg", 
	"linkAlt": "Pfaueninsel", 
	"description": "Back to nature was the dictum in the 18th century, so Friedrich Wilhelm II had this little island turned into an idyllic playground, perfect for retreating from state affairs and for frolicking with his mistress in a snowy-white fairy-tale palace. To heighten the romance factor, he brought in a flock of peacocks that gave the island its name and that are still strutting their stuff to this day. A stand-out among the smattering of other buildings is the Meierei, a dairy farm in the shape of a Gothic monastery at the island’s northern end."
	}, 
	{"linkText":"https://www.lonelyplanet.com/poland/gdansk/attractions/dlugi-targ/a/poi-sig/1423019/360314", 
	"path":"images/thumbnails/dlugi_targ.jpeg", 
	"linkAlt": "Dlugi Targ", 
	"description": "Długi Targ (Long Market) was once the main city market and is now the major focus for visitors. According to local legend, the Neptune Fountain next to the Town Hall once gushed forth with the trademark Gdańsk liqueur, Goldwasser. As the story goes, it spurted out of the trident one merry night and Neptune found himself endangered by crowds of drunken locals who couldn’t believe their luck. Perhaps that’s why, in 1634, the fountain was fenced off with a wrought-iron barrier. The Long Market is flanked from the east by the Green Gate, marking the river end of the Royal Way. It was built in the 1560s on the site of a medieval defensive gate and was supposed to be the residence of the kings. Today it houses an art gallery."
	}, 
	{"linkText":"https://en.wikipedia.org/wiki/K%C3%B6nigsberg_Cathedral", 
	"path":"images/thumbnails/konigsbergcathedral.jpeg", 
	"linkAlt": "Königsberg Cathedral", 
	"description": "A first smaller Catholic cathedral was erected in the Königsberg Altstadt between 1297 and 1302. After the Samland bishop Johann Clare had acquired the eastern part of Kneiphof island from the Teutonic Knights in 1322, he and his cathedral chapter had a new see built at the site. The original building in Altstadt was subsequently demolished and materials from it were used to build the new cathedral on Kneiphof. After the relatively short period of almost 50 years, the cathedral was largely completed by 1380. The choir contained murals from the 14th and 15th centuries, late Gothic wood carvings, and medieval monuments in the Renaissance style, the chief of which was a statue of Albert, Duke of Prussia, carved by Cornelis Floris de Vriendt in 1570."
	}
];


var headliner = document.createElement("h1");
headliner.textContent = "Experience Prussia";
headliner.align = "center";
document.body.appendChild(headliner);
document.body.appendChild(document.createElement("br"));


// add each attraction in the sights array to the document body
sights.forEach(function(sight){
	addRow(sight);
});
