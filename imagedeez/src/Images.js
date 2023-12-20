const images = [
  {
    Timestamp: "12/5/2023 0:33:13",
    src: "fww/Fuwawa - Nyanya Cat.jpg",
    description: "DO YOUR BEST FUWAWA",
    author: "Eintokun",
    clicked: false,
  },
  {
    src: "mcc/Mococo - Nyanya Cat.jpg",
    description: "ANGRY MOCOCO IS CUTE",
    author: "Eintokun",
    clicked: false,
  },
  {
    Timestamp: "12/5/2023 1:10:01",
    src: "fww/(2) 【METAL GEAR SOLID】demon dogs ready to sneak - YouTube - Google Chrome 2023_11_15 18_33_58 - あすあすか.jpg",
    description:
      "新年の願い事は「Fuwawa＆Mococo＆Ruffiansと一緒に笑い合うこと！」「素敵な思い出を作ること！」です！2024年もよろしくねー！",
    author: "あすあすか",
    clicked: false,
  },
  {
    src: "mcc/IMG_7714 - あすあすか.jpg",
    description:
      "新年の願い事は「Fuwawa＆Mococo＆Ruffiansと一緒に楽しい思い出を作ること！」「みんなで笑って幸せになること」です！2024年もよろしくねー！",
    author: "あすあすか",
    clicked: false,
  },
  {
    Timestamp: "12/5/2023 3:22:02",
    src: "fww/Cute Fuwa NYW - Reckless4800.jpg",
    description:
      "My New Year's wish with Fuwawa would be to pet the FuwaEars, but if that can't happen, I'll gladly settle for a FuwaHug!",
    author: "Reckless4800",
    clicked: false
  },
  {
    src: "mcc/Cute Moco NYW - Reckless4800.jpg",
    description:
      "My New Year's wish with Mococo would be to pet the MocoTail, but of course, if I can't, a MocoHug would suit me as well!",
    author: "Reckless4800",
    clicked: false,
  },
  {
    Timestamp: "12/6/2023 1:23:49",
    src: "fww/Screenshot 2023-12-05 142720 - Ponguin.jpg",
    description:
      "Happy new year Fuwawa! Last year has been the one with my most fondest memories! Ever since you struggled cutely with my name and helped me get a new one, you have been in my thoughts daily. As my resolution I’d like to get better at writing Japanese, since I can only read it!",
    author: "Ponguin",
    clicked: false,
  },
  {
    src: "mcc/Bild_2023-12-05_142925093 - Ponguin.jpg",
    description:
      "Happy new year Moco-chan!!! Your pup-talks and your motivating words after my first supa gave me lots of strength and motivation to start leading a life, I won't regret! One of my resolutions for next year is to stop overthinking too much and trying to gain a lot more confidence!",
    author: "Ponguin",
    clicked: false,
  },
  {
    Timestamp: "12/5/2023 5:56:35",
    src: "fww/Screenshot (2874) - Kiara's Snickers bar.jpg",
    description:
      "Fuwawa, merry christmas and a happy new year! I want to be as kind and as loving as you one day, Fuwawa. Your patience, understanding and goofy sense of humor feel like home, to me. Thank you for being in my life and always protecting my smile! I love both of you so much!  🩵🩷",
    author: "j🐾",
   clicked: false,
  },
  {
    src: "mcc/Screenshot 2023-11-05 133235 - Kiara's Snickers bar.jpg",
    description:
      "Mococo, merry christmas and a happy new year! Your puptalks always make me feel like I truly can do better, Mococo. I want to be like you and face all my problems head on! (including natto, one day). Thank you for being in my life and for always protecting my smile! I love both of you so much! 🩵🩷",
    author: "j🐾",
    clicked: false,
  },
  {
    Timestamp: "12/5/2023 6:11:44",
    src: "fww/snip - Mr. Bravo.jpg",
    description:
      "I want to give headpats to Fuwawa at the Hololive Meet and Greet.",
    author: "Mr.Bravo",
    clicked: false,
  },
  {
    src: "mcc/snip2 - Mr. Bravo.jpg",
    description:
      "I want to give headpats to Mococo at the Hololive Meet and Greet.",
    author: "Mr.Bravo",
    clicked: false,
  },
  {
    Timestamp: "12/5/2023 10:01:16",
    src: "fww/fuwawa cute costume - The One.jpg",
    description:
      "My New Year's resolution is to make 2024 my fluffiest and happiest year to date with FUWAMOCO!",
    author: "debord",
    clicked: false,
  },
  {
    src: "mcc/mococoeyes - The One.jpg",
    description:
      "My New Year's resolution is to make 2024 my fuzziest and happiest year to date with FUWAMOCO!",
    author: "debord",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 11:56:01",
    src: "fww/IMG_3482 - Michael David.jpg",
    description:
      "Happy new year, Fuwa-nee! I want to make high quality clips and compilation videos of my favorite fuwamoco moments and streams! To share my passion, spread bau bau far and wide, and maybe find some new ruffians 🐾",
    author: "magica",
    clicked: false,
  },
  {
    src: "mcc/IMG_3136 - Michael David.jpg",
    description:
      "Happy new year, Moco-chan! I want to be healthier! I’ll do my best to eat healthier, lose weight, and get in shape",
    author: "magica",
    clicked: false,
  },
  {
    Timestamp: "12/5/2023 16:00:46",
    src: "fww/NYfuwawa - Lim.jpg",
    description:
      "Merry Christmas and Happy New Year Fuwawa! I hope all your wishes come true, my only wish is that you both continue being youselves and keep my smile protected into the new year and beyond. My resolution will be to go out on more walks (when it gets a little warmer). From the bottom of my heart I hope you have a fantastic future in everything you do! BAU BAU! Also this is an open invitation for you to marry me, just something for you to consider.",
    author: "Lim",
    clicked: false,
  },
  {
    src: "mcc/NYmococo - Lim.jpg",
    description:
      "Merry Christmas and Happy New Year Mococo! I wish nothing but the best for you and your sister, you've been an absolute blessing and I'm honoured to call you my kami-oshi. My resolution is to go on more walks so I hope you'll work hard to defeat the nattou to inspire me! Thank you both so much for everything, you deserve every single piece of love and goodness that comes your way! BAU BAU! Also this is an open invitation for you to marry me, it would make me the happiest ruffian.",
    author: "Lim",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 11:14:21",
    src: "fww/prettyfuwawa - ipsi.jpg",
    description:
      "my new years wish is that fuwawa (and mococo) get to be featured in a VN or get to work with a VN company of choice",
    author: "@vystaria",
    clicked: false,
  },
  {
    src: "mcc/happymococo - ipsi.jpg",
    description:
      "my new years wish is that mococo (and fuwawa) receive more recognition and praise for all their hardwork and gain even more confidence in themselves",
    author: "@vystaria",
    clicked: false,
  },
  {
    Timestamp: "12/6/2023 0:33:45",
    src: "fww/fwwwa - Zeik.jpg",
    description:
      "Merry Christmas & Happy New Year Fuwawa! Thank you  and Mococo for always sharing your passion and positivity with the Ruffians. May the new year bring you both continued success, good health and happiness - The future is brighter than ever with you two lighting the way! BAU BAU!",
    author: "Zeik",
    clicked: false,
  },
  {
    src: "mcc/F-Y_UQEawAA3yJN - Zeik.jpg",
    description:
      "Merry Christmas & Happy New Year Mococo! Wishing you and Fuwawa health, happiness and endless smiles! Keep conquering new milestones while making new precious memories and having fun along the journey. We'll keep cheering you on, see you two next year with more BAU BAUs!",
    author: "Zeik",
    clicked: false,
  },
  {
    Timestamp: "12/5/2023 23:22:31",
    src: "fww/fuwa1 - Orange Juice.jpg",
    description:
      "I wish for more goals accomplished and more milestones for fuwamoco next year",
    author: "@_OrangeJuice13",
    clicked: false,
  },
  {
    src: "mcc/moco2 - Orange Juice.jpg",
    description:
      "My new year's resolution is to not be lazy and get more sleep",
    author: "@_OrangeJuice13",
    clicked: false,
  },
  {
    Timestamp: "12/6/2023 0:28:33",
    src: "fww/FUWANYE - John Smith.jpg",
    description:
      "Happy New Year Fuwawa! 2023 was amazing thanks to you! My New Years Resolution is to do my best, but also to take the time to enjoy life, thank you always for the inspiration and motivation you give me. You're awesome Fuwawa, and I will support you always, never forget that!",
    author: "Zannie",
    clicked: false,
  },
  {
    src: "mcc/19 - John Smith.jpg",
    description:
      "Happy New Year Mococo! Thank you for your pup talks and your genki energy, you've given me so much in 2023. My New Years Resolution is to do my best and smile more often. Mococo, have confidence, you're amazing and I will always be there to remind you of that!",
    author: "Zannie",
    clicked: false,
  },
  {
    Timestamp: "12/6/2023 0:45:11",
    src: "fww/Fuwawa Gaming - Apex Stream - Aeon Alter.jpg",
    description:
      "Fuwawa, Merry Christmas and Happy New Years! I've decided that this year, I would have two resolutions, one skill I want to improve for each of you! For my \"Blue\" resolution, I'll work on improving my mental ability, and my goal is to study Japanese again!",
    author: "Aeon",
    clicked: false,
  },
  {
    src: "mcc/Mococo Chainsaw - L4D2 Stream - Aeon Alter.jpg",
    description:
      "Mococo, Merry Christmas and Happy New Years! I've decided that this year, I would have two resolutions, one thing I want to improve for each of you! For my \"Red\" resolution, I'll work on improving my physical ability, and work even harder on my training and improving my health!",
    author: "Aeon",
    clicked: false,
  },
  {
    Timestamp: "12/6/2023 6:23:48",
    src: "fww/IMG_8533 - mario gen.jpg",
    description:
      "Happy Christmas and New Year, Fuwa-nee! I wish for all of your dreams and aspirations to come true! My new year resolution is to be more kind to others and to myself in order to become the person I want to be! I love you very much! Your voice is so beautiful, and it brings me peace!",
    author: "CoolHabaNero",
    clicked: false,
  },
  {
    src: "mcc/IMG_8552 - mario gen.jpg",
    description:
      "Happy Christmas and New Year, Moco-chan! May all of your dreams come true, and may the light that is you, that gives hope to so many ruffians across the world, shine even brighter this new year! Another New Year's resolution for me is to find motivation to keep moving forward! I want to find an answer to where I want to be and what I want to do. I love you very, very much, my beautiful Moco-chan!",
    author: "CoolHabaNero",
    clicked: false,
  },
  {
    Timestamp: "12/6/2023 8:33:09",
    src: "fww/fuwahapp2 - Noshiro.jpg",
    description:
      "Happy New Year Fuwawa! Thanks to your constant, unending love and support, I'm making the resolution to pursue my passions as much as possible this year! This especially includes art so I can properly capture your incredible fluffiness..!",
    author: "Noshiro",
    clicked: false,
  },
  {
    src: "mcc/mocohappi - Noshiro.jpg",
    description:
      "Happy New Year Mococo! Your constant energy and pup talks have really shown me how to express myself, so this year I'd like to make the resolution to really express just how passionate I am about supporting you! Everyone will know of the name FUWAMOCO (especially Mococutie)!",
    author: "Noshiro",
    clicked: false,
  },
  {
    Timestamp: "12/12/2023 10:11:48",
    src: "fww/kép_2023-12-05_175733894 - Dániel Fehér.jpg",
    description:
      "Fuwawa, my two wishes for next year are:  To see you be as enthusiastic as you were in Fashion Dreamer more often, it was really cute and heartwarming.  To see you on stage, with Moco-chan - my two brightly shining stars.  My resolution dedicated to you: To get into the world of VNs.",
    author: "@feherdaniel2010",
    clicked: false,
  },
  {
    src: "mcc/kép_2023-12-05_175811913 - Dániel Fehér.jpg",
    description:
      "Moco-chan, my two wishes for next year are:  For you to be healthier. I love your sneezes but it pains me to see you suffer.  To see you on stage, with Fuwawa - my two brightly shining stars.  My resolution dedicated to you: To try my hand at the things I'm not good at - like natto.",
    author: "@feherdaniel2010",
    clicked: false,
  },
  {
    Timestamp: "12/6/2023 16:51:52",
    src: "fww/solofuwahairflip - Cody Higgins.jpg",
    description:
      "For my New Year's resolution, I want to further improve my sleep schedule and make it to more FWMCMornings!",
    author: "LordBroccoli",
    clicked: false,
  },
  {
    src: "mcc/mocosmile142 - Cody Higgins.jpg",
    description:
      "A wish of mine for the New Year is for FuwaMoco and all my Ruffian friends to have the best year ever. That everyone gets good news and good fortune.",
    author: "LordBroccoli",
    clicked: false,
  },
  {
    Timestamp: "12/8/2023 9:48:20",
    src: "fww/image_2023-12-09_024542709 - コロネウス.jpg",
    description:
      "Hope Fuwawa become more fluffier and able to play a lot more game and get more mococo backseat!",
    author: "Corneus",
    clicked: false,
  },
  {
    src: "mcc/image_2023-12-09_024747058 - コロネウス.jpg",
    description:
      "Hope Mococo have amore time to backseat Fuwawa and maybe we will get future solo stream with Mococo!!",
    author: "Corneus",
    clicked: false,
  },
  {
    Timestamp: "12/8/2023 9:57:40",
    src: "fww/IMG_20231101_084447 - Buriburi Kurikuri.jpg",
    description:
      "I wish to be happy and have more smiles with Ruffians and Fuwawa",
    author: "BuiChi daiBuiChi",
    clicked: false,
  },
  {
    src: "mcc/IMG_20231113_233421 - Buriburi Kurikuri.jpg",
    description: "I want to tease Mococo more",
    author: "BuiChi daiBuiChi",
    clicked: false,
  },
  {
    Timestamp: "12/8/2023 15:03:28",
    src: "fww/NewYearFuwawa - Enforcer.jpg",
    description:
      "My New Year's resolution is to have more fun and fluffy times with Fuwawa!",
    author: "Enforcer324",
    clicked: false,
  },
  {
    src: "mcc/NewYearMococo - Enforcer.jpg",
    description:
      "My New Year's resolution is to have more fun and fuzzy times with Mococo!",
    author: "Enforcer324",
    clicked: false,
  },
  {
    Timestamp: "12/8/2023 17:59:31",
    src: "fww/Screenshot_20231209_093532_YouTube - Yuki Hololive1.jpg",
    description:
      "HAPPY NEW YEAR FUWAWA!!🩵🩵 Its been a joyful year of fun and exciting streams, thanks for the memorable moments during streams, having a great time chatting with the ruffians and reading us ruffians comments on stream and twitter. I wish you a great and fun year ahead with streams and collabs creating joyful moments, please continue being your cute and fluffiness Fuwawa that we all ruffians love!! BAU BAU🐾🩵 ",
    author: "Yuki Darkness ",
    clicked: false,
  },
  {
    src: "mcc/Screenshot_20231209_092844_YouTube - Yuki Hololive1.jpg",
    description:
      "HAPPY NEW YEAR MOCOCO!!🩷 thanks for the great year of fun and joyful moments on streams and collabs. Really appreciated all the Pup talks you have given to us ruffians which motivate us at the start and for the rest of the day. Really enjoy your fun and active personality with your laughs while also your cute tummy👀🩷 I wish you a great and exciting year ahead fill with fun moments and more FuwaMoco merchs in the future in fulfilling both you and Fuwawa goals since debut. Please continue being your fun and active self, your expressions are really memorable moments for us ruffians! BAU BAU🐾🩷️ ",
    author: "Yuki Darkness ",
    clicked: false,
  },
  {
    Timestamp: "12/8/2023 18:13:33",
    src: "fww/1136818011291013130 - junki.jpg",
    description:
      "This year I hope to continue to support FUWAMOCO with the gift of music!",
    author: "@midi_junki",
    clicked: false,
  },
  {
    src: "mcc/chrome_rqgtfNVCrs - junki.jpg",
    description:
      "This year I want to get even more involved with the hololive fan community and make lots of new friends!",
    author: "@midi_junki",
    clicked: false,
  },
  {
    Timestamp: "12/8/2023 19:25:23",
    src: "fww/image - J.jpg",
    description:
      "Dear Fuwawa, the cutest backseater and also the most fluffiest sussy sister i know... i hope that you and mococo will always keep our smile until the end of the times and thank you both for these amazing 4 months of fun, this is just the beginning. I'm looking forward for this 2024 to be filled with you.",
    author: "Tekzi",
    clicked: false,
  },
  {
    src: "mcc/GA3zRwhaIAAK4MW - J.jpg",
    description:
      "To the little fuzzy sister, please keep spreading your silliness around and keep making us laugh as you always did. This is only the start and you girls have already gained our hearts, 2024 will be amazing having you around.",
    author: "Tekzi",
    clicked: false,
  },
  {
    Timestamp: "12/8/2023 20:37:48",
    src: "fww/CUTE WAWA - Fabian Wuffian Diaz.jpg",
    description:
      "Stay fluffy! I wish that Fuwawa smiles more this year and that nothing takes away her smile",
    author: "Fabian Diaz",
    clicked: false,
  },
  {
    src: "mcc/mcococute - Fabian Wuffian Diaz.jpg",
    description:
      "Please keep being awesome i wish that all gloomy days are turn into sunshines!!",
    author: "Fabian Diaz",
    clicked: false,
  },
  {
    Timestamp: "12/8/2023 20:49:03",
    src: "fww/image_2023-12-09_124329664 - Star.jpg",
    description: "Be a better person.",
    author: ".tactically",
    clicked: false,
  },
  {
    src: "mcc/image_2023-12-09_124640850 - Star.jpg",
    description: "Exercise more",
    author: ".tactically",
    clicked: false,
  },
  {
    Timestamp: "12/8/2023 20:56:17",
    src: "fww/winkkkkkkk - DreamingNousagi.jpg",
    description:
      "My New Year's resolution is to get good grades in this upcoming semester!",
    author: "DreamingNousagi",
    clicked: false,
  },
  {
    src: "mcc/F5oaatdbUAA23dk - DreamingNousagi.jpg",
    description:
      "My New Year's resolution is to get good grades in this upcoming semester!",
    author: "DreamingNousagi",
    clicked: false,
  },
  {
    Timestamp: "12/8/2023 23:40:58",
    src: "fww/FuwawaDrillSgt - Tawan B..jpg",
    description:
      "To Fuwawa, Happy New Year! I want to thank you for always being a cheerful and supportive doggo! May the new year bring new opportunities and the fulfillment of your dream goals together with your fuzzy sister! สวัสดีปีใหม่! BAU BAU~",
    author: "TaWaN【タワン】",
    clicked: false,
  },
  {
    src: "mcc/Mocobaby - Tawan B..jpg",
    description:
      "To Mococo, Happy New Year! I want to thank you Moco-chan for being cute and energetic, making us ruffians smile like never before! May the coming year be filled with success in every path you and your fluffy sister take! สวัสดีปีใหม่! BAU BAU~",
    author: "TaWaN【タワン】",
    clicked: false,
  },
  {
    Timestamp: "12/9/2023 2:47:12",
    src: "fww/IMG_8029 - ニシモッヒー.jpg",
    description: "Fuwawaにとって幸せで温かい一年になりますように！",
    author: "黑ユリHexagram",
    clicked: false,
  },
  {
    src: "mcc/IMG_4705 - ニシモッヒー.jpg",
    description: "Mococoにとって元気で楽しい一年になりますように！！",
    author: "黑ユリHexagram",
    clicked: false,
  },
  {
    Timestamp: "12/9/2023 3:21:33",
    src: "fww/Screenshot 2023-12-09 115937 - William Son.jpg",
    description:
      "You're so kind and such a sweetheart! I wish you all the joy and good fortune in the world! Best Onee-chan ever! ♡ ",
    author: "William Son @William_Son97",
    clicked: false,
  },
  {
    src: "mcc/Screenshot 2023-12-09 115742 - William Son.jpg",
    description:
      "Never change Mococo you're perfect ♡(˵¯͒〰¯͒˵) I hope your new year is filled with love and laughter! You deserve the world! ♡♡♡",
    author: "William Son @William_Son97",
    clicked: false,
  },
  {
    Timestamp: "12/9/2023 6:41:36",
    src: "fww/oEU7Xxj5 - Luis Andres Juarez Contreras.jpg",
    description:
      "For this new year my resolution is being able to smile all year with Fuwawa protecting it, also I want to protect her smile too ",
    author: "wicho4568",
    clicked: false,
  },
  {
    src: "mcc/Q8fO9zPp - Luis Andres Juarez Contreras.jpg",
    description:
      "My resolution is to be able to challenge myself like Mococo does every Monday! She's good at motivating me so I want to be able to make her proud ",
    author: "wicho4568",
    clicked: false,
  },
  {
    Timestamp: "12/9/2023 9:06:52",
    src: "fww/Gabriel_Fuwawa.jpg",
    description: "Hope you are new year will be fine!",
    author: "@nothing_gabriel",
    clicked: false,
  },
  {
    src: "mcc/Gabriel_Mococo.jpg",
    description: "I hope you have a pretty good year!",
    author: "@nothing_gabriel",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 16:21:55",
    src: "fww/cap_Advent's Happy Halloween.jpg",
    description:
      "My New Year's resolution is to make the year fluffy! To do all I can to make the year warm and comfortable when downtime comes.",
    author: "Twitter - @AnanOnel",
    clicked: false,
  },
  {
    src: "mcc/cap_.jpg",
    description:
      "My New Year's resolution is to make the year fuzzy! To do all I can to fight hard and work hard to earn that downtime.",
    author: "Twitter - @AnanOnel",
    clicked: false,
  },
  {
    Timestamp: "12/12/2023 10:31:49",
    src: "fww/FuwaBliss - Raza.jpg",
    description:
      "Dear Fuwa-nee!  For this new year I wish you even more fun with streaming (and teasing Mococo)!  I also wish for you to stand on stage with her so that we can all cheer you on!  My resolution, inspired by you, is to try out more new things, like I played Saya no Uta and loved it!",
    author: "@Razakel6",
    clicked: false,
  },
  {
    src: "mcc/MocoBliss - Raza.jpg",
    description:
      "Dear Moco-chan! For next year I wish you good health, especially less problems with allergies! I also wish for you  to stand on stage with Fuwawa so that we can all cheer you on! My resolution that got inspired by you is to improve myself, which currently is learning to draw!",
    author: "@Razakel6",
    clicked: false,
  },
  {
    Timestamp: "12/10/2023 2:07:34",
    src: "fww/IMG_3041 - boontariga phuyam.jpg",
    description:
      "I wish that I can continuously see Fuwawa, see her backseating skills, see her gaming moves, listen to her screaming, enjoy her laughing, congratulate her happinesses and much more next year. As well as I continuously love and support her like I did this year. Man I love Fuwawa 🩵✨",
    author: "@boo_boon05",
    clicked: false,
  },
  {
    src: "mcc/IMG_3040 - boontariga phuyam.jpg",
    description:
      "I wish to see her happiness and her success in next year, I want to continuously support Mococo like I did in this year as well, I Love Mococo 🩷✨",
    author: "@boo_boon05",
    clicked: false,
  },
  {
    Timestamp: "12/10/2023 4:30:34",
    src: "fww/inbound2484869071378647041 - Surapan Na Songkhla.jpg",
    description: "Want to touch the tail.",
    author: "Aom",
    clicked: false,
  },
  {
    src: "mcc/inbound3237135055001262268 - Surapan Na Songkhla.jpg",
    description: "Want to touch the tail.",
    author: "Aom",
    clicked: false,
  },
  {
    Timestamp: "12/10/2023 5:26:24",
    src: "fww/20230729_093008 - White Boy.jpg",
    description:
      "First I love you smile so much your smile give me a power to life and next year I wish to have a good English and Japanese like you so that it can make my dream come true! (I want to study in Japan!)",
    author: "Dragon Ruffians",
    clicked: false,
  },
  {
    src: "mcc/Screenshot (47) - White Boy.jpg",
    description:
      "You two are the cutest twins I have ever seen. You two are the light of my life when I look at you two. I always smile and I wish I had a sister like you.",
    author: "Dragon Ruffians",
    clicked: false,
  },
  {
    Timestamp: "12/10/2023 16:16:09",
    src: "fww/20231211_021520 - リア充は爆発してどうぞ.jpg",
    description:
      "I will do my best to study for certification so that Fuwawa will praise me!",
    author: "ぴこまる",
    clicked: false,
  },
  {
    src: "mcc/IMG_-3h86s6 - リア充は爆発してどうぞ.jpg",
    description: "Mococo, please expect my English to improve!",
    author: "ぴこまる",
    clicked: false,
  },
  {
    Timestamp: "12/11/2023 3:04:52",
    src: "fww/IMG_20231211_173948 - Terega.jpg",
    description: "I really want to touch your ear It looks very soft",
    author: "Discord : terega07#2666",
    clicked: false,
  },
  {
    src: "mcc/Screenshot_2023-12-11-17-35-15-69 - Terega.jpg",
    description: "You are so cute I hope you will always remain cute",
    author: "Discord : terega07#2666",
    clicked: false,
  },
  {
    Timestamp: "12/11/2023 17:18:20",
    src: "fww/fuwawa_p - Dauksu Rrling.jpg",
    description:
      "Hello Fuwawa! As we kick off 2024, I'm hoping to dive into lots of visual novels together with you and the Ruffians! Your narration is comfy and immersive. One of my wishes this year is to get Fuwamoco merch and show it off. Here's to a year of adventures and achieving our goals!",
    author: "pau_rg3",
    clicked: false,
  },
  {
    src: "mcc/mococo_p - Dauksu Rrling.jpg",
    description:
      "Hello Mococo! Wishing you an awesome 2024, filled with as much happiness as you give us during your pup talks! Your words truly lift us up. One of my plans this year is to take more walks and find things to share for FWMCMornings. Let's make this year one of new experiences!",
    author: "pau_rg3",
    clicked: false,
  },
  {
    Timestamp: "12/12/2023 0:16:55",
    src: "fww/Fuwawa - Lord Ashton the Spiritomb.jpg",
    description: "My wish is to see you two grow to new heights!",
    author: "Lord Ashton",
    clicked: false,
  },
  {
    src: "mcc/Mococo - Lord Ashton the Spiritomb.jpg",
    description: "My wish is to see you two grow to new heights!",
    author: "Lord Ashton",
    clicked: false,
  },
  {
    Timestamp: "12/12/2023 10:29:34",
    src: "fww/fuwawa hello - Kevin Ta.jpg",
    description:
      "Happy New Year's! Fuwawa, I would like to wish for another Twitter space cleaning... Because it's my resolution to clean up all the nendoroids I have in my room... and clear out some of the figures I have laying around... Bau Bau! ",
    author: "KTana",
    clicked: false,
  },
  {
    src: "mcc/mococo whaet - Kevin Ta.jpg",
    description:
      "Happy New Year's! Mococo, my New Year's resolution is to get closer to the ruffians and be more social! I want to get other there and interact with all the fluffy and fuzzy ruffians to bring even more smiles to people! Bau bau!  ",
    author: "KTana",
    clicked: false,
  },
  {
    Timestamp: "12/12/2023 12:23:25",
    src: "fww/Fuwawa_NY - RJ T.jpg",
    description:
      "My New Year's resolution is to go on more walks and be more active!",
    author: "VintageCheese",
    clicked: false,
  },
  {
    src: "mcc/Mococo_NY - RJ T.jpg",
    description:
      "My New Year's resolution is to be more comfortable/accepting of my own failures.",
    author: "VintageCheese",
    clicked: false,
  },
  {
    Timestamp: "12/12/2023 12:25:57",
    src: "fww/culdOEu - EatChewyCookies.jpg",
    description:
      "I actually stuck to my new years goal last year of losing weight and lost 60 lbs but I don't have any ideas for this year so maybe you can give me one? BAU BAU!!!",
    author: "Chewy",
    clicked: false,
  },
  {
    src: "mcc/opera_DnIXF74mzG - EatChewyCookies.jpg",
    description:
      "I'm not messy but I not good at keeping my house clean so my resolution is to clean my house regularly. Please do lots of twitter space cleanings because they help a lot! BAU BAU!!",
    author: "Chewy",
    clicked: false,
  },
  {
    Timestamp: "12/12/2023 23:10:28",
    src: "fww/Fuwawa - Darkboomerang.jpg",
    description:
      "Fuwawa might not be good at math, but to confess I have gotten bad at counting too. I can’t count the number of days she has made me happy, and I am sure the number will keep growing in 2024. Even if we can’t keep track of all the days lets cherish all these memories BAU BAU",
    author: 'Twitter - Darkboomerang, "@Darkboomerang97"',
    clicked: false,
  },
  {
    src: "mcc/Mococo - Darkboomerang.jpg",
    description:
      "Mococo you sometimes say that you are trying your best. I often wonder how that works though because you’re already the best. There will be lots of experiences in the future, some being lovely, and I’m sure others will be ruff. No matter what comes let’s both do our best in 2024!",
    author: 'Twitter - Darkboomerang, "@Darkboomerang97"',
    clicked: false,
  },
  {
    Timestamp: "12/13/2023 16:42:02",
    src: "fww/Fuwawanderful - Ian.jpg",
    description:
      "HAPPY NEW YEAR, FUWAWA!   Thanks for all your hard work protecting our smiles! Hope the next year will be filled with a lot of warm and fun times! You two never fail to lighten our days and we’ll always be there to support each step of your way! BAU BAU!! ",
    author: "Ian Fuzzian",
    clicked: false,
  },
  {
    src: "mcc/Mococute - Ian.jpg",
    description:
      "HAPPY NEW YEAR, MOCOCO!   Thanks for all your hard work protecting our smiles! Seeing you two having so much fun really brings a smile to my face and motivates me to keep trying my hardest too! Thank you!!! We’ll be there to support you two each step of your way! BAU BAU!! ",
    author: "Ian Fuzzian",
    clicked: false,
  },
  {
    Timestamp: "12/13/2023 17:32:52",
    src: "fww/FWWCapNY - Josiah Porsona.jpg",
    description:
      "Happy New Year's Fuwawa~! Whenever I think of you my heart becomes filled with so much warmth. Whether it be your giggles or your VN talk, it makes my heart rejoice knowing that I'll be able to enter the new year knowing your giggles and voice will be there. 今年もよろしくお願いします。",
    author: "Darklancer99",
    clicked: false,
  },
  {
    src: "mcc/Mococo CAP NY - Josiah Porsona.jpg",
    description:
      "Happy New Year's Mococo~! Your energy is so lovable, whether you're needy or overconfident I love every single bit. Seeing you do your best in every thing you do inspires me so much. This year I was able to do so well, I know next year will be even better with you there! 今年もよろしくお願いします",
    author: "Darklancer99",
    clicked: false,
  },
  {
    Timestamp: "12/13/2023 17:41:42",
    src: "fww/image - Marlon Castaneda.jpg",
    description:
      "I wish to see Fuwawa play more often!! It’s really fun seeing her play in such a different way than Mococo!! ",
    author: "Shade1197",
    clicked: false,
  },
  {
    src: "mcc/image - Marlon Castaneda.jpg",
    description:
      "Mococo!! You’re super cute and I wish we can continue to get a ton more amazing pup talks!! They really motivate me to keep trying my best everywhere I can!! Thank you so much to the both of you for making me smile a ton this year and for more smiles to come next year!! BAU BAU!!",
    author: "Shade1197",
    clicked: false,
  },
  {
    Timestamp: "12/13/2023 20:33:16",
    src: "fww/1698804344516475 - Nogglor.jpg",
    description:
      "I have a lot of goals and dreams, but my primary one right now is to love and support FUWAWA (and Mococo) forever and ever!!",
    author: "Pudding Rat",
    clicked: false,
  },
  {
    src: "mcc/1698875352122207 - Nogglor.jpg",
    description:
      "I have a lot of goals and dreams, but my primary one right now is to love and support MOCOCO (and Fuwawa) forever and ever!!",
    author: "Pudding Rat",
    clicked: false,
  },
  {
    Timestamp: "12/13/2023 21:20:41",
    src: "fww/IMG_0694 - Robert Musser.jpg",
    description:
      "Happy New Year, Fuwawa! My wish for 2024 is to see you reach greater heights than ever before--protecting more Ruffian smiles, continuing to make beautiful music, and making your idol dreams come true. I resolve to cheer you on every step of the way, BAUing with my whole heart!",
    author: "PaakType",
    clicked: false,
  },
  {
    src: "mcc/IMG_0695 - Robert Musser.jpg",
    description:
      "Happy New Year, Mococo! For 2024, I hope to see you shining bright on the biggest stage, sharing your talents with the world, while continuing to enjoy cozy fun times with all the Ruffians. I resolve to be there cheering loud and proud for you, supporting you with all I've got!",
    author: "PaakType",
    clicked: false,
  },
  {
    Timestamp: "12/14/2023 11:29:09",
    src: "fww/Screenshot_20231205_020813_YouTube - Ron Kaltenbach.jpg",
    description:
      "Happy New Year Fuwawa! These past few months have flown by, haven't they? As the year comes to a close, reflect on everything you've accomplished, and look forward to everything you will accomplish next year! Wishing you the best, from the bottom of my heart.",
    author: "Twobearshifiving",
    clicked: false,
  },
  {
    src: "mcc/Screenshot_20231210_175809_YouTube - Ron Kaltenbach.jpg",
    description:
      "Happy New Year Mococo! Where did 2023 go, huh? 2024 came barreling along mighty fast, and so many milestones were reached with the same speed! Just think of how many you'll achieve in 2024! Sending you warmest wishes, straight from my heart.",
    author: "Twobearshifiving",
    clicked: false,
  },
  {
    Timestamp: "12/14/2023 12:23:43",
    src: "fww/Fuwa_smile - Marc L.jpg",
    description:
      "Happy New Year Fuwawa! My New Year's resolution is to stay healthy and master life's challenges as best as I can.  But most importently for me is to also protect your smile like you always do for me. I want to see you happy and enjoy being with us Ruffians to the fullest! Lots of love and fluffyness!",
    author: "Marc L (psvmonsterhunter)",
    clicked: false,
  },
  {
    src: "mcc/Moco_smile - Marc L.jpg",
    description:
      "Happy New Year Mococo! For the New Year I wish to stay healthy and master life's challenges in the best way possible. But more importantly for us Ruffians is to also protect your smile like you always do for us! I want to see you having fun and enjoy being with us like we enjoy being with you. Lots of love and fuzzyness!",
    author: "Marc L (psvmonsterhunter)",
    clicked: false,
  },
  {
    Timestamp: "12/15/2023 11:39:45",
    src: "fww/fuwawa - Hanzla Shafqat.jpg",
    description:
      "I'd like to make more FWMC content and draw for real! My wish is that you guys reach 1 million subs in 2024! ",
    author: "Hanzla",
    clicked: false,
  },
  {
    src: "mcc/mococo - Hanzla Shafqat.jpg",
    description:
      "My New Year's wish is also to go to a holomeet with FWMC in it!",
    author: "Hanzla",
    clicked: false,
  },
  {
    Timestamp: "12/15/2023 11:51:27",
    src: "fww/FUWAsmile - Daim Onggo.jpg",
    description:
      "Merry Christmas Fuwawa (^w^)/ I didn't really have much to wish except for your well being and great success on whatever works that you and Mococo have done so far! Hopefully you two enjoy the fun festive month! Your fun giggles and soothing voice truly are treasure for us (>w<)b",
    author: "Baukisser (@PenciumBau)",
    clicked: false,
  },
  {
    src: "mcc/MOCOsmile - Daim Onggo.jpg",
    description:
      "Merry Christmas Mococo (^w^)/ I'm not really good at arranging words, but wish you and Fuwawa the best on the works and enjoyable festive month! And um don't forget to rest well if you needs to. Your cutesy yet energetic vibes are very precious after all, especially for us (>w<)b",
    author: "Baukisser (@PenciumBau)",
    clicked: false,
  },
  {
    Timestamp: "12/15/2023 13:30:13",
    src: "fww/cute_fuwawa - Hiyuki.jpg",
    description:
      "Last year I struggled a lot with teamwork, because I'm too shy to talk and just follow what others do. So in 2024 I want to become a better teammate, I will do my best to improve my communication and take the initiative during projects.",
    author: "@hiyuki_h",
    clicked: false,
  },
  {
    src: "mcc/cute_mococo - Hiyuki.jpg",
    description:
      "I want to learn japanese to be able to understand FUWAMOCO when they do jp streams and collabs. I'll dedicate some time for daily studies and practice with flashcards, watching anime and the jp holos, and reading visual novels in japanese.",
    author: "@hiyuki_h",
    clicked: false,
  },
  {
    Timestamp: "12/15/2023 14:37:59",
    src: "fww/92F09FF1-EB4F-4125-9D79-7CAA725FE543 - Andy Combs.jpg",
    description:
      "I hope to keep sharing lots of warm and fluffy times together! Let’s play together lots and have a great 2024! BAU BAU!",
    author: "AC Spark",
    clicked: false,
  },
  {
    src: "mcc/B9467C23-AEBA-4061-9FD3-12987916D7B8 - Andy Combs.jpg",
    description:
      "I hope to keep making lots more fun and sweet memories and listen to more of Moco-chan’s adorable Pup Talks! BAU BAU!",
    author: "AC Spark",
    clicked: false,
  },
  {
    Timestamp: "12/15/2023 16:41:25",
    src: "fww/Fuwawa - G D - 2.jpg",
    description:
      "Dear Lovely Fuwawa, Before anything else, I'd like to thank you in bringing joy & smiles to our faces even making our tummy hort at times, lifting our days & giving respite when life is ruff. You're doin' a wonderful job protecting our smiles! Happy Chrissy & New Year. ",
    author: "G D ",
    clicked: false,
  },
  {
    src: "mcc/Mocochan - G D - 2.jpg",
    description:
      "Dear Adorable Mocochan,  Hope you're keepin' warm during the cold days as you do my heart with your kindness, empathy & affable personality. Happy Chrissy & New Year. Looking forward to spending the holidays with you and the rest of the Ruffians.",
    author: "G D ",
    clicked: false,
  },
  {
    Timestamp: "12/16/2023 1:24:41",
    src: "fww/image_2023-12-16_164418070 - Alden.jpg",
    description:
      "Happy New Year Fuwawa! Thank you! It's because of you both that I'm once again chasing a dream I almost gave up on. For my resolution, I vow to be FUWAMOCO's STRONGEST fan artist!!!  I hope that you'll continue being a passionate and silly sister with Moco-chan! Love Fuwawa <3",
    author: "kenriyu",
    clicked: false,
  },
  {
    src: "mcc/image_2023-12-16_164229720 - Alden.jpg",
    description:
      "Mococo~! Happy New year! I hope you'll continue being silly, sneezy, and absolutely passionate with what you do because its through these things that you managed to protect my smile this year! For my resolution, I will work absolutely hard chasing my art dream with you both. Love Mococo<3",
    author: "kenriyu",
    clicked: false,
  },
  {
    Timestamp: "12/16/2023 2:49:55",
    src: "fww/Fuwawa - Bron.jpg",
    description:
      "Thank you Fuwawa for always keeping an eye on the Ruffians and guarding our smiles! Happy new year~! I hope we can protect your smile next year as well.",
    author: "Bron",
    clicked: false,
  },
  {
    src: "mcc/Mococo - Bron.jpg",
    description:
      "Thank you Mococo for always being so energetic and uplifting! Happy new year~! Keep your spirits up in 2024 as well!",
    author: "Bron",
    clicked: false,
  },
  {
    Timestamp: "12/16/2023 4:02:13",
    src: "fww/image (1) - David Donnelly.jpg",
    description:
      "Hi Fuwawa!! This year, my resolution as a ruffian is to try to participate more in the community and try to do a bit more art! Even if i'm not all that great! Wishing you the absolute best in the new year!",
    author: "James_Wargull",
    clicked: false,
  },
  {
    src: "mcc/image - David Donnelly.jpg",
    description:
      "Hi Mococo!! This year, my resolution as a ruffian is to try to fix my sleep schedule so that the times that I'm able to catch FWMC Morning are when I wake up in time, not just when I stay up all night! Wishing you the absolute best in the new year!",
    author: "James_Wargull",
    clicked: false,
  },
  {
    Timestamp: "12/16/2023 6:04:37",
    src: "fww/IMG_2322 - AonyxOtter.jpg",
    description:
      "Happy New Year Fuwawa! My news years wish is for us all to continue having lots of fun together, I hope that all the hard work and passion you put into everything you do continues to pay off and that you achieve all that you want this year! Here's to an amazing year ahead! BAU BAU~! 🎉✨",
    author: "AonyxOtter",
    clicked: false,
  },
  {
    src: "mcc/IMG_2321 - AonyxOtter.jpg",
    description:
      "Happy New Year Mococo! My wish for this year is that all we continue to have a lots of fun together! I hope all your hard work and dedication continues to pay off, and that you accomplish everything you set out to achieve this year. Here’s to another wonderful year ahead! BAU BAU~! 🎉✨",
    author: "AonyxOtter",
    clicked: false,
  },
  {
    Timestamp: "12/16/2023 15:55:30",
    src: "fww/IMG_20231216_204302 - chumbeque.jpg",
    description:
      "I wish Fuwawa can enjoy many visual novels and have a lot of rest. May she succeed in her journey of feeding Mococo with natto and may she be very happy together with her, her friends in hololive and us Ruffians!",
    author: "chumbeque",
    clicked: false,
  },
  {
    src: "mcc/IMG_20230925_215448 - chumbeque.jpg",
    description:
      "I wish Moco-chan lots of rest and keep that captivating energy I love so much! I hope at some point natto won't be gross for her and I hope Mococo pup talks that help me so much are always present from the bottom of her heart for us! Lots of happiness to her along with her sister and the community!!!!",
    author: "chumbeque",
    clicked: false,
  },
  {
    Timestamp: "12/16/2023 21:09:12",
    src: "fww/Fuwawa - Xenon Xcalibur.jpg",
    description:
      "My New Year's resolution is to work on self-improvement. I wish to accomplish many goals, reach new milestones, fight bad habits, and change for the better. I'm motivated to make positive changes in my life and chase my dreams.",
    author: "@Xcalius",
    clicked: false,
  },
  {
    src: "mcc/Mococo - Xenon Xcalibur.jpg",
    description:
      "My New Year's resolution is to continue to improve my art and graphic design skills. I want to share my art of Fuwawa and Mococo with everyone one day. I will practice and study hard in 2024 to reach my goals during my art journey, and I hope my art will receive a like from you someday.",
    author: "@Xcalius",
    clicked: false,
  },
  {
    Timestamp: "12/16/2023 22:14:28",
    src: "fww/Screenshot 2023-12-17 003648 - J M.jpg",
    description:
      "Dear Fuwawa, this year has been rough until you debuted. I lost motivation to do better in life until then. So my resolution is that in the next year, I'll do whatever it takes to have a successful career. If I do, maybe I can be proud and remember you were my motivation to succeed.",
    author: "MisterCrabs",
    clicked: false,
  },
  {
    src: "mcc/image (2) - J M.jpg",
    description:
      "Dear Mococo, I can't believe how much you've taken over my heart. I've never felt this kind of love for so long that you're the brightest ray of sunshine in my life. This year, my wish is to improve my life as best I can. If I do, maybe I can prove myself worthy enough? For you, of course!",
    author: "MisterCrabs",
    clicked: false,
  },
  {
    Timestamp: "12/16/2023 23:17:21",
    src: "fww/fww - NTP KSR.jpg",
    description:
      "I wish I can pet her... I mean pat her head. espectially during the christmas day! she is so cute when she wear christmas hat! so cute and fluffy!... so... if I could... I wish I can hug her... bau bau",
    author: "twitter: ntpksr (Por) ",
    clicked: false,
  },
  {
    src: "mcc/mcc - NTP KSR.jpg",
    description:
      "She's so cute so I want to pat her head ! and I want to see more her tail too!! (by not make her angry although she is cute when she does) and I want to hear her more BAU BAU",
    author: "twitter: ntpksr (Por) ",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 0:06:42",
    src: "fww/fuwascreenie - otm otm.jpg",
    description:
      "Happy New Year Fuwawa! I wanted to wish you well with whatever goals you may have for 2024! 2023 was so special, and I'm sure together we'll make 2024 just as wonderful. Future is bright! BAU BAU",
    author: "otm",
    clicked: false,
  },
  {
    src: "mcc/mocoscreenie - otm otm.jpg",
    description:
      "Happy New Year Mococo! I wanted to wish you well with all your 2024 goals. We did so much this year and had so much fun - let's play lots and lots next year too, and smile just as much. Future is bright! BAU BAU",
    author: "otm",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 5:45:44",
    src: "fww/Fuwawa - Wee Hwee Jin.jpg",
    description:
      "Dear FUWAWAAA, i hope to be healthier and finish a marathon in 6 hours. Take care of your and Mococo's health, eat well, rest well, pace work load well.",
    author: "Wee Hwee Jin",
    clicked: false,
  },
  {
    src: "mcc/MOCOCO - Wee Hwee Jin.jpg",
    description:
      "Dear MOCOCO!!! Hope you and Fuwawa can get a proper holiday after this coming busy holidays. Do your best to beat natto , i was able to finish 3 packs following your example. Dont be afraid to pause and take a breather.I will try to eat healthier meals next year.",
    author: "Wee Hwee Jin",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 10:51:22",
    src: "fww/1696011337337853 - Akaryn.jpg",
    description:
      "Happy New Year, Fuwawa! You really are incredible. Seeing you shine so bright fills me with so much joy. An important resolution to me this year is that I want to be the best Ruffian I can be and give 2024 my all! I hope 2024 will be the year so many of your dreams will come true",
    author: "Akaryn",
    clicked: false,
  },
  {
    src: "mcc/1702789677860892 - Akaryn.jpg",
    description:
      "Mococo! Happy New Year! You're an inspiration. Do you know that? Next year I'm going to do my best to push myself and get out of my comfort zone, and be the best Ruffian I can be. I hope 2024 is full of as much happiness for you as you bring me, and that your hopes and wishes come true.",
    author: "Akaryn",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 20:00:12",
    src: "fww/fuwawawa - Kevin Abad.jpg",
    description:
      "Fuwawa! Since your debut I was smitten by you, you're such a caring person with a passionate heart and an extremely cute voice! Your sincerity and effort in everything you do is inspiring and motivates me to do my best next year. Happy New Years!",
    author: "Abi",
    clicked: false,
  },
  {
    src: "mcc/mocococo - Kevin Abad.jpg",
    description:
      "Mococo! Seeing you try your best at things you're not good at like eating Natto and reading out loud motivated me to do the same with things I was scared to start working on. Let's continue doing our best next year as well! Happy New Year!",
    author: "Abi",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 13:03:53",
    src: "fww/fuwawa2 - sabastian H.jpg",
    description:
      "For 2024, I want to make a positive impact to everyone around me, and more importantly to myself. I also want to be fluffier like Fuwawa! BAU BAU!",
    author: "sabastian",
    clicked: false,
  },
  {
    src: "mcc/mococo2 - sabastian H.jpg",
    description:
      "For 2024, I want to embrace the things and the people that are important to me even more than I already do. I also want to be fuzzier like Mococo! BAU BAU!",
    author: "sabastian",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 14:07:28",
    src: "fww/IMG_6072 - Jiro Juno.jpg",
    description:
      "Hello Fuwawa, this year I would like to wish for good health, physically and mentally, for those I care for, which includes you (and Mococo of course)! Although getting sick is inevitable I hope to have happy times together afterwards or maybe during if it’s not infectious! Take care!",
    author: "JiroJuno",
    clicked: false,
  },
  {
    src: "mcc/IMG_5194 - Jiro Juno.jpg",
    description:
      "Hello Mococo, one of my New Year’s resolutions is to keep challenging myself physically, (although not with natto), without going to a gym! I want to be able to continue exercising almost everyday and get stronger throughout the year or maintain a level of strength.",
    author: "JiroJuno",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 3:08:44",
    src: "fww/Fuwawa - Husarz Koronny.jpg",
    description:
      "My resolution is to learn English and Japanese so that I can understand you Fuwawa-san, stop running away from my weaknesses and find friends. I wish you Fuwawa-san all the best in the world and further success.",
    author: "Husarz Koronny",
    clicked: false,
  },
  {
    src: "mcc/Mococo - Husarz Koronny.jpg",
    description:
      "My resolution is to learn English and Japanese so that I can understand you Mococo-san, stop running away from my weaknesses and find friends. I wish you Mococo-san all the best in the world and further success.",
    author: "Husarz Koronny",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 15:25:12",
    src: "fww/fuwawasanta2 - Chris Gilmore.jpg",
    description:
      "Let's take care of ourselves and have an incredible year! Happy new year, Fuwawa!",
    author: "rad shiba",
    clicked: false,
  },
  {
    src: "mcc/mococosanta - Chris Gilmore.jpg",
    description:
      "Let's become even stronger together this year! Happy new year, Mococo!",
    author: "rad shiba",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 15:46:52",
    src: "fww/fuwawaxmas - Decoration Cake.jpg",
    description: "I resolve to keep smiling and loving Fuwawa!",
    author: "Decoration Cake",
    clicked: false,
  },
  {
    src: "mcc/mococoxmas - Decoration Cake.jpg",
    description: "I resolve to keep smiling and loving Mococo!",
    author: "Decoration Cake",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 16:17:11",
    src: "fww/IMG_6146 - TileSeller.jpg",
    description:
      "Hi Fuwawa! My New Year’s resolution this year is to take more risks, professionally and personally! I played it extremely safe in 2023, but you and Mococo have inspired me to step out of my comfort zone!",
    author: "Tileseller",
    clicked: false,
  },
  {
    src: "mcc/IMG_6145 - TileSeller.jpg",
    description:
      "Hi Mococo! My New Year’s resolution this year is to take more risks, professionally and personally! I played it extremely safe in 2023, but you and Fuwawa have inspired me to step out of my comfort zone!",
    author: "Tileseller",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 16:28:14",
    src: "fww/IMG_5577 - Alizoneto Rocha.jpg",
    description:
      "Happy BAU Year! I hope this message finds you right, I am very thankful for all your love and dedication. It gives me fuel to go throughout any day! I will always remember our time looking at the Moon together! My resolution is to make you realize how much I love you! I have another one just for you too: to pat your head!",
    author: "Alizoneto Rocha (Liz/Lizo)",
    clicked: false,
  },
  {
    src: "mcc/IMG_4538 - Alizoneto Rocha.jpg",
    description:
      "Happy BAU Year! I hope you are having some vacations from sneezes today, as much as I love them (they are pretty cute) I know how it can be annoying if they don't stop. I want to thank you too for all the love and dedication! It does make my day brighter! Every pup talk makes me emotional and motivated, from the very first Bau Bau you took possession of my heart! My resolution is for you too to notice how much I love you! You too get a exclusive resolution and that is: to hold your paw!",
    author: "Alizoneto Rocha (Liz/Lizo)",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 11:40:13",
    src: "fww/Fuwawa - Pie Bird.jpg",
    description:
      "My new years resolutions are to keep challenging myself to be able to socialize without anxiety, get outside and exercise more, and to have lots of fun with FUWAMOCO! Wishing you good health and happiness Fuwawa! Let's do our best, work towards our goals and have a great year! BAU BAU!",
    author: "PieBird",
    clicked: false,
  },
  {
    src: "mcc/Mococo - Pie Bird.jpg",
    description:
      "My new years resolutions are to keep challenging myself to be able to socialize without anxiety, work hard on improving my art, and to have lots of fun with FUWAMOCO! Wishing you good health and happiness Mococo! Let's do our best, work towards our goals and have a great year! BAU BAU!",
    author: "PieBird",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 17:48:11",
    src: "fww/IMG_3531 - Gene Nery.jpg",
    description:
      "My New Year’s resolution is to take up baking again. I’ve been feeling unmotivated lately and I’ve been searching for a creative outlet. I used to be passionate about baking and you both inspired me to follow my passion again. I’ll always be grateful to you both.",
    author: "VanguardDuelist",
    clicked: false,
  },
  {
    src: "mcc/IMG_3618 - Gene Nery.jpg",
    description:
      "My New Year wish is that Fuwamoco’s hard work and effort is rewarded. You two are so incredibly passionate about what your dreams and that inspires others to follow their dreams too. You deserve success and I hope it comes your way. I’ll support you always!",
    author: "VanguardDuelist",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 18:26:30",
    src: "fww/Fuwa-cute - アレックス.jpg",
    description:
      "I'm so happy to be welcoming the New Year with people I love (Thank you for being a part of that)! This year I want to focus on taking care of my own family, just like you take care of each other! Happy New Year, Fuwa-nee!",
    author: "Hydroyasai",
    clicked: false,
  },
  {
    src: "mcc/Moco-cute - アレックス.jpg",
    description:
      "I'm so happy to be welcoming the New Year with people I love (Thank you for being a part of that)! This year I want to set a goal for myself, to train to take part in a long-distance run. Just like your relentless pursuit of your goals! Happy New Year, Moco-chan!",
    author: "Hydroyasai",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 19:04:15",
    src: "fww/image (7) - John Tamayo.jpg",
    description:
      "Happy New Year Fuwawa, looking forward to spending another warm and fluffy one together with you! ",
    author: "TruSanKyuu",
    clicked: false,
  },
  {
    src: "mcc/image (6) - John Tamayo.jpg",
    description:
      "Happy New Year Mococo, and onwards to another energetic and fuzzy one! ",
    author: "TruSanKyuu",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 20:22:54",
    src: "fww/CUTEST PIC YET - Savage Foils.jpg",
    description:
      "My new year's resolution would be to improve myself! It's a weird thing where even if you know what to do, you still have to go out there and do it! So I would say, cultivating a consistent willpower? (Kinda like what you two have) You two inspire me to keep at it!",
    author: "SavageFoils",
    clicked: false,
  },
  {
    src: "mcc/Cute Mocochan!!! - Savage Foils.jpg",
    description:
      "I would also like to start new things as well! So learning JP in a routine, reading more books on topics I don't know much about, maybe even picking up a new skill? In general: Improving myself, while also branching out to new things! Best wishes to you two! The future's bright!",
    author: "SavageFoils",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 19:56:55",
    src: "fww/hmmm... - Kurisu V1.jpg",
    description:
      "Fuwawa! I've never been too good at saying out loud some of my thoughts before... So for this new year, I want us both to keep building that confidence and trust to share whatever's on our mind with each other or the Ruffians, without hesitating as much as we may do now! BAU BAU!",
    author: "Shwoo",
    clicked: false,
  },
  {
    src: "mcc/image - Kurisu V1.jpg",
    description:
      "Mococo! Next year we can both keep on pushing with the foods we dislike! I've never been a veggie-person, but this year I promise to push through those which I do not like, so you aren't completely alone in your natto-eating journey! We can both do this, I believe! BAU BAU! ",
    author: "Shwoo",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 20:25:16",
    src: "fww/fuwawa new years - fuwawa cute.jpg",
    description:
      "Happy New Years, Fuwawa! Here's to a 2024 filled with even more giggles and silly moments together. A major resolution I have is to continue pushing outside of my comfort zone to create and share with the community. Specifically, I hope to realize a dream of releasing a game!",
    author: "Phoenix",
    clicked: false,
  },
  {
    src: "mcc/mococo_newyears_smile - fuwawa cute.jpg",
    description:
      "Happy New Year, Mococo! I wish for a 2024 filled with many smiles and unforgettable moments. Inspired by the natto Mondays and Pup Talks, I want to challenge myself to refocus my efforts to learn and develop my understanding of Japanese. Day by day, step by step - I will do it!",
    author: "Phoenix",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 20:45:51",
    src: "fww/1699592807674486 - kuro.jpg",
    description:
      "Looking forward to a new fluffy year with Fuwawa~! 🐾 My first resolution for 2024 is to learn how to draw decently!",
    author: "kuroki (kurokidono/@kur0_tomo)",
    clicked: false,
  },
  {
    src: "mcc/1692907242629401 - kuro.jpg",
    description:
      "Looking forward to a new fuzzy year with Mococo~! 🐾 My second resolution for 2024 is to learn how to program decently! (Specifically Python and Rust)",
    author: "kuroki (kurokidono/@kur0_tomo)",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 20:49:23",
    src: "fww/fuwacute - Sergio Romero González.jpg",
    description:
      "Following Fuwawa's example, I will work harder next year. In general, my goal is to be the best version of me that I can be. I'm sure that Fuwawa's contagious passion will serve as inspiration to do my best every day!",
    author: "Adonais @neoadonis",
    clicked: false,
  },
  {
    src: "mcc/mococute - Sergio Romero González.jpg",
    description:
      "I'll pick up some of the hobbies that I used to enjoy but haven't done in a long time, starting with drawing. Hopefully I can improve my skills up to a level where I feel I can accurately capture Mococo's cuteness with a drawing!",
    author: "Adonais @neoadonis",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 20:57:12",
    src: "fww/Screenshot 2023-10-31 215629 - Space Toast.jpg",
    description:
      "Happy New Year Fuwawa! Thank you for the wonderful memories this year, they have been so special to me. I really enjoy sharing these memories with the Ruffians, which is why one of my resolutions for next year is to improve my Japanese to communicate with JP Ruffians! BAU BAU!!!",
    author: "Twitter: @_SpaceToast",
    clicked: false,
  },
  {
    src: "mcc/IMG_4558 - Space Toast.jpg",
    description:
      "Happy New Year Mococo! Thank you so much for the memories this year. You mentioned before about how its good to self reflect, so I want to do more of that in the New Year by journalingmore! I'll make sure to note down all the fun we have together too! BAU BAU!!!",
    author: "Twitter: @_SpaceToast",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 21:12:13",
    src: "fww/Fuwawa screenshot by FalcomxTrails - Antonio Jones.jpg",
    description:
      "My New Year's resolution is to travel and go on lots of walks! I wish for Fuwawa to always be happy!",
    author: "FalcomxTrails ",
    clicked: false,
  },
  {
    src: "mcc/Mococo screenshot by FalcomxTrails - Antonio Jones.jpg",
    description:
      "My New Year's resolution is to challenge myself by learning Japanese and trying natto! I wish for Mococo to be healthy and have an easier time with her allergies!",
    author: "FalcomxTrails ",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 21:59:54",
    src: "fww/Fuwa_Cute19 - Itta NotIna.jpg",
    description:
      "My wish next year is to gain enough artistic ability with dedication and practice that I can proudly share something I've done. I want to be able to stand shoulder to shoulder (even if just a bit) with those I respect so much. Something cute enough Fuwamoco would even like!",
    author: "Itta",
    clicked: false,
  },
  {
    src: "mcc/Moco_Cute30 - Itta NotIna.jpg",
    description:
      "A resolution of next year is to always push through with something as long as I love doing it! This is something Mococo spoke about and can really weight me down.. but not in 2024! I'll be a better me than last year!",
    author: "Itta",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 22:38:10",
    src: "fww/fuwa - Nojaro ,.jpg",
    description:
      "I here by resolute with fuwawa that i shall do more japanese reps so that one day i can read visual novel/watch anime/read mangas without translation.And also give out more head pats to you guys!",
    author: "Nojaro",
    clicked: false,
  },
  {
    src: "mcc/moco - Nojaro ,.jpg",
    description:
      "I here by make a resolution under mococo's withness that i will try and improve my art skill.I will cheer you guys on your journey to be become the strongest duo!And maybe try eating something i don't like along side with mococo ",
    author: "Nojaro",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 23:15:30",
    src: "fww/Screenshot_20231218_150803-1-1 - Ch Rev.jpg",
    description:
      "Next year I'll work harder and be more confident. Be a better person in general.",
    author: "Rev",
    clicked: false,
  },
  {
    src: "mcc/Screenshot_20231218_150803-1 - Ch Rev.jpg",
    description: "I wish FuwaMoco and every ruffian good health.🙏",
    author: "Rev",
    clicked: false,
  },
  {
    Timestamp: "12/17/2023 23:56:14",
    src: "fww/Fuwa - Dylan Mendes.jpg",
    description:
      "I made a lot of progress with language this year, but not as much time to pursue it in full as I would like! I want to make it my goal to finally read my first VN in Japanese, some time next year. I really, really want to get to those hidden gems that haven't been translated...!",
    author: "DLan",
    clicked: false,
  },
  {
    src: "mcc/Moco - Dylan Mendes.jpg",
    description:
      "I got a lot done in 2023, but I didn't get to spend as much time pursuing and following my passions as I would've liked. Next year, I want to try to make atleast one piece of pixel art at some point, and try to make something I'm proud to call my own, whatever form of art it is.",
    author: "DLan",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 3:15:01",
    src: "fww/F645LZ1mQi - Sam.jpg",
    description:
      "Thank you for always kindly encouraging, and watching over us Ruffians Fuwawa-chan! My wish is the same for you two: to keep supporting you towards new heights and to keep conveying what you mean to us in our own way",
    author: "Mugetsu(無月）",
    clicked: false,
  },
  {
    src: "mcc/CUuOgYSfk1 - Sam.jpg",
    description:
      "Thank you for always giving us the strength and energy to get through our days Moco-chan! My wish is the same for you two: to keep supporting you towards new heights and to keep conveying what you mean to us in our own way",
    author: "Mugetsu(無月）",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 0:59:29",
    src: "fww/atran_fuwa - John Smith.jpg",
    description:
      "Hi Fuwawa! あけおめ! Hearing you giggle and get so excited about what you love never fails to make me smile and remind me of the power of PASSION. I've always wanted to make music, and 1+ tracks a month is my goal this year! LOVE YOU FUWAWA 💙! To the world's sweetest demon dog, ことよろ～",
    author: "@AndyTran10Sub",
    clicked: false,
  },
  {
    src: "mcc/atran_moco - John Smith.jpg",
    description:
      "Yo Mococo! あけおめ! Your constant pup has kept me going and inspired me to try SO many things these last few months! I've awakened to the joy of お絵かき and am aiming for a sketch a month this year! Oh and the N1 too, let's go! LOVE YOU MOCOCO 💗! To the world's cutest demon dog, ことよろ～",
    author: "@AndyTran10Sub",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 1:26:09",
    src: "fww/sketch-1702877235578 - 荒井望臣.jpg",
    description: "I want to be healed by Fuwawa's voice.",
    author: "chu-",
    clicked: false,
  },
  {
    src: "mcc/sketch-1702877280520 - 荒井望臣.jpg",
    description: "I need energy from Mococo.",
    author: "chu-",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 3:52:30",
    src: "fww/dfzgdfgdx - Faye Grimm.jpg",
    description: "I hope to make better art and be a better ruffian.",
    author: "Flu",
    clicked: false,
  },
  {
    src: "mcc/dxfngh - Faye Grimm.jpg",
    description:
      "My resolution is to get better at art and be a nice member of the community.",
    author: "Flu",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 5:08:21",
    src: "fww/IMG_0916 - hg miqura.jpg",
    description:
      "My aspiration for next year is to participate with other Ruffians in the distribution that Fuwawa-chan does with Moco-chan, and to create a fun place for everyone by cheering them on in the comments and providing them with stories! And to learn English, even if just a little bit!",
    author: "hg",
    clicked: false,
  },
  {
    src: "mcc/IMG_0902 - hg miqura.jpg",
    description:
      "My aspiration for next year is to participate with other Ruffians in the distribution that Moco-chan does with Fuwawa-chan, and to create a fun place for everyone by cheering them on in the comments and providing them with stories! That and to try my hand at things I'm not good at, even if it's just a little bit at a time!",
    author: "hg",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 7:45:42",
    src: "fww/IMG_2744 - william嘎抓.jpg",
    description:
      "Thank you Fuwawa!!! Your Fluffy and Cute Voice always make me feel healed! Hope you can Keep Fluffy and Healthy next year!!! And my New Year’s resolution is I want to learning more English until I don’t need translation to help me BAU BAU!!!🐾💙 ",
    author: "william嘎抓",
    clicked: false,
  },
  {
    src: "mcc/IMG_2542 - william嘎抓.jpg",
    description:
      "Thank you Moco-chan!!! Your Energetic and Cute Voice always make me feel energetic!!! Hope you can Keep Energetic and Healthy next year!!! And my New Year’s resolution is to improve my Clip Skill I wanna make more fun Videos to everyone BAU BAU !!!🐾❤️",
    author: "william嘎抓",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 7:59:43",
    src: "fww/watch v=VmLWdSgVlC8&t=9064 - 02 34 06.417(crop2) - Nullpo.jpg",
    description:
      "I want to get better at japanese! To the level where I can listen to some zatsudan without getting completely lost and dont have check a dictionary with every new sentence when I try to read something.",
    author: "nullpo_w",
    clicked: false,
  },
  {
    src: "mcc/4wdlCS_BPsw si=gW9cLOMDzhd0qpPp&t=2364 - 00 39 25.450(crop) - Nullpo.jpg",
    description:
      "My NY resolution is to get better at art. Im terrible at it but precisely because of that I'd like to challenge myself and learn how to draw and get better at edits.",
    author: "nullpo_w",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 9:47:06",
    src: "fww/Fuwawa tickle attack - brendan3333@hotmail.com.jpg",
    description:
      "My new years wish is I am able to work as hard as Fuwawa and Mococo do, they are an inspiration.",
    author: "Sora383",
    clicked: false,
  },
  {
    src: "mcc/Mococo being called adorable - brendan3333@hotmail.com.jpg",
    description:
      "My New Years resolution is to always look for the positives in life like Mococo and Fuwawa do, even when I run into challanges as tough as Natto. ",
    author: "Sora383",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 10:41:19",
    src: "fww/GAyPiZnbMAAt2zr - Auston McDonald.jpg",
    description:
      "My new year's wish for Fuwawa is that she is a happy and healthy demon guard dog and that more and more people from all over the world get to hear her sweet giggles, they fill me with so much joy in my heart and they always make my day! ",
    author: "mr.madness",
    clicked: false,
  },
  {
    src: "mcc/GAyPi9QaAAA83dz - Auston McDonald.jpg",
    description:
      "My new year's wish for Moco-chan is that she will continue to be strong and feel appreciated and loved, just like Ruffians everywhere after hearing her motivational pup-talks, they get me through some not so happy times, and I always feel so uplifted after hearing her!",
    author: "mr.madness",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 11:10:37",
    src: "fww/GAPwLX-XoAAs83l - Chrysalis.jpg",
    description:
      "Happy New Year Fuwawa! Thank you for always being such a sweet, silly, and extremely passionate person, you encourage me to do the same every day! I'm so excited to see what goals you'll accomplish and how bright you will shine this year. Love you! BAU BAU💙💙💙💙",
    author: "Chrysalis",
    clicked: false,
  },
  {
    src: "mcc/snapshot344 - Chrysalis.jpg",
    description:
      "Happy New Year Mococo! Thank you for always being so full of energy, overwhelmingly adorable, and giving us pup talks! They help more than you know! I'll keep challenging myself whenever possible. I can't wait to see how much you'll grow this year! Love you! BAU BAU💗💗💗💗",
    author: "Chrysalis",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 11:42:13",
    src: "fww/IMG_3168 - Lucas.jpg",
    description:
      "One of my new year's resolutions has been to go on walks every day now!",
    author: "@LucasKRNL",
    clicked: false,
  },
  {
    src: "mcc/IMG_3244 - Lucas.jpg",
    description:
      "Mococo's Natto challenge has inspired me to try new food and eat healthier in the new year!",
    author: "@LucasKRNL",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 11:59:26",
    src: "fww/what-did-fuwawa-see-wrong-answers-only-v0-c9dek2zjz3hb1 - Natsumori Sio Ch..jpg",
    description: "I hope to see many more sus fuwawa moments in 2024!",
    author: "@NatsumoriSio",
    clicked: false,
  },
  {
    src: "mcc/mococo text - Natsumori Sio Ch..jpg",
    description:
      "I hope 2024 contains many more pup talks to help everyone make it through another year!",
    author: "@NatsumoriSio",
    clicked: false,
  },
  {
    Timestamp: "12/18/2023 12:07:51",
    src: "fww/Fuwawa Cute - Jefferson Winslow.jpg",
    description:
      "Let's all continue doing our best and keepin' on keepin' on into 2024! Hopefully there's plenty more cute girls in our future!",
    author: "Jay Lowe",
    clicked: false,
  },
  {
    src: "mcc/Mococo Cute - Jefferson Winslow.jpg",
    description:
      "Let's all continue doing our best and keepin' on keepin' on into 2024! And maybe learn to appreciate some new foods too!",
    author: "Jay Lowe",
    clicked: false,
  },
];

export default images;