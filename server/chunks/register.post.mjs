import { defineEventHandler, readBody } from 'h3';
import { c as createUser } from './users.mjs';
import '@prisma/client';

const register_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("--- server ---");
  console.log(body);
  try {
    const user = await createUser(body);
    return user;
  } catch (e) {
    console.log(e);
    return "fail";
  }
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map
