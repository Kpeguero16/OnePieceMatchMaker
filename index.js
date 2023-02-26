const characters = [" Gol D. Roger", " Benn Beckman", " Yasopp", " Shanks", " Lucky Roux", " Nami", " Monkey D. Luffy", " Bonk Punch", " Makino", " Higuma", " Woop Slap", " Alvida", " Koby", " Roronoa Zoro", " Helmeppo", " Kuina", " Buggy", " Cabaji", " Mohji", " Silvers Rayleigh", " Gaimon", " Kaya", " Kuro", " Ninjin", " Piiman", " Tamanegi", " Usopp", " Jango", " Limejuice", " Building Snake", " Johnny", " Yosaku", " Fullbody", " Sanji", " Krieg", " Pandaman", " Dracule Mihawk", " Jinbe", " Arlong", " Hatchan", " Nojiko", " Monkey D. Garp", " Tashigi", " Smoker", " Monkey D. Dragon", " Nefertari Vivi", " Karoo", " Crocodile", " Marshall D. Teach", " Nico Robin", " Brogy", " Dorry", " Galdino", " Bentham", " Wapol", " Kureha", " Tony Tony Chopper", " Hiluluk", " Portgas D. Ace", " Edward Newgate", " Matsuge", " Hina", " Camie", " Pappag", " Bellamy", " Jesus Burgess", " Jew Wall", " Roshio", " Sarquiss", " Van Augur", " Doc Q", " Eddy", " Hewitt", " Lily", " Mani", " Muret", " Rivers", " Ross", " Spector", " Stronger", " Terry", " Okome", " Shoujou", " Mont Blanc Cricket", " Mont Blanc Noland", " Jobo", " Master", " Bartholomew Kuma", " Donquixote Doflamingo", " John", " Jozu", " Laffitte", " Marco", " Mozambia", " Rockstar", " Sengoku", " Tsuru (Marine)", " Tate", " Gan Fall", " Wyper", " Amazon", " Pierre", " Conis", " Pagaya", " Suu", " Enel", " Gedatsu", " Holy", " McKinley", " Ohm", " Satori", " Fuza", " Shura", " Zabo", " Hakowan", " Aisa", " Braham", " Kalgara", " Genbo", " Kamakiri", " Raki", " Yama", " Nola", " Gode", " Isa", " Hotori", " Kotori", " Kinderella", " Mayushika", " Warashi", " Yotsubane", " Moyle", " Mochi", " Chief", " Kurotsuru", " Moda", " Koda", " Herb", " Kashigami", " Mousse", " Chiya", " Seto", " Honner", " Coburn", " Comil", " Aruyutayan V", " Ubau", " Unforgivable Mask", " Marilyn", " Kyuji", " Kuzan", " Nnke-kun", " Shelly", " Tonjit", " Foxy", " Hamburg", " Porche", " Capote", " Chuchun", " Itomimizu", " Kibagaeru", " Monda", " Big Pan", " Pickles", " George Mach", " Mountain Ricky", " Goro", " Donovan", " Gina", " Sonieh", " Borsalino", " Master of the Waters", " Sakazuki", " Thousand Sunny", " Chimney", " Gonbe", " Kokoro", " Yokozuna", " Hattori", " Iceburg", " Kaku", " Kalifa", " Mikazuki", " Paulie", " Peepley Lulu", " Tilestone", " Tyrannosaurus", " Zambai", " Blueno", " Ishigo Shitemanna", " Kiev", " Kop", " Schollzo", " Tamagon", " Bimine", " Dirt Boss", " Rob Lucci", " Corgi", " Franky", " Kiwi", " Mozu", " Forest Boss", " Kakukaku", " Kyukyu", " Happa Yamao", " Tom", " Jorge", " Spandam", " Bushon", " Stevie", " Jerry", " T Bone", " Wanze", " Funkfreed", " Gomorrah", " Sodom", " Nero", " Hoichael", " Michael", " Fukurou", " Jabra", " Kumadori", " Kashii", " Oimo", " Gatherine", " Bas", " And", " Kerville", " Busshiri", " Clover", " Gram", " Hack (Human)", " Hocha", " Mizuira", " Oran", " Rint", " Roche", " Roji", " Zadie", " Jaguar D. Saul", " Nico Olvia", " Spandine", " Laskey", " Chesskippa", " Kanezenny", " Nigeratta", " Doberman", " Momonga", " Onigumo", " Strawberry", " Yamakaji", " Kumadori Yamanbako", " Shu", " Very Good", " Glove", " Sharinguru", " Spacey", " Vegapunk", " Attach", " Marumieta", " Yamenahare", " Curly Dadan", " Terry Gilteo", " Thatch", " Seamars", " Brook", " Perona", " Cerberus", " Absalom", " Hildon", " Hogback", " Buhichuck", " Victoria Cindry (Zombie)", " Victoria Cindry", " Bear Skin Rug", " MocDonald", " Unigaro", " Jack-in-the-Box", " Ryuma (Zombie)", " Shimotsuki Ryuma", " Spoil", " Tsukimi", " Gyoro", " Nin", " Bao", " Gecko Moria", " Kumashi", " Cosmo", " Galaxy", " Macro (Automaton)", " John (Zombie)", " Inuppe", " Lola (Zombie)", " Risky Brother #1 (Zombie)", " Risky Brother #2 (Zombie)", " Hippo Gentleman", " Wall Zombie", " Jigoro (Zombie)", " Jigoro", " Tararan", " Kaidou", " Oars", " Oars (Zombie)", " Kumae", " Risky Brother #1", " Risky Brother #2", " Charlotte Lola", " Asahija", " Egana", " Goo", " Margarita", " Mizuta Madaisuki", " Mizuta Mawaritosuki", " Boa Hancock", " Duval", " Motobaro", " Rosward", " Shalria", " Antonio", " Devil Dias", " Jean Bart", " Saru", " Sentomaru", " Basil Hawkins", " Bepo", " Capone Bege", " Eustass Kid", " Jewelry Bonney", " Kairiken", " Killer", " Minoruba", " Penguin", " Scratchmen Apoo", " Shachi", " Shakuyaku", " Trafalgar D. Water Law", " Urouge", " X Drake", " Charlos", " Judy", " Marie", " Peterman", " Disco", " Heat", " Marin", " Stansen", " Wire", " Byron", " Pascia", " Lacuba", " Sicily", " Faust", " PX-4", " Candy", " PX-1", " Aphelandra", " Kikyo", " Marguerite", " Nerine", " Gloriosa", " Sweet Pea", " Belladonna", " Kiku (Kuja)", " Pansy", " Poppy", " Shion", " Bacura", " Blue Fan", " Boa Marigold", " Boa Sandersonia", " Cosmos", " Daisy", " Ran", " Rindo", " Salome", " Yuda #1", " Yuda #2", " Enishida", " Pandawoman", " Fisher Tiger", " Haredas", " Kitton", " Taroimo", " Tibany", " Heracles", " Pekkori", " Shanba", " Stalker", " Jean Goen", " Pankuta Dakeyan", " Hannyabal", " Minotaurus", " Domino", " Magellan", " An Zengaiina", " Basilisk", " Sphinx", " Doha Ittanka II", " Saldeath", " Shiki", " Daigin", " Minokoala", " Sadi", " Dobby Ibadonbo", " Emporio Ivankov", " Minorhinoceros", " Minozebra", " Zotto", " Hideo Usaguchi", " Ichiro Kumaguchi", " Yukichi Gaikotsu", " Kairo Kureyo", " Muchana", " Kinoko", " George Black", " Roche Tomson", " Inazuma", " Sukoshiba Kanishitoru", " Francois", " Tsunokkov", " Usakkov", " Bellett", " Catarina Devon", " Sanjuan Wolf", " Shiryu", " Vasco Shot", " Bunny Joe", " Akehende", " Lacroix", " Portgas D. Rouge", " Reuder", " Ronse", " A O", " Decalvan Brother #1", " Decalvan Brother #2", " Delacuaji", " Doma", " Elmy", " McGuy", " Ramba", " Squard", " Aggie 68", " Banshee", " Barry", " Cornelia", " Curiel", " Dogya", " Ducky Bree", " Ganryu", " Hublot", " Kimel", " Kotatsu", " Kukai", " Leonero", " Masked Deuce", " Mihar", " Namur", " Ossamondo", " Saber", " Skull", " Vista", " Wallace", " Finamore", " Atmos", " Bastille", " Bizarre", " Blamenco", " Blenheim", " Dalmatian", " Epoida", " Fossa", " Haruta", " Islewan", " Izou", " Karma", " Kechatch", " Palms", " Pavlik", " Rakuyo", " Speed Jiru", " Vitan", " Zodia", " Little Oars Jr.", " Choi", " Arthur", " Hangan", " Reforte", " Whitey Bay", " Candre", " Sancrin", " Andre", " Blondie", " Ninth", " Nosgarl", " Amadob", " Baggaley", " Brew", " Brocca", " Wallem", " Kingdew", " Great Michael", " Rush", " Zucca", " Indigo", " Kong", " Scopper Gaban", " Seagull Guns Nozdon", " Doringo", " Sunbell", " Taro", " Forliewbs", " Cands", " Agsilly", " Kinga", " Colscon", " Avalo Pizarro", " Happygun", " Julius", " Sabo", " Howling Gab", " Chadros Higelyges", " Charlotte Linlin", " Dogra", " Magra", " Bluejam", " Porchemy", " Didit", " Outlook III", " Sterry", " Stefan", " Ahho Desunen IX", " Ahho Zurako", " Jalmack", " Karasu", " Fishbonen", " Haritsu Kendiyo", " Kasa", " Kibin", " Scotch", " Gorilla", " Caribou", " Chocolat", " Cocoa", " Coribou", " Demaro Black", " Drip", " Humphrey", " Manjaro", " Mounblutain", " Nora Gitsune", " Turco", " PX-5", " PX-7", " Albion", " Lip Doughty", " Catacombo", " Sleepy", " Surume", " Megalo", " Ankoro", " Vander Decken", " Vander Decken IX", " Wadatsumi", " Hammond", " Hyouzou", " Kasagoba", " Adele", " Fillonce", " Hiramera", " Hody Jones", " Ichika", " Ishilly", " Kairen", " Lulis", " Mero", " Nika", " Sanka", " Seira", " Sora", " Yonka", " Yonka Two", " Fukaboshi", " Manboshi", " Ryuboshi", " Shirley", " Splash", " Splatter", " Daruma", " Dosun", " Gyro", " Hoe", " Ikaros Much", " Junan", " Neptune", " Zeo", " Minister of the Left", " Minister of the Right", " Shirahoshi", " Otohime", " Den", " Aladdin", " Sarfunkel", " Papaneel", " Kadar", " Koala", " Donquixote Mjosgard", " Togare", " Joy Boy", " Daidalos", " Harisenbon", " Maria Napole", " Bobbin", " Charlotte Pudding", 
" Napoleon", " Nitro", " Pekoms", " Tamago", " Pike", " Bomba (Marine)", " Dragon Number Thirteen", " Kin'emon", " Doran", " Konbu", " Mocha", " Monet", " Sind", " Ally", " Caesar Clown", " Kozuki Momonosuke", " Uzu", " Hyoutauros", " Kirintauros", " Biyo", " Minochihuahua", " Rock (Yeti)", " Scotch (Yeti)", " Bakezo", " Chappe", " Fen Bock", " Smiley", " Smooge", " Vergo", " Yarisugi", " Run", " Jero", " Gal", " Ginko", " Baby 5", " Buffalo", " Gladius", " Giolla", " Lao G", " Machvise", " Sugar", " Jack", " Camel", " Diamante", " Edward Weevil", " Kurozumi Kanjuro", " Pica", " Trebol", " Issho", " Mario", " Dellinger", " Gaburu", " Gatz", " Kyros", " Senor Pink", " Hera (Gladiator)", " Spartan", " Viola", " Abdullah", " Bartolomeo", " Bobby Funk", " Boo", " Cavendish", " Chinjao", " Dagama", " Elizabello II", " Kelly Funk", " Orlumbus", " Rebecca", " Sai", " Suleiman", " Gambia", " Hajrudin", " Maynard", " Wicca", " Acilia", " Agyo", " Bluegilly", " Damask", " Fighting Bull", " Hack (Fishmen)", " Ideo", " Jean Ango", " Jeet", " Meadows", " Mummy", " Riku Doldo III", " Rolling Logan", " Tank Lepanto", " Aremo Ganmi", " Mukkashimi Tower", " Kabu", " Leo", " Bobomba", " Bomba", " Flapper", " Gancho", " Nubon", " Pellini", " Rampo", " Bian", " Grabar", " Mansherry", " Milo", " Esta", " Baxcon", " Cotton", " Inhel", " Scarlett", " Farul", " Donquixote Rosinante", " Queen Mama Chanter", " Daikon", " Chao", " Ibusu", " Sanshita", " Uhho", " Gion", " Nuke Suzume", " Kyuin", " Maujii", " Tokikake", " Trafalgar Lami", " Donquixote Homing", " Wellington", " Diez Barrels", " Uholisia", " Gimlet", " Russian", " Shin Jaiya", " Shin Detamaruka", " Tegata Ringana", " Ginrummy", " Sheepshead", " Tristan", " Columbus", " Bakkin", " Zunesha", " Raizo", " Ryunosuke", " Bariete", " Carrot", " Wanda", " Wany", " Blackback", " Pedro", " Roddy", " Nekozaemon", " Yomo", " Monjii", " Inuarashi", " Miyagi", " Shishilian", " Giovanni", " Concelot", " Keith", " Nekomamushi", " Clione", " Uni", " Vito", " Milky", " Torasaburo", " Ikkaku", " Kozuki Oden", " Kurozumi Orochi", " Beer VI", " Ham Burger", " Sarie Nantokanette", " Tea IV", " Ban Dedessinée", " Cezar", " Iwatobi", " Ramen", " Chap", " Charlotte Chiffon", " Gotti", " Vinsmoke Yonji", " Vinsmoke Reiju", " Charlotte Amande", " Diesel", " Prometheus", " Rabiyan", " Randolph", " Zeus", " Vinsmoke Ichiji", " Vinsmoke Niji", " Charlotte Galette", " Charlotte Mont-d'Or", " Charlotte Moscato", " Charlotte Opera", " Charlotte Praline", " Charlotte Brûlée", " Noble Croc", " Pound", " Vinsmoke Judge", " Capone Pez", " Charlotte Perospero", " Charlotte Cracker", " Kingbaum", " Charlotte Snack", " Cosette", " Époni", " Vinsmoke Sora", " Nyasha", " Charlotte Katakuri", " Charlotte Smoothie", " Charlotte Anana", " Charlotte Anglais", " Charlotte Cabaletta", " Charlotte Cadenza", " Charlotte Counter", " Charlotte Dolce", " Charlotte Dragée", " Charlotte Gala", " Charlotte Joscarpone", " Charlotte Mascarpone", " Charlotte Myukuru", " Charlotte De-Chat", " Charlotte Wafers", " Charlotte Willow", " Charlotte Normande", " Charlotte Newichi", " Charlotte Newji", " Charlotte Newsan", " Charlotte Newshi", " Charlotte Newgo", " Charlotte Nutmeg", " Charlotte Akimeg", " Charlotte Allmeg", " Charlotte Harumeg", " Charlotte Fuyumeg", " Charlotte Raisin", " Eggplant Soldier", " Zepo", " Charlotte Dacquoise", " Charlotte Katou", " Charlotte Nusstorte", " Charlotte Melise", " Charlotte Mash", " Loki", " Streusen", " Du Feld", " Pig Car", " Charlotte Basskarte", " Charlotte Cinnamon", " Charlotte Compote", " Charlotte Poire", " Drug Peclo", " Giberson", " Jigra", " Morgans", " Stussy", " Umit", " Carmel", " Charlotte Citron", " Charlotte Daifuku", " Charlotte Dosmarche", " Charlotte Marnier", " Charlotte Oven", " Charlotte Angel", " Charlotte Noisette", " Charlotte Saint-Marc", " Charlotte Basans", " Charlotte Custard", " Charlotte Mozart", " Charlotte High-Fat", " Charlotte Kanten", " Charlotte Mobile", " Charlotte Tablet", " Charlotte Zuccotto", " Charlotte Broyé", " Charlotte Effilée", " Charlotte Compo", " Charlotte Laurin", " Charlotte Mondée", " Charlotte Cornstarch", " Eiri", " Gerd", " Jarul", " Jorul", " Raideen", " Road", " Pandora", " Charlotte Hachée", " Lady Tree", " Chichilisia", " Buche", " Shiruton Doruyanaika", " Charlotte Bavarois", " Charlotte Flampe", " Charlotte Brownie", " Charlotte Joconde", " Charlotte Yuen", " Charlotte Nougat", " Charlotte Marble", " Charlotte Chiboust", " Charlotte Prim", " Charlotte Maple", " Charlotte Panna", " Charlotte Montb", " Goldberg", " Draw", " Isuka", " Gally", " Komane", " Belo Betty", " Lindbergh", " Morley", " Peachbeard", " Matryosaka", " Matryosuka", " Matryoseka", " Matryosoka", " Ryokugyu", " Mororon", " Tacos", " Ahiru", " Moqueca", " Nashi", " Mari", " Sauce", " Neggy", " Couran", " Wheel", " Furrari", " Tritobu", " Im", " Seki", " Jeep", " Lemoncheese", " Raccoon", " Stroganoff", " Potaufeu", " Samosa", " Kozuki Hiyori", " Minatomo (Wano)", " Tama (Sphinx)", " Gama Pyonnosuke", " Tsugaru Umi", " Oide", " Giro Chintaro", " Toyama Tsujigiro", " Hihimaru", " Komachiyo", " Tama (Human)", " Tenguyama Hitetsu", " Bunbuku", " Massui", " Kotetsu", " Tsuru (Wano)", " Kikunojo", " Urashima", " Batman", " Gazelleman", " Hold'em", " Kamijiro", " Speed", " Serizawa", " Mouseman", " Wakasa", " Hiroshi", " Saikoro", " Ikkaku (Wano)", " Yokan", " Atagoyama", " Snakeman", " Rabbitman", " Ashura Doji", " Yame", " Kinbo", " Inoichibannosuke", " Ginnosuke", " Sarahebi", " Chihaya", " Denjiro", " Hara", " Kozuki Sukiyaki", " Kawamatsu", " Kozuki Toki", " Kurosawa", " Jibuemon", " Kagero", " Tabuhachiro", " Shinobu", " Home", " Chocho", " Gorobe", " Pudos", " Kikipatsu", " Maki", " Tori", " King", " Queen", " Kamekichi", " Ukon", " Hidayu", " Monjiro", " Jujiro", " Kakunoshin", " Kojuro", " Dotaku", " Waruno Furishiro", " Akudai Kanzaburo", " Hyogoro", " Ibiributsu", " Donannoyo", " Dobon", " Kuni", " Suke", " Kaku (Wano)", " Toko", " Takao", " Bongo", " Bungo", " Bingo", " Sandayu", " Kumagoro", " Kobe", " Kisegawa", " Tokijiro", " Rakuda", " Shimotsuki Yasuie", " Maha", " Page One", " Koito", " Asashichi", " Raijin", " Warazane", " Daikoku", " Kazekage", " Fujin", " Sugamichi", " Hanzo", " Chome", " Yazaemon", " Jigoku Benten", " Sarutobi", " Bishamon", " Fukurokuju", " Inukai", " Tsurue Monnosuke", " Alpacaman", " Daifugo", " Babanuki", " Solitaire", " Nokotti", " Uwattsura", " Onimaru", " Madilloman", " Azuki", " Genrin", " Noriko", " Saki", " Han", " Dachoman", " Tsunagoro", " Tetsu", " Jo", " Hanji", " Hotei", " Omasa", " Cho", " Yatappe", " Shimotsuki Ushimaru", " Inbi", " Goki", " Jaki", " Shinosuke", " Shimotsuki Kozaburo", " Rocks D. Xebec", " Silver Axe", " Ochoku", " Nazu Ketagari", " Mountain God", " Koyama", " Kurokoma", " Banzaburo", " Katsuzo", " Hitsugisukan", " Kurozumi Semimaru", " Kurozumi Higurashi", " Millet Pine", " Ganryu (Roger Pirates)", " Petermoo", " Rangram", " Mr. Momora", " Donquino", " CB Gallant", " Yui", " Moon Isaac Jr.", " Spencer", " Mugren", " MAX Marx", " Blumarine", " Rowing", " Erio", " Bankuro", " Jacksonbanner", " Yamon", " Hana", " Rokki", " Juki", " Black Maria", " Who's-Who", " Sasaki", " Ulti", " Mizerka", " Gorishiro", " Bao Huang", " Yamato", " Tenjo-Sagari", " Hatcha", " Nangi", " Fuga", " Zanki", " Briscola", " Fourtricks", " Hamlet", " Poker", " Nure-Onna", " Caimanlady", " Wanyudo", " Hera", " Nika (God)", " Kunyun", " Uzuki Tempura", " Fugetsu Omusubi", " Kazenbo", " Some", " Chuji"];

