let quotes = ["I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
"Being happy never goes out of style.",
"Life is either a great adventure or nothing.",
"You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot - it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive." ,
"All you need in this life is ignorance and confidence; then success is sure.",
"I have very strong feelings about how you lead your life. You always look ahead, you never look back.",
"Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
"All your life, you will be faced with a choice. You can choose love or hate…I choose love.",
"I don't go by the rule book…I lead from the heart, not the head.",
"The events in our lives happen in a sequence in time, but in their significance to ourselves they find their own order the continuous thread of revelation.",
"The time is always right to do what is right.",
"The best thing to hold onto in life is each other.",
"Life is not a spectator sport. If you're going to spend your whole life in the grandstand just watching what goes on, in my opinion you're wasting your life.",
"If you don't like the road you're walking, start paving another one.",
"Despite the forecast, live like it's spring.",
"To succeed in life, you need three things: a wishbone, a backbone and a funny bone.",
"Life is short, but it is wide. This too shall pass.",
"The two most important days in your life are the day you are born and the day you find out why.",
"Don't bother just to be better than your contemporaries or predecessors. Try to be better than yourself.",
"Each person must live their life as a model for others.",
"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
"A life is not important except in the impact it has on other lives."
];

let output = document.getElementById('output');

let button = document.getElementById('btn');

button.addEventListener('click',function(){

      var randomquote  = quotes[Math.floor(Math.random() * quotes.length)]; 
      
    output.innerHTML = randomquote;

    
})