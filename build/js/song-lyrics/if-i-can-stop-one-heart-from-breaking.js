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
Birds are born with no shackles
Then what fetters my fate?
Blown away, the white petals
Leave me trapped in the cage

The endless isolation
Can't wear down my illusion
Someday, I'll make a dream unchained

Let my heart bravely spread the wings
Soaring past the night, to trace the bright moonlight
Let the clouds heal me of the stings
Gently wipe the sorrow off my life
I dream

What is meant by "miracle"
A word outside my days?
Once again, repeat warbles
But how could I escape?

No further hesitation
On those unanswered questions
So now, I'll make a dream unchained

Let my heart bravely spread the wings
Soaring past the night, to trace the bright moonlight
Let the clouds heal me off the stings
Gently wipe the sorrow off my life
I dream

Let my heart bravely spread the wings
Soaring past the night, to trace the bright moonlight
Let the cloud heal me off the stings
Gently wipe the sorrow off my life
I dream

I dream
`;

const audio = '<iframe width="1857" height="755" src="https://www.youtube.com/embed/8v0RVyPlUA4?list=OLAK5uy_k_PSIEDgq6t_hVGcrNTMeHDD0DCQVGN5A" title="If I Can Stop One Heart From Breaking" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

const video = '<iframe width="1857" height="755" src="https://www.youtube.com/embed/xFHNWJVsjmY" title="EP: If I Can Stop One Heart From Breaking | Honkai: Star Rail" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';