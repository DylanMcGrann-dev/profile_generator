const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profile = '';

rl.question('What\'s your name? Nicknames are also acceptable ', (answer) => {
  profile += `hello my name is ${answer}.`;

  rl.question('What\'s an activity you like doing? ', (answer) => {
    profile += `. My favorite activity is ${answer},`;

    rl.question('What do you listen to while doing that? ', (answer) => {
      profile += `While i am doing that activity i like to listen to ${answer}.`;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        profile += `My favorite meal is ${answer},`;

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          profile += `the best thing to eat for that meal is definitely ${answer}.`;

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            profile += `In my opinion the best sport ever is ${answer}.`;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              profile += `Last but not least my special superpower is ${answer}!`;
              rl.close();
              console.log(profile);
            });
          });
        });
      });
    });
  });
});