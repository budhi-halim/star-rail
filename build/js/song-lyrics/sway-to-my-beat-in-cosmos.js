export default function getLyrics(type) {
    const data = {
        lyrics: lyrics.trim().replaceAll('\n', '<br>'),
        audio: audio,
        video: video
    };
    return data[type];
};

const lyrics =
`
Mend your pace, sway to the beat
Hands up! Embrace who you wanna be
We're reaching heights unseen
Ooh-whoa, whoa-oh

Feel the fire deep within
You're the key to where my trust begins
Join my dream, it's just the right time
Whoa-oh, whoa

Leave it all behind (all behind)
Get ready now

Rise up into my world
Renew your definition
World so high, let me show
And hear my declaration
"No more ties"

Off the ground and tap your feet
Look, stars are near when you feel the beat
We're bound for the greater height
Ooh-whoa, whoa-oh

Take a leap into the blaze
Don't lose yourself in mundanity
Join my dream, it is the right time
Whoa-oh, whoa

Leave it all behind
Get ready now
(Sing along)

Welcome to my world
Renew your definition
World so high, let me show
And hear my declaration
"No more ties"

(Whoa-whoa)
Leave it all behind (whoa)

Welcome to my world
Renew your definition
World so high, let me show
Now hear my declaration

Welcome to my world
Renew your definition
World so high, we'll show
And go beyond horizon
Side by side
`

const audio = '';

const video = '';