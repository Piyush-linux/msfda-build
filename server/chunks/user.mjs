import { defineEventHandler } from 'h3';
import { b as getUsers } from './users.mjs';
import '@prisma/client';

const user = defineEventHandler(async (event) => {
  try {
    const res = await getUsers();
    return res;
  } catch (e) {
    console.log(e);
    return "fail";
  }
});

export { user as default };
//# sourceMappingURL=user.mjs.map
