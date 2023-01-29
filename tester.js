let someState = {
  name: "wayne",
};

function main() {
  console.log(someState);
  player = someState;
  someState["test"] = "test";
  console.log("Running Inner1");

  inner1(player);
  console.log(someState);
  console.log(player);
  console.log("Running Inner2");

  inner2(player);

  console.log(someState);
  console.log(player);
}

main();

function inner1(player) {
  player.name = "mitch";
  console.log(player.test);
}

function inner2(player) {
  player.name = "lara";
}
