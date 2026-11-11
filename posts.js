// Wander With Suzy: all blog posts live here.
// blog.html builds the post grid from this list, and post.html?p=<slug> shows one full article.
// Newest post first. To add a post, copy one entry, give it a new unique slug, and put its photo in images/.

window.POSTS = [
  {
    slug: "santorini-sunsets",
    title: "Chasing the Perfect Sunset in Santorini",
    date: "2026-11-02",
    place: "Santorini, Greece",
    category: "Culture",
    image: "./images/santorini.jpg",
    imageAlt: "White houses and a windmill on the cliffs of Oia at sunset",
    readTime: 6,
    excerpt: "Forget Oia's crowds — I found three quiet cliffside spots where the sky turns every shade of peach and nobody's elbowing for a photo. Here's exactly where to stand and when to get there.",
    body: `
      <p>Everyone warns you about the Oia sunset crowds, and everyone is right. By six o'clock the castle ruins at the tip of the village are packed shoulder to shoulder, phones held high, and the moment the sun touches the sea there's a round of applause. It's fun once. But after my first night squeezed between a tour group and a wedding shoot, I spent the rest of the week looking for somewhere quieter. Here's what I found.</p>

      <h2>1. The path between Fira and Imerovigli</h2>
      <p>The caldera footpath that links Fira, Firostefani and Imerovigli is about three kilometres of whitewashed steps, little chapels and views straight down into the volcano. Start walking north from Fira about an hour before sunset and simply stop wherever the light looks best. There are dozens of low walls to sit on, and most people are heading the other way to dinner.</p>

      <h2>2. Skaros Rock</h2>
      <p>Below Imerovigli, a rocky headland sticks out into the caldera. Once it held a medieval castle; now it holds a handful of goats and some of the best views on the island. The path down is steep and uneven, so wear proper shoes and bring water, but the reward is a 360-degree sunset with Oia glowing pink in the distance. I counted eleven people on the night I went.</p>

      <h2>3. The rooftops of Pyrgos</h2>
      <p>Pyrgos is an inland hill village that most visitors drive straight past. Climb up through its maze of lanes to the old Venetian castle at the top and you'll see the whole island laid out below you, with the sun dropping behind the caldera rim. Afterwards, there are tiny family tavernas where dinner costs half what it does on the cliffs.</p>

      <h2>When to go</h2>
      <p>May, June and late September are the sweet spots: warm enough to swim, but without the August crush. Check the sunset time each day and aim to arrive 45 minutes early. The best colour often comes ten or fifteen minutes <em>after</em> the sun disappears, just as everyone else is packing up.</p>

      <div class="tip-box">
        <h3>Suzy's quick tips</h3>
        <ul>
          <li>Bring a light jacket. The wind on the caldera rim gets chilly after dark.</li>
          <li>If you do want the classic Oia view, go for <strong>sunrise</strong> instead. You'll have it almost to yourself.</li>
          <li>Book dinner somewhere you can walk to. Buses back from Oia after sunset are packed.</li>
        </ul>
      </div>

      <p>Santorini is famous for a reason, and the sunsets really are impossible. You just have to take a few steps away from the crowd to enjoy them properly.</p>
    `
  },
  {
    slug: "hanoi-pho-crawl",
    title: "48 Hours, 11 Bowls of Pho: A Hanoi Food Crawl",
    date: "2026-10-18",
    place: "Hanoi, Vietnam",
    category: "Food",
    image: "./images/hanoi-pho.jpg",
    imageAlt: "A bowl of beef pho with fresh herbs and chopsticks",
    readTime: 7,
    excerpt: "From 5am broth stalls to tiny plastic stools in the Old Quarter, here's every bowl I ate, what made each one different, and the one I'm still dreaming about.",
    body: `
      <p>I arrived in Hanoi with one goal: to understand pho. Not just to eat it, but to taste enough bowls, side by side, to know what makes a great one. Forty-eight hours and eleven bowls later, I'm not sure I'm an expert, but I am very, very full.</p>

      <h2>Pho is a breakfast food</h2>
      <p>The first thing to know is that Hanoians eat pho early. The best stalls start ladling broth at dawn and many sell out by mid-morning. So my alarm went off at 5:30, and by six I was on a tiny plastic stool on a pavement in the Old Quarter, watching the owner slice raw beef paper-thin and drop it into a bowl, where the boiling broth cooked it in seconds.</p>

      <h2>Northern style: simple on purpose</h2>
      <p>If you've eaten pho outside Vietnam, you might expect a plate piled with basil, bean sprouts and lime. Hanoi-style pho is more restrained. The focus is the broth: clear, deeply beefy, gently scented with star anise, cinnamon and charred ginger. You'll get spring onions, maybe some chilli and a squeeze of lime, and that's it. It took me three bowls to stop missing the herbs and five to realise I didn't need them.</p>

      <h2>The bowls that stood out</h2>
      <ul>
        <li><strong>Pho tai</strong> (rare beef): the classic, and the best test of a broth. My favourite came from a family-run shop on Bat Dan street, where the queue starts before sunrise.</li>
        <li><strong>Pho ga</strong> (chicken): lighter and sweeter, with shredded chicken and a scattering of lime leaves. Perfect for a hot afternoon.</li>
        <li><strong>Pho cuon</strong>: not soup at all, but fresh rice-noodle sheets rolled around stir-fried beef and herbs, dipped in a sweet-sour sauce. A revelation.</li>
        <li><strong>Pho xao</strong>: wide noodles stir-fried with beef and greens, crispy at the edges. The perfect late-night bowl after a bia hoi or two.</li>
      </ul>

      <h2>The one I'm still dreaming about</h2>
      <p>Bowl number nine. A woman with a single pot on a street corner near Hoan Kiem Lake, no sign, no menu, about six stools. The broth was so clear I could see the bottom of the bowl, and so rich it tasted like it had been simmering since the day before (it probably had). I went back the next morning to say goodbye.</p>

      <div class="tip-box">
        <h3>Suzy's quick tips</h3>
        <ul>
          <li>Go early. The best broth is the first broth of the day.</li>
          <li>Follow the locals. A crowded stall with low stools beats a restaurant with an English menu.</li>
          <li>Try the extras on the table: chilli vinegar, fresh garlic, and quẩy (fried dough sticks) for dunking.</li>
        </ul>
      </div>
    `
  },
  {
    slug: "bali-lake-temple",
    title: "Misty Mornings at Bali's Floating Lake Temple",
    date: "2026-10-04",
    place: "Bali, Indonesia",
    category: "Adventure",
    image: "./images/bali.jpg",
    imageAlt: "The tiered shrine of Ulun Danu Bratan temple on the lake, with red flowers in front",
    readTime: 5,
    excerpt: "An alarm at 4am, a scooter ride up into the highlands, and Ulun Danu Bratan rising out of the lake mist. It made every sleepy minute worth it. Plus the warung breakfast that followed.",
    body: `
      <p>Most people picture Bali as beaches and beach clubs. But drive a couple of hours north, up into the volcanic highlands around Bedugul, and the island changes completely. The air turns cool, the hills turn green, and on the shore of Lake Bratan sits one of the most beautiful temples I've ever seen.</p>

      <h2>The 4am alarm</h2>
      <p>Ulun Danu Bratan gets busy by mid-morning, when the tour buses arrive from the south. So I left my guesthouse in the dark, wrapped in every layer I'd packed, and rode up the winding mountain road on a rented scooter. It was cold. Properly cold. Nobody tells you that Bali can be cold.</p>

      <h2>A temple on the water</h2>
      <p>I arrived just as the sky was turning grey-blue. Mist was sitting low on the lake, and the temple's tall, tiered shrine seemed to float on top of it. The temple is dedicated to Dewi Danu, the goddess of the lake, and the water here feeds the rice terraces and farms across this part of the island. For the first half hour I shared it with a few photographers, a gardener and a lot of very loud birds.</p>
      <p>As the sun burned through the clouds, the mist lifted, the mountains appeared behind the shrine, and the gardens of red and yellow flowers lit up. I sat on a bench and didn't take a single photo for twenty minutes.</p>

      <h2>The breakfast that followed</h2>
      <p>On the road back down, I stopped at a tiny warung (a family-run café) for nasi campur, a plate of rice with small helpings of whatever the cook made that morning, plus a glass of sweet, gritty Balinese coffee. Then I took a detour through the strawberry farms around Bedugul and bought a bag of berries for the ride home.</p>

      <div class="tip-box">
        <h3>Suzy's quick tips</h3>
        <ul>
          <li>Arrive at opening time for mist, soft light and no crowds.</li>
          <li>Pack a warm layer and a rain jacket. The highlands are much cooler and wetter than the coast.</li>
          <li>Dress respectfully. A sarong is usually required at temples and can be borrowed or rented at the entrance.</li>
          <li>Only ride a scooter if you're confident on mountain roads. Otherwise, hire a driver for the day.</li>
        </ul>
      </div>
    `
  },
  {
    slug: "marrakech-souks",
    title: "Getting Gloriously Lost in the Souks of Marrakech",
    date: "2026-09-21",
    place: "Marrakech, Morocco",
    category: "Adventure",
    image: "./images/marrakech-souk.jpg",
    imageAlt: "Food stalls and crowds in Jemaa el-Fnaa square at dusk",
    readTime: 6,
    excerpt: "Maps are useless in the medina, and that's the point. How I learned to haggle, drink mint tea with strangers, and stop worrying about finding my way back.",
    body: `
      <p>On my first morning in Marrakech, I opened my phone's map, picked a route to a spice market ten minutes away, and walked confidently into the medina. Forty minutes later I was standing in a leather-dyers' alley I had definitely passed three times, being offered directions by a ten-year-old for a small fee. That was when I put the phone away.</p>

      <h2>The medina is a maze on purpose</h2>
      <p>The old walled city of Marrakech is a tangle of narrow lanes, dead ends and covered market streets, called souks, each one traditionally specialising in a single craft: lanterns, carpets, spices, slippers, metalwork. GPS gets confused under the roofs and between the high walls. The trick is to stop fighting it. Pick a direction, follow whatever catches your eye, and trust that every lane eventually leads back to a landmark.</p>

      <h2>How I learned to haggle</h2>
      <p>Bargaining here is a conversation, not a fight. My first attempt was a disaster (I agreed to the first price, and the shopkeeper looked almost disappointed). By day three I'd learned the rhythm:</p>
      <ul>
        <li>Decide what something is worth to you before you ask the price.</li>
        <li>Counter with about a third to a half of the first offer, and smile.</li>
        <li>Take your time. Accept the tea if it's offered.</li>
        <li>If the price isn't right, thank them warmly and walk away. Sometimes they'll call you back.</li>
      </ul>
      <p>I came home with a brass lantern, a pair of yellow leather slippers and a bag of ras el hanout (a spice blend) that still makes my kitchen smell like Morocco.</p>

      <h2>Jemaa el-Fnaa after dark</h2>
      <p>Every lost wander ended, eventually, in Jemaa el-Fnaa, the huge central square. By day it's orange-juice carts and snake charmers. As the sun sets, rows of food stalls appear out of nowhere, smoke rises from the grills, and the whole square fills with music, storytellers and the call to prayer from the Koutoubia Mosque. I ate grilled lamb, harira soup and far too many honey pastries, sitting at long shared benches with strangers who quickly became friends.</p>

      <div class="tip-box">
        <h3>Suzy's quick tips</h3>
        <ul>
          <li>Save your riad's location offline and note a nearby landmark, so you can always ask for directions.</li>
          <li>A polite "la, shukran" (no, thank you) goes a long way with persistent sellers.</li>
          <li>Climb to a rooftop café around sunset for the best view over the square.</li>
          <li>Carry small change for mint tea, tips and juice.</li>
        </ul>
      </div>
    `
  },
  {
    slug: "amalfi-coast-drive",
    title: "A Lemon-Scented Drive Down the Amalfi Coast",
    date: "2026-09-05",
    place: "Amalfi Coast, Italy",
    category: "Culture",
    image: "./images/amalfi-positano.jpg",
    imageAlt: "Positano's houses glowing on the cliffside above the sea at dusk",
    readTime: 7,
    excerpt: "Hairpin bends, impossibly blue water and a limoncello at every stop. My slow, five-day route from Sorrento to Ravello — and the village I'd move to tomorrow.",
    body: `
      <p>The road along the Amalfi Coast is barely wide enough for two cars, carved into cliffs that drop straight into the sea. Buses squeeze around the hairpin bends with a cheerful toot of the horn, scooters weave between them, and every few minutes the view opens up and you forget to breathe. I gave myself five days to travel just 50 kilometres. It still felt rushed.</p>

      <h2>Day 1: Sorrento</h2>
      <p>Technically just off the coast, Sorrento is the easy starting point: good train connections from Naples, plenty of places to stay, and lemon groves right in the middle of town. I spent my first evening wandering the old streets with a lemon granita, getting ready for the road ahead.</p>

      <h2>Days 2–3: Positano</h2>
      <p>Positano is the postcard: pastel houses stacked up a near-vertical hillside, all tumbling down to a small grey-pebble beach. It's busy and it's expensive, but at dusk, when the lights come on and the whole village glows gold above the water, it's worth every euro. My favourite thing was the Path of the Gods, a hiking trail high above the coast that starts in Bomerano and ends in the hills above Positano, with views over the whole coastline.</p>

      <h2>Day 4: Amalfi and Atrani</h2>
      <p>The town of Amalfi gave the coast its name. Its striped cathedral at the top of a dramatic staircase is the centrepiece. But my heart went to Atrani, its tiny neighbour just around the headland: one little square, one church, one beach and almost no tourists. If I could move anywhere tomorrow, it would be here.</p>

      <h2>Day 5: Ravello</h2>
      <p>Ravello sits high on the cliffs, away from the traffic below. Its two great gardens, Villa Rufolo and Villa Cimbrone, are full of flowers, shady paths and terraces that seem to float above the sea. I ended my trip on Villa Cimbrone's Terrace of Infinity, looking down at the coast I had just travelled, with a small glass of homemade limoncello in my hand.</p>

      <div class="tip-box">
        <h3>Suzy's quick tips</h3>
        <ul>
          <li>Don't drive yourself in summer. Use the SITA buses or the ferries, which are often faster and always prettier.</li>
          <li>Travel in May, June or September for warm water without peak-season crowds.</li>
          <li>Stay in a smaller village like Atrani or Praiano for better prices and quieter evenings.</li>
          <li>Bring good walking shoes. Everything here is up or down a staircase.</li>
        </ul>
      </div>
    `
  },
  {
    slug: "bangkok-night-markets",
    title: "Bangkok After Dark: A Night Market Field Guide",
    date: "2026-08-17",
    place: "Bangkok, Thailand",
    category: "Food",
    image: "./images/bangkok.jpg",
    imageAlt: "Bangkok's skyline of tall buildings at twilight",
    readTime: 6,
    excerpt: "Boat noodles, mango sticky rice and grilled everything. A stall-by-stall guide to eating your way through Bangkok's best night markets without missing a single flavor.",
    body: `
      <p>By day, Bangkok is hot, loud and a little overwhelming. But as the sun goes down and the city's towers start to glow, something shifts. Streets fill with folding tables, grills are lit, and the whole city seems to come outside to eat. These are the night-time spots I kept coming back to.</p>

      <h2>Yaowarat (Chinatown)</h2>
      <p>If you only have one night, spend it here. After dark, Yaowarat Road turns into a river of neon signs and street-food carts. My route: start with crispy pork belly and rice, move on to a bowl of peppery rice-noodle soup, then queue for grilled seafood, and finish with a warm, sweet dessert of ginkgo nuts in ginger syrup. Walk slowly and eat small: the point is to try as much as possible.</p>

      <h2>Boat noodles near Victory Monument</h2>
      <p>Boat noodles were once sold from boats on Bangkok's canals, served in tiny bowls so they wouldn't spill. Today the tradition lives on in the alleys near Victory Monument, where the bowls are still small and cheap, and the rich, spiced broth is just a few mouthfuls each. Locals stack up the empty bowls on the table. My record is nine.</p>

      <h2>The big night markets</h2>
      <p>For a bit of everything in one place, try one of the city's large evening markets, where hundreds of stalls sell food, clothes, vintage finds and cold drinks under strings of fairy lights. Go hungry, go with friends so you can share, and look out for the famous towers of spicy pork-bone soup.</p>

      <h2>Don't skip dessert</h2>
      <p>Mango sticky rice is the obvious choice: sweet, ripe mango with coconut-soaked rice. It's the obvious choice for good reason. But also look for roti (crispy pan-fried pancakes with banana and condensed milk) and khanom krok, small coconut puddings cooked in a dimpled pan, crisp outside and creamy inside.</p>

      <div class="tip-box">
        <h3>Suzy's quick tips</h3>
        <ul>
          <li>Use the BTS Skytrain and MRT to get around. They're cool, cheap and avoid the evening traffic.</li>
          <li>Carry small notes and coins. Most stalls don't take cards.</li>
          <li>Ask for "mai phet" (not spicy) if you're sensitive to chilli. "Phet nit noi" means a little spicy.</li>
          <li>Pick the stalls with the longest local queues. They're busy for a reason.</li>
        </ul>
      </div>
    `
  },
  {
    slug: "tokyo-mount-fuji",
    title: "Spotting Mount Fuji from Tokyo's Skyline",
    date: "2026-07-30",
    place: "Tokyo, Japan",
    category: "Culture",
    image: "./images/tokyo.jpg",
    imageAlt: "Shinjuku's skyscrapers with snow-capped Mount Fuji in the distance",
    readTime: 5,
    excerpt: "On a clear winter morning, Fuji peeks out from behind Shinjuku's towers. The free observation decks, the best times to go, and the quiet shrines I found along the way.",
    body: `
      <p>Before my first trip to Tokyo, I had no idea you could see Mount Fuji from the city. It's about 100 kilometres away, and most days it hides behind haze and clouds. But on a clear, cold morning, there it is: a perfect snow-capped cone rising behind the skyscrapers. Seeing it for the first time felt like a secret the city had decided to share with me.</p>

      <h2>When you can see it</h2>
      <p>Your best chances are between late autumn and early spring, roughly November to February, when the air is dry and clear. Mornings are better than afternoons, before the city warms up and the haze rolls in. In summer, Fuji is usually invisible from Tokyo, so don't be disappointed if you visit then.</p>

      <h2>The best free view</h2>
      <p>The Tokyo Metropolitan Government Building in Shinjuku has two free observation decks, 202 metres up, with views across the whole city. On a clear day, Fuji appears in the west, framed by the towers around you. Go as soon as it opens. I watched the morning light move across the mountain while office workers below headed to work.</p>

      <h2>Other spots I loved</h2>
      <ul>
        <li><strong>The Shibuya rooftop observatories</strong>: paid, but spectacular at sunset, when Fuji becomes a dark silhouette against an orange sky.</li>
        <li><strong>Riverside walks</strong>: on clear days, look west from the bridges over the Tama River for a surprisingly peaceful view.</li>
        <li><strong>Small neighbourhood streets</strong> with names containing "Fujimi" (literally "Fuji view"), a reminder of when the mountain was visible all across the city.</li>
      </ul>

      <h2>Quiet shrines along the way</h2>
      <p>Just a short walk from Shinjuku's busy streets is Meiji Jingu, a huge Shinto shrine surrounded by forest. Walking under its giant wooden gate, the city noise fades almost instantly. I also loved finding tiny neighbourhood shrines tucked between apartment blocks: a red torii gate, a stone fox, a small offering of fresh flowers. It's this mix of beautiful, controlled chaos and calm that makes Tokyo so special.</p>

      <div class="tip-box">
        <h3>Suzy's quick tips</h3>
        <ul>
          <li>Check the weather forecast the night before and look for a dry, clear, cold morning.</li>
          <li>Get an IC card (Suica or Pasmo) for easy travel on trains and buses.</li>
          <li>If you want to get closer, take a day trip to Lake Kawaguchiko for a view of Fuji reflected in the water.</li>
        </ul>
      </div>
    `
  },
  {
    slug: "lisbon-where-it-began",
    title: "Lisbon, Where It All Began",
    date: "2026-07-12",
    place: "Lisbon, Portugal",
    category: "Home Base",
    image: "./images/lisbon-belem.jpg",
    imageAlt: "Belém Tower, a white stone fortress standing at the edge of the river",
    readTime: 6,
    excerpt: "The city that turned a one-way ticket into a whole new life. My favorite miradouros, the bakery with the best pastéis de nata, and why I keep coming home here.",
    body: `
      <p>Every journey on this blog started in the same place: a pastel-coloured apartment in Lisbon, a backpack on the bed and a one-way ticket on my phone. I've since wandered a long way from home, but Lisbon is still where I come back to rest, write and eat far too many custard tarts. Here's my own personal guide to the city.</p>

      <h2>The miradouros</h2>
      <p>Lisbon is built on seven hills, and at the top of many of them is a miradouro, a viewpoint, often with a little kiosk selling coffee and cold drinks. These are my favourites:</p>
      <ul>
        <li><strong>Miradouro da Senhora do Monte</strong>: the highest, and the best for sunset over the whole city and the castle.</li>
        <li><strong>Miradouro de Santa Luzia</strong>: blue-and-white tiles, bougainvillea, and a view over the rooftops of Alfama down to the river.</li>
        <li><strong>Miradouro de São Pedro de Alcântara</strong>: a garden terrace looking across to the castle, perfect for a glass of wine at golden hour.</li>
      </ul>

      <h2>The pastéis de nata question</h2>
      <p>Everyone has an opinion on Lisbon's best custard tart, and here's mine. The famous bakery in Belém, which has been making them since 1837, is worth the queue at least once, especially when the tarts come out warm and you sprinkle them with cinnamon and sugar. But for everyday tarts, I go to a small bakery in Chiado, where you can watch them being made through the window. Crisp, flaky pastry, wobbly custard, slightly scorched on top. Perfect.</p>

      <h2>A day in Belém</h2>
      <p>Belém sits by the river, west of the city centre. It's where the great sailing ships once set off to explore the world, and that history is everywhere. The Belém Tower, a 16th-century fortress that seems to float at the water's edge, is my favourite building in the whole city. Combine it with the Jerónimos Monastery next door, a stroll along the riverfront, and (of course) a few custard tarts.</p>

      <h2>Why I keep coming home</h2>
      <p>Lisbon is a city of small pleasures: the rattle of the yellow trams climbing the hills, fado music drifting out of a doorway in Alfama, the smell of grilled sardines in June, and the way the light turns everything gold in the evening. Wherever I go next, it's the place I'm always happy to come back to.</p>

      <div class="tip-box">
        <h3>Suzy's quick tips</h3>
        <ul>
          <li>Wear shoes with good grip. The beautiful stone pavements get slippery, and the hills are steep.</li>
          <li>Ride Tram 28 early in the morning, before it fills with crowds.</li>
          <li>Visit in June for the Santo António festival: street parties, grilled sardines and music until late.</li>
        </ul>
      </div>
    `
  }
];
