import { verify } from "./src/lib/verify.js";

(async () => {
  const token =
    "eyJzaWduYXR1cmUiOiI4NDU4NjlhMzAxMjcwNDU4MjBhMThjZTEzOGE3NWIyZWU5NDUyZTFiZDlhMDYwMTY4ZjE4YWI0ZDRmYWY5NTFkMDU3NDA2NzJmM2Q4MzRhZDhkNjc2MTY0NjQ3MjY1NzM3MzU4MzkwMGQzOTcwMDA5ZmI1ODc4MGYwZDYwN2Q2ZDg1NDAyZjY2NDMxNjIyNWYwNTM3OTM1YmZjNjM4ZDA2ODUxNmFmOWNiYjgwOTY1NDIxYTE3ZjRlMGYwNjE4MDk2NjIxMjFhMDI1NDBkYzgyNDM5ZDQzZTlhMTY2Njg2MTczNjg2NTY0ZjQ1ODQwNTc2NTYyMzMyZDU0NmY2YjY1NmUyZDU2NjU3MjczNjk2ZjZlM2EyMDMxMGE0NTc4NzA2OTcyNjUyZDQ0NjE3NDY1M2EyMDU0Njg3NTJjMjAzMjM1MjA0MTc1NjcyMDMyMzAzMjMyMjAzMDM5M2EzMjM4M2EzMzM3MjA0NzRkNTQ1ODQwMDMxZTg3YmMwNTI5NGQ5YmQ4Yjk5MGIwNWZlZDczYTdjMzEzZmIwYzBhZjIxN2Y1ZTdjODBiMjA3MDA0ODViMWY3YTAyOTE1YTk5ZGM1ZDU5YWM4OGIwZjYzZDdmZTdkNmYyYWExNjFlZDc2MWE1ZmRjMmM3Y2RmNWE5Y2RhMDMiLCJib2R5IjoiV2ViMy1Ub2tlbi1WZXJzaW9uOiAxXG5FeHBpcmUtRGF0ZTogVGh1LCAyNSBBdWcgMjAyMiAwOToyODozNyBHTVQifQ==";

  try {
    console.log(await verify(token));
  } catch (err) {
    console.error(err);
  }
})();
