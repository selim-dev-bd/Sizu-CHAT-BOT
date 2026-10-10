const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  aliases: ["ownerinfo", "owners"],
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "Show Owner Info with random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  const info = `
👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢

👤 𝗡𝗮𝗺𝗲: 𝐒𝐞𝐥𝐢𝐦 𝐒𝐢𝐳𝐮 🦋
🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲: 𝐒𝐢𝐳𝐮
🎂 𝗔𝗴𝗲: 𝟭𝟴+
💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻: 𝗦𝗶𝗻𝗴𝗹𝗲
🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻: 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻: 𝐇𝐒𝐂
🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀: 𝐌𝐞𝐡𝐞𝐫𝐩𝐮𝐫

🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦

📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
fb.com/100075452558091

💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿:
m.me/100075452558091

📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽:
wa.me/01618119633
`;

  const images = [
    "https://imgur.com/a/VroiOWg",
    "https://imgur.com/a/ngyqmc2",
    "https://imgur.com/a/VroiOWg",
    "https://imgur.com/a/ngyqmc2"
  ];

  const randomImg =
    images[Math.floor(Math.random() * images.length)];

  const filePath = __dirname + "/cache/owner.jpg";

  const callback = () => {
    api.sendMessage(
      {
        body: info,
        attachment: fs.createReadStream(filePath)
      },
      event.threadID,
      () => {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    );
  };

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(filePath))
    .on("close", callback);
};
