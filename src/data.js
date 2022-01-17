const parks = [
    {
        id: 1,
        title: 'Banff National Park',
        province:'Alberta',
        img:'./images/item-1.jpg',
        desc:'Rocky Mountain peaks, turquoise glacial lakes, a picture-perfect mountain town and village, abundant wildlife and scenic drives come together in Banff National Park - Canada’s first national park and the flagship of the nation’s park system. Over three million visitors a year make the pilgrimage to the park for a variety of activities including hiking, biking, skiing and camping in some of the world’s most breathtaking mountain scenery. Banff is part of the Canadian Rocky Mountain Parks UNESCO World Heritage Site.'
    },
    {
        id: 2, 
        title: 'Gulf Islands National Park Reserve',
        province:'British Columbia',
        img:'./images/item-2.jpg',
        desc:'Eagles and seabirds swirl in the skies above the Salish Sea, sheltered, islet-dotted waters teeming with seals, otters, orcas and pods of porpoises. Kayak, hike or cycle a lush paradise with rare eco-systems basking in a Mediterranean-like climate - the forested Gulf Islands are laced with trails leading to mountaintop viewpoints, lighthouses, and reminders of First Nations and pioneer pasts, while their shores and lagoons are a haven for thriving birdlife. '
    },
    {
        id: 3,
        title: 'Jasper National Park',
        province:'Alberta',
        img:'./images/item-3.jpg',
        desc:`Extending over 11,000 square kilometres, it is the largest national park in the Canadian Rockies and part of UNESCO's Canadian Rocky Mountain Parks World Heritage Site.`
    },
    {
        id: 4, 
        title:'Waterton Lakes National Park',
        province:'Alberta',
        img:'./images/item-4.jpg',
        desc:'The prairies of Alberta meet the peaks of the Rocky Mountains in Waterton Lakes National Park. Clear lakes, thundering waterfalls, rainbow-coloured streams, colourful rocks and mountain vistas await hikers and sightseers. With an exceptional diversity of wildlife and wildflowers and a cozy little waterfront town to serve as a home base, Waterton packs a big natural punch into a relatively small and accessible area.'
    },
    {
        id: 5,
        title:'Glacier National Park',
        province:'British Columbia',
        img:'./images/item-5.jpg',
        desc:'With exceptional alpine scenery and deep valleys filled with ancient forests, Glacier National Park is a year-round paradise. Scale its heights following trails pioneered by legendary Swiss mountain guides, take a gentle stroll amid moss-draped old-growth cedars or hike through alpine meadows strewn with lichen-covered boulders. After a day’s exploring, sink into an armchair before a roaring fire and steep yourself in the history of Rogers Pass, the final link in the railway that brought Canada together as a nation.'
    },
    {
        id: 6,
        title: 'Elk Island National Park',
        province:'Alberta',
        img:'./images/item-6.jpg',
        desc:'Just 35 minutes east of Edmonton lies a natural wonderland open all year long! Spread a blanket and gaze at a starry sky free from city lights or follow the footprints of a bison and learn how this magnificent animal was brought back from near extinction. In addition to being an important refuge for bison, elk and more than 250 bird species, Elk Island National Park is also an oasis of calm for day picnickers and overnight campers alike.'
    },
    {
        id: 7,
        title: 'Gwaii Haanas National Park Reserve, National Marine Conservation Area Reserve, and Haida Heritage Site',
        province:'British Columbia',
        img:'./images/item-7.jpg',
        desc:'Massive moss-draped cedar and Sitka spruce tower above the Haida people’s ancient carved poles and fallen longhouses on the lush rainforest islands of Gwaii Haanas. Skies fill with bald eagles, bears scavenge salmon on wild beaches and the ocean teems with breaching whales, porpoises and sea lions. Experience a rich, remote landscape steeped in spirituality, protected by Parks Canada and the Haida who draw cultural inspiration from this land of their ancestors.'
    },
    {
        id: 8,
        title: 'Kootenay National Park',
        province:'British Columbia',
        img:'./images/item-8.jpg',
        desc:'Established in 1920 as part of an agreement to build a new road across the Rockies, Kootenay National Park is a place of unique contrasts, from icy mountain rivers to steamy hot springs. Take a 60-minute scenic drive and discover a new surprise around every bend. Spend the day exploring deep canyons and tumbling waterfalls just a short stroll from the road. Or, plan a vacation traversing the park’s backcountry trails.'
    },
    {
        id: 9,
        title: 'Mount Revelstoke National Park',
        province:'British Columbia',
        img:'./images/item-9.jpg',
        desc:'Take a cool stroll through a lush rainforest on a hot summer day. Stand at the point of no return, where champions once launched themselves down a world-famous ski jump, and imagine the thrill of flight. Climb the only mountain in the national park system that you can summit just a short walk from your car - all at Mount Revelstoke National Park.'
    },
    {
        id:10,
        title:'Pacific Rim National Park Reserve',
        province:'British Columbia',
        img:'./images/item-10.jpg',
        desc:'Suit up in your storm gear and watch the winter breakers crash on a rocky shoreline, or enjoy a summer stroll along an endless sandy beach. Step out of your kayak to be greeted by a First Nation Beach Keeper, or hear ancient legends told around the campfire by Guardians of the West Coast Trail. Pacific Rim National Park Reserve offers a West Coast experience steeped in nature and history.'
    },
    {
        id:11,
        title:'Yoho National Park',
        province:'British Columbia',
        img:'./images/item-11.jpg',
        desc:'Yoho National Park lies on the western slopes of the Canadian Rocky Mountains. Vertical rock walls, waterfalls and dizzying peaks draw visitors from around the world. With exceptional hiking and sightseeing, the park offers a unique glimpse of Canada’s natural wonders, from the secrets of ancient ocean life to the power of ice and water.'
    },
    {
        id:12,
        title:'Riding Mountain National Park',
        province:'Manitoba',
        img:'./images/item-12.jpeg',
        desc:'Riding Mountain is home to a staggering diversity of living things. The windswept grasslands and deep, silent forests, of secretive wolf packs, of orchids and lilies, of lakes and wetlands singing with life. Riding Mountain National Park is in Treaty 2 Territory, where we work with Anishinabe, First Nations from treaties 2, 4, and 1. We honour, acknowledge, and recognize Indigenous contributions to the park, the province, and Canada.'
    },
    {
        id:13,
        title:'Wapusk National Park',
        province:'Manitoba',
        img:'./images/item-13.jpg',
        desc:'Let this expansive wilderness fill you with awe as you visit the remote subarctic that is Wapusk National Park. This 11,475 square kilometre park, at the transition between boreal forest and arctic tundra, protects one of the largest polar bear maternity denning areas in the world. Wapusk is located within the range of the Western Hudson Bay population of polar bears, which numbers approximately 1000 bears. Nature lovers watch for arctic foxes, arctic hares, wolves, caribou and wolverine as well as more than 200 bird species. '
    },
    {
        id:14,
        title:'Fundy National Park',
        province:'New Brunswick',
        img:'./images/item-14.jpg',
        desc:'Experience the world’s highest tides - not to mention pristine forests, deluxe campgrounds and a taste of Atlantic Canada culture – at Fundy National Park. Paddle in a kayak as the waters rise up to 12 m or more. Walk the otherworldly ocean floor at low tide. Or venture inland where trails lead to waterfalls deep in Acadian forests. With unique camping options – including yurts – and even regular music performances, Fundy is a Maritime treasure.'
    },
    {
        id:15,
        title:'Kouchibouguac National Park',
        province:'New Brunswick',
        img:'./images/item-15.jpg',
        desc:'Discover a national park on New Brunswick’s Acadian Coast where lush mixed-wood forests lead to colorful salt marshes and warm ocean beaches. Offshore, golden sand dunes foster calm seas. At night, this Dark Sky Preserve is a celestial masterpiece; in winter, it is a snowbound fun zone. And each of these natural wonders intertwines with fascinating Mi’gmaq and Acadian cultures.'
    },
    {
        id:16,
        title:'Akami-Uapishkᵁ-KakKasuak-Mealy Mountains National Park Reserve',
        province:'Newfounland and Labrador',
        img:'./images/item-16.jpg',
        desc:'Located in Labrador, the glacially-rounded, bare rock summits of the Mealy Mountains reach up to 1180 meters to overlook Lake Melville. The pristine landscape of mountain tundra, marine coasts, boreal forests, islands and rivers are home to numerous boreal species. For thousands of years, ancient human cultures have also called this place home. For the Innu, Inuit, and others, the landscapes of this outstanding natural region hold great cultural significance. The traditional names of the park are Akami-Uapishkᵁ, an Innu word meaning White Mountains across, and KakKasuak, a Labrador Inuit word for mountain.'
    },
    {
        id:17,
        title:'Gros Morne National Park',
        province:'Newfounland and Labrador',
        img:'./images/item-17.jpg',
        desc:'Soaring fjords and moody mountains tower above a diverse panorama of beaches and bogs, forests and barren cliffs. Shaped by colliding continents and grinding glaciers, Gros Morne’s ancient landscape is a UNESCO World Heritage Site. Wander coastal pathways and beachcomb among sea stacks. Cruise the dramatic, sheer-walled gorge of Western Brook Pond. Spot moose and caribou. Hike to alpine highlands where Arctic hare and ptarmigan thrive on tundra, and explore the colourful culture of nearby seaside communities.'
    },
    {
        id:18,
        title:'Terra Nova National Park',
        province:'Newfounland and Labrador',
        img:'./images/item-18.jpg',
        desc:'Escape. Explore. Experience… The wonder and drama of Canada’s most Easterly National Park, Terra Nova. It’s a magical place where the land and sea compete for your attention, where the island boreal forest reveals its natural and cultural secrets as you hike a trail and where you can experience an evening of theatre under the stars. This place is ready for your next adventure-make it your own!'
    },
    {
        id:19,
        title:'Torngat Mountains National Park',
        province:'Newfounland and Labrador',
        img:'./images/item-19.jpg',
        desc:'A saw-tooth skyline of jagged peaks and glacier-carved fjords plunges towards iceberg-dotted indigo waters as polar bears and caribou roam amid some of Earth’s oldest rocks. The subarctic Torngat Mountains are an Inuit homeland, a treasury of the powerful stories, spirits and traditions of centuries of travellers. Inuit welcome visitors to join them in following ancient footsteps through a dramatic landscape - where nature and culture connect.'
    },
    {
        id:20,
        title:'Aulavik National Park',
        province:'Northwest Territories',
        img:'./images/item-20.jpg',
        desc:'Aulavik National Park is one of the most isolated parks in North America, and rescue services and facilities are limited. It is important for visitors to be self-sufficient, self-reliant, and capable of handling emergencies. Parks Canada has a search and rescue team based in Inuvik, however, rescue operations are dependent on weather, aircraft or staff mobilization response time. Additionally, due to the impacts of COVID-19, mountain and swift water rescue services are greatly reduced in the Western Arctic, and could take up to a week to access the park based on resource availability. Aulavik, meaning " place where people travel " in Inuvialuktun, protects more than 12,000 square kilometres of arctic lowlands on the north end of Banks Island. The park encompasses a variety of landscapes from fertile river valleys to polar deserts, buttes and badlands, rolling hills, and bold seacoasts.'
    },
    {
        id:21,
        title:'Nahanni National Park Reserve',
        province:'Northwest Territories',
        img:'./images/item-21.jpg',
        desc:'The Cirque of the Unclimbables’ granite spires rise out of the lush alpine meadow, at Náįlįcho (Virginia Falls) the South Nahanni River surges over a drop twice the height of Niagara Falls. Nahanni National Park Reserve, encompassing 30,000 square kilometers, is a designated UNESCO world heritage site. The Dehcho First Nations welcome adventurers to Nahʔą Dehé, land of peaks, plateaus and wild rivers.'
    },
    {
        id:22,
        title:`Nááts'įhch'oh National Park Reserve`,
        province:'Northwest Territories',
        img:'./images/item-22.jpg',
        desc: `Nááts'įhch'oh National Park Reserve is named after Nááts'įhch'oh the mountain - a powerful place for the people of the Sahtu. Near the Yukon-Northwest Territories border, the park is in the traditional lands of the Shúhtaot'ine (Mountain Dene), and home to grizzly bear, Dall's sheep, mountain goats, and woodland caribou.`
    },
    {
        id:23,
        title:'Thaidene Nene National Park Reserve',
        province:'Northwest Territories',
        img:'./images/item-23.jpg',
        desc:`Thaidene Nene National Park Reserve is a culturally rich area, including the traditional and present-day hunting, fishing, gathering and spiritual areas used by Indigenous peoples. For the Łutsël K'é Dene First Nation, Thaidene Nene is the heart of their homeland and a sacred place. Thaidene Nëné means ‘Land of the Ancestors’ in Dënesųłiné Yati. The Northwest Territory Métis Nation, Deninu K’ue First Nation and Yellowknives Dene First Nation also have traditional and cultural ties to the area. The North Slave Métis Alliance also asserts traditional territory in the National Park Reserve.`
    },
    {
        id:24,
        title:'Tuktut Nogait National Park',
        province:'Northwest Territories',
        img:'./images/item-24.jpg',
        desc:'The landscape and wildlife of the 18,890 sq km national park is seen by those privileged few willing to travel 170 kilometres north of the Arctic Circle. Tuktut Nogait (pronounced Took-toot Noo-guy-t) National Park features features rolling hills, three major rivers, steep canyons, waterfalls, rare Bluenose west caribou and the continent’s fiercest predators.'
    },
    {
        id:25,
        title:'Wood Buffalo National Park',
        province:'Northwest Territories',
        img:'./images/item-25.jfif',
        desc:`As part of Canada's system of national parks and national historic sites, Wood Buffalo National Park of Canada is our country's largest national park and one of the largest in the world. It was established in 1922 to protect the last remaining herds of bison in northern Canada. Today, it protects an outstanding and representative example of Canada's Northern Boreal Plains.`
    },
    {
        id:26,
        title:'Cape Breton Highlands National Park',
        province:'Nova Scotia',
        img:'./images/item-26.jpg',
        desc:`One of Canada’s most enchanting places, where the mountains meet the sea. As you hug the world-famous Cabot Trail coastline you'll wind through Cape Breton Highlands National Park, where lush, forested river canyons carve into the ancient plateau, edged by rust-coloured cliffs.`
    },
    {
        id:27,
        title:'Kejimkujik National Park and National Historic Site',
        province:'Nova Scotia',
        img:'./images/item-27.jpg',
        desc:'Generations of families have paddled, hiked, camped, and connected with nature and Mi’kmaw culture at Kejimkujik National Park and National Historic Site. When the sun sets, the skies over Kejimkujik reveal a beautiful panorama of tens of thousands of stars in Nova Scotia’s only Dark Sky Preserve. Rock engravings known as petroglyphs, traditional encampment areas, and canoe routes attest to the presence of the Mi’kmaw people for thousands of years.'
    },
    {
        id:28,
        title:'Sable Island National Park Reserve',
        province:'Nova Scotia',
        img:'./images/item-28.jpg',
        desc:'A wild and windswept island of sand sits far out in the North Atlantic, its iconic crescent shape emerging from the expanse of the sea. Isolated and remote, Sable Island is one of Canada’s furthest offshore islands. Shifting sand dunes, among Eastern Canada’s largest, dominate the landscape. The famous Sable Island wild horses roam freely, and the world’s biggest breeding colony of grey seals lives on its extensive beaches. Freshwater ponds hint at the life-sustaining freshwater lens floating below the island. Plants, birds, and insects have adapted to life on Sable, some of which are found nowhere else on earth.'
    },
    {
        id:29,
        title:'Auyuittuq National Park',
        province:'Nunavut Territory',
        img:'./images/item-29.jpg',
        desc:'A zig-zag skyline of craggy granite peaks and glittering glaciers overlooks tundra valleys and steep-walled fiords whose winding waterways teem with narwhal and ringed seals, Auyuittuq is a diverse and grand-scale Arctic experience. Hike alongside icy, thundering streams and amid wildflower-dotted meadows. Traverse Akshayuk Pass, a natural corridor through a landscape of towering rock - a haven for experienced mountaineers and backcountry skiers. Spot snow geese, Arctic foxes, and human-shaped Inuksuit basking in Midnight Sun.'
    },
    {
        id:30,
        title:'Qausuittuq National Park',
        province:'Nunavut Territory',
        img:'./images/item-30.png',
        desc:'Imagine a cluster of islands in a frozen sea, a home for the endangered Peary caribou, a traditional hunting and fishing area that has sustained Inuit of Resolute Bay since the time of their relocation in the 1950’s; Qausuittuq National Park is all of that and more.'
    },
    {
        id:31,
        title:'Quttinirpaaq National Park',
        province:'Nunavut Territory',
        img:'./images/item-31.jpg',
        desc:'Shimmering ice caps are punctured by jagged black peaks and massive glaciers fuel wild rivers. White Arctic hare graze amid a purple saxifrage-dotted landscape while ancient peoples’ camps and explorers’ shelters dot rugged, pristine Quttinirpaaq. The top of the world is an extreme and exhilarating experience where groups of muskoxen roam the tundra and curious caribou pass nearby in the glow of the Midnight Sun.'
    },
    {
        id:32,
        title:'Sirmilik National Park',
        province:'Nunavut Territory',
        img:'./images/item-32.jpg',
        desc:'Amid an expansive landscape of glaciers, valleys and red-rock hoodoo spires, nesting seabirds crowd sheer sea cliffs rising from iceberg-dotted waters. Paddle among seals and floating ice, listening for the breaths of narwhal and beluga whales. Ski across glaciers. Hike where snowy owls hunt. Travel by snowmobile to the floe edge on the lookout for polar bears, ringed seals and walruses. Stop in at Inuit, Thule and European cultural sites. Visiting Sirmilik is the ultimate Arctic adventure under the Midnight Sun.'
    },
    {
        id:33,
        title:'Ukkusiksalik National Park',
        province:'Nunavut Territory',
        img:'./images/item-33.jpg',
        desc:'Polar bears, grizzlies, Arctic wolves and caribou - Ukkusiksalik’s rolling ochre hills and lush tundra thrive with wildlife, and are dotted with archeological reminders of human cultures passing for millennia through this remote wilderness. Paddle or boat an inland sea amid beluga whales and seals. Snowmobile across the frozen sea. Hike through wildflowers and in the company of stone inuksuk beneath the glow of the Midnight Sun.'
    },
    {
        id:34,
        title:'Bruce Peninsula National Park',
        province:'Ontario',
        img:'./images/item-34.jpg',
        desc:'Dramatic cliffs rise from the turquoise waters of Georgian Bay. In large tracts of forest, black bears roam and rare reptiles find refuge in rocky areas and diverse wetlands. Ancient cedar trees spiral from the cliff-edge; a multitude of orchids and ferns take root in a mosaic of habitats. Welcome to the magic of Bruce Peninsula National Park'
    },
    {
        id:35,
        title:'Georgian Bay Islands National Park',
        province:'Ontario',
        img:'./images/item-35.png',
        desc:'Welcome to the world’s largest freshwater archipelago—home to a boat-access nature preserve situated where the windswept white pines and granite shores of the Canadian Shield turn to dense deciduous woodland. Here, adventure is easy. Cycle wooded trails, overnight at secluded campsites or waterfront cabins and hike to viewpoints atop emerald shoreline. The landscape of Georgian Bay Islands National Park inspired the Group of Seven. Let it inspire you.'
    },
    {
        id:36,
        title:'Point Pelee National Park',
        province:'Ontario',
        img:'./images/item-36.jpg',
        desc:'At the southernmost point of the Canadian mainland - Point Pelee National Park, experience nature like never before. Each spring, view flocks of migratory birds, joined in autumn by waves of vivid Monarch butterflies. In winter, wander the trails in solitude and catch the natural ice formations. In summer, bask on sandy beaches. Whether you cycle, paddle, or hike Canada’s second smallest and most ecologically diverse national park, you’ll be immersed in an unforgettable eco-adventure.'
    },
    {
        id:37,
        title:'Pukaskwa National Park',
        province:'Ontario',
        img:'./images/item-37.jpg',
        desc:`Waves roll across immense Lake Superior and crash against a remote granite shore. Tracts of windswept spruce and pine reach beyond the horizon from towering cliffs and along secluded sandy beaches. Black bears feast on blueberry bushes; haunting loon song scores sunsets; moose stilt-walk across wetlands. And the culture of the Anishinaabe First Nations connects Pukaskwa National Park's wilderness to the powerful richness of an ancient human story.`
    },
    {
        id:38,
        title:'Rouge National Urban Park',
        province:'Ontario',
        img:'./images/item-38.jpg',
        desc:`A rich assembly of natural, cultural and agricultural landscapes, Rouge National Urban Park is home to amazing biodiversity, some of the last remaining working farms in the Greater Toronto Area, Carolinian ecosystems, Toronto’s only campground, one of the region’s largest marshes, a beach at Lake Ontario, amazing hiking opportunities, and human history dating back over 10,000 years, including some of Canada's oldest known Indigenous sites.`
    },
    {
        id:39,
        title:'Thousand Islands National Park',
        province:'Ontario',
        img:'./images/item-39.jpg',
        desc:'Journey to the picturesque granite islands and windswept pine trees of Thousand Islands National Park. Explore secluded bays by kayak or powerboat. Enjoy a day by the river or overnight in waterfront oTENTik accommodations at the park’s mainland visitor centre. Discover rare species of turtles and birdlife alongside undulating hiking trails. Experience the magic of this captivating and historic wilderness, just a few hours from Toronto or Montreal.'
    },
    {
        id:40,
        title:'Prince Edward Island National Park',
        province:'Prince Edward Island',
        img:'./images/item-40.jpg',
        desc:'Gentle surf strokes sandy beaches alongside red cliffs and wind-sculpted dunes. Cycle a seashore path, savour a picnic by a lighthouse and spot heron wading in coastal bays. Hike woodlands and overlook ponds watching for red fox, waterfowl and warblers, then head to one of many beaches to build spectacular sandcastles. At sunset, roast marshmallows over a campfire listening to tales and songs - Prince Edward Island National Park is a giant playground for kids of all ages.'
    },
    {
        id:41,
        title:'Forillon National Park',
        province:'Quebec',
        img:'./images/item-41.jpg',
        desc:'Forillon National Park offers a wide range of experiences by the sea, along cliffs and in the forest. Prefer a quiet stroll across a pebble beach? Want to look into history by opening the door to a beautiful yellow house overlooking the bay? Go snorkelling and discover colourful underwater plant and wildlife. Watch seals play. Listen carefully to hear the songs of seabirds and the spouts of the whales…'
    },
    {
        id:42,
        title:'La Mauricie National Park',
        province:'Quebec',
        img:'./images/item-42.jpg',
        desc:`As well as forests of conifers and hardwoods, La Mauricie will treat you to touches of azure: the Park has more than 150 lakes of various sizes. During the day, let the haunting cry of the common loon thrill your spirit. Nearby, pools at the foot of waterfalls invite you to come for a swim. When evening falls, it's the hooting of the barred owl or the great horned owl that lulls you to sleep.`
    },
    {
        id:43,
        title:'Mingan Archipelago National Park Reserve',
        province:'Quebec',
        img:'./images/item-43.jpg',
        desc:'Instantly captivating, the Mingan Archipelago features colossal limestone outcroppings that evoke landscapes from primeval times. Frolicking whales and seals enliven the vast, blue horizon, while over 1,000 islands and islets enchant visitors with their unique flora and seabird colonies. Discover this timeless natural wonder aboard a sea expedition or by exploring the many island nature trails!'
    },
    {
        id:44,
        title:'Grasslands National Park',
        province:'Saskatchewan',
        img:'./images/item-44.jpg',
        desc:'Experience the solitude of the wide-open plain as the prairie wind ripples a sea of grasses beneath the clear blue sky. Ride a traditional wagon, sit before a crackling campfire or spend the night beneath a canopy of brilliant stars. Travel back in time as you gaze at dinosaur bones, wander past tipi rings and catch a glimpse of a prairie homestead on the distant horizon.'
    },
    {
        id:45,
        title:'Prince Albert National Park',
        province:'Saskatchewan',
        img:'./images/item-45.jpg',
        desc:'Whether you visit in springtime to walk the trails and watch for the first migratory birds returning, in summer for the beach and lake in the town site of Waskesiu, in autumn to horseback ride on the west side of the park in search of plains bison, or in winter to cross-country ski and listen to the sound of wolves howling, Prince Albert National Park is sure to delight.'
    },
    {
        id:46,
        title:'Ivvavik National Park',
        province:'Yukon Territory',
        img:'./images/item-46.jpg',
        desc:`Ivvavik, meaning ‘a place for giving birth, a nursery,' in Inuvialuktun, the language of the Inuvialuit, is the first national park in Canada to be created as a result of an Indigenous land claim agreement – the Inuvialuit Final Agreement (1984). The park protects a portion of the calving grounds of the Porcupine caribou herd and represents the Northern Yukon and Mackenzie Delta natural regions.`
    },
    {
        id:47,
        title:'Kluane National Park and Reserve',
        province:'Yukon Territory',
        img:'./images/item-47.jpg',
        desc:`Kluane - high in the mountains of southwest Yukon – is a land of extremes. The park is home to Canada’s highest peak (5,959-metre Mount Logan), its largest ice field and North America’s most genetically diverse grizzly population. Travellers from around the world come to traverse alpine passes on backcountry odysseys and raft past calving glaciers. With exceptional day hikes and highway-side scenery, Kluane awes from every angle.`
    },
    {
        id:48,
        title:'Vuntut National Park',
        province:'Yukon Territory',
        img:'./images/item-48.jpg',
        desc:'Remote and unspoiled Arctic wilderness, a First Nation’s history dating back millennia and the setting for one of the planet’s great animal migrations await the few who make the trek to Vuntut National Park.'
    },
];
export default parks;