const images = ["https://i.imgur.com/0Q0phXj.png", 
"https://i.imgur.com/xOe6S9Z.png", 
"https://i.imgur.com/emIdRez.jpg", 
"https://i.imgur.com/U1yt4qz.png", 
"https://i.imgur.com/GAclpah.jpg?1", 
"https://i.imgur.com/ZVLrIsO.png?1", 
"https://i.imgur.com/n2GsE0E.jpg", 
"https://i.imgur.com/CvWU7XL.png?1", 
"https://i.imgur.com/gXQQZPV.jpg", 
"https://i.imgur.com/iFRpiMC.png?1", 
"https://i.imgur.com/vNRwPom.png", 
"https://i.imgur.com/iqQpjUF.jpg", 
"https://i.imgur.com/3j8IS42.jpg", 
"https://i.imgur.com/3UNK73p.jpg?1", 
"https://i.imgur.com/pC3VxwS.jpg", 
"https://i.imgur.com/DgGshnP.jpg", 
"https://i.imgur.com/uzrxmnO.png", 
"https://i.imgur.com/v7YaWYM.png?2", 
"https://i.imgur.com/S8OrzMM.jpg", 
"https://i.imgur.com/6KkS7Ae.jpg",
"https://i.imgur.com/9SNaZEn.jpg",
"https://i.imgur.com/fvVgbE6.jpg",
"https://i.imgur.com/6Q5o1nV.jpg",
"https://i.imgur.com/yYpOEOd.png?1",
"https://i.imgur.com/Tlo58Ge.jpg",
"https://i.imgur.com/0R26ka3.png",
"https://i.imgur.com/433YUdv.png",
"https://i.imgur.com/6fnhLcc.jpg",
"https://i.imgur.com/RIhdk23.png?1", 
"https://i.imgur.com/MClvUr8.png",
"https://i.imgur.com/8lrJelW.png?1",
"https://i.imgur.com/y1SUecn.jpg",
"https://i.imgur.com/Q6zO3SP.png?1",
"https://i.imgur.com/BoYFUzT.jpg",
"https://i.imgur.com/M3UqZl7.png?1",
"https://i.imgur.com/de5O4SG.jpg?1",
"https://i.imgur.com/6J7ROL4.jpg",
"https://i.imgur.com/eSufoFr.jpg?1",
"https://i.imgur.com/jy6kMyN.jpg",
"https://i.imgur.com/6gbjC2s.png?1",
"https://i.imgur.com/uC5Xk9n.jpg",
"https://i.imgur.com/Fa63zAu.png?1",
"https://i.imgur.com/CoHn9oL.jpg",
"https://i.imgur.com/2srG6Zu.jpg",
"https://i.imgur.com/gU52ZFe.jpg",
"https://i.imgur.com/GtgqZ4k.png?1",
"https://i.imgur.com/52bsndV.jpg",
"https://i.imgur.com/VYIXrcz.png",
"https://i.imgur.com/vKD5Imw.jpg?1",
"Images/nico robin.webp",
"https://i.imgur.com/oH428h6.jpg?2",
"https://i.imgur.com/p4AtWTd.jpg?1",
"https://i.imgur.com/hWi5D2h.jpg?1",
"https://i.imgur.com/vBo0gvT.jpg?1",
"https://i.imgur.com/8wi5u4M.png?1",
"https://i.imgur.com/uhYdU3G.png?1",
"https://i.imgur.com/p2yq9Yy.jpg",
"https://i.imgur.com/LXoW3aS.png?1",
"https://i.imgur.com/I6xEvcf.jpg?1",
"https://i.imgur.com/yYfvgPG.jpg",
"https://i.imgur.com/NAreeyh.jpg",
"https://i.imgur.com/D4KJeT5.jpg",
"https://i.imgur.com/PbPibq9.jpg",
"https://i.imgur.com/twsQSXy.jpg",
"https://i.imgur.com/eNtgBoQ.jpg?1",
"https://i.imgur.com/97rTUZR.png?1"];

var imageLink = "";

var randomNumber = 0;

var element = document.getElementById("listOfCharacters");
var characterDropDown = "";
for(var i = 0; i < characters.length;i++) {
    characterDropDown += "-" + characters[i] + "<br>";
}
element.innerHTML = characterDropDown;




function match() {

    randomNumber = Math.floor((Math.random() * characters.length));

    document.getElementById("first-name").innerHTML = characters[randomNumber];

    document.getElementById("first-image").style.backgroundImage="url('"+ images[randomNumber]+ "')";

    randomNumber = Math.floor((Math.random() * characters.length));

    document.getElementById("second-name").innerHTML = characters[randomNumber];

    document.getElementById("second-image").style.backgroundImage="url('"+ images[randomNumber]+ "')";


}