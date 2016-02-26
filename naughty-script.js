setInterval(function() {
  console.log(process.env.NAUGHTY_SCRIPT_GREETING);
  process.exit(1);
}, 20);
