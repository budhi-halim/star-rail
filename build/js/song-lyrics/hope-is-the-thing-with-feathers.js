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
We rise together as our destiny unfolds
We face the darkness and our trials are yet untold
Through the shadows of despair
Oh in silence hopes we share
Wow, oh-oh
To chase our dreams that we've declared

We glimpse through our eyes
Yet fools blind our sights
Can't make what they say
We'll find our way, we'll find our way

Heads up! The wheels are spinning
Across the plains in valleys deep
To dawn the wheels that sing
An unending dream

Heads up! The tracks are running
Across the plains where shadows hide
We run, we stride
Wow-wow, oh-oh

In the face of fear and plight, and yet we hold our ground, whoa
In life we stand and strive, our victory is found
And the storms we've weathered through
And we hope in the light of truth, whoa-whoa
To break free from chains and come anew

Heads up! The wheels are spinning
Across the plains in valleys deep
To dawn, the wheels that sing
An unending dream

Heads up! The tracks are running
Across the plains where shadows hide
We run, we stride
Wow-wow, oh-oh

(Wow, whoa-oh-oh)
(Whoa-oh-oh, whoa-oh-oh)
(Wow, whoa-oh-oh)
(Whoa-oh-oh, whoa-oh-oh)

Wow, whoa-oh-oh
Whoa-oh-oh, whoa-oh-oh
Wow, whoa-oh-oh
Whoa-oh-oh, whoa-oh-oh

Heads up! A steady rhythm
A destination that's ever near
It comes, stride to our kingdom
And see the light of days

Heads up! The wheels are singing
The whispers and secrets they'd keep
To hope, we bound
Wow-wow, oh-oh

Break free, we chased our dream beneath the starry night
In the face of God, we rose as one
`

const audio = '';

const video = '<iframe width="1857" height="739" src="https://www.youtube.com/embed/l8-v7ZnNB_c" title="EP: Hope Is the Thing With Feathers | Honkai: Star Rail" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';