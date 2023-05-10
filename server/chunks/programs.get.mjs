import { defineEventHandler, getQuery, sendStream } from 'h3';
import { a as getExcelData } from './users.mjs';
import json2xls from 'json2xls';
import fs from 'fs';
import '@prisma/client';

const programs_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  console.log(query);
  try {
    const json = await getExcelData(query);
    console.log(json);
    const xls = json2xls(json);
    fs.writeFileSync("exported.xlsx", xls, "binary");
    return sendStream(event, fs.createReadStream("exported.xlsx"));
  } catch (e) {
    console.log(e);
    return "fail";
  }
});

export { programs_get as default };
//# sourceMappingURL=programs.get.mjs.map
