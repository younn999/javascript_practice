const gitBook = {
  title: "깃&깃허브 입문",
  pubDate: "2019-12-06",
  pages: 272,
  finished: true,
};

for (const key in gitBook) {
  document.write(`${key} : ${gitBook[key]}<br>`);
}
