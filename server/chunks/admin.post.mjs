import { defineEventHandler, readBody } from 'h3';
import { g as getAdmin } from './users.mjs';
import '@prisma/client';

const admin_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    username,
    password
  } = body;
  const userData = {
    username,
    password
  };
  try {
    console.log(userData);
    const user = await getAdmin(userData);
    console.log(user);
    if (user) {
      return user;
    }
  } catch (e) {
    console.log(e);
    return "fail";
  }
});

export { admin_post as default };
//# sourceMappingURL=admin.post.mjs.map
