import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

const createUser = (userData) => {
  console.log(userData);
  console.log("---");
  return prisma.user.create({
    data: userData
  });
};
const getUsers = (id) => {
  let res = prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      number: true
    }
  });
  return res;
};
const getExcelData = async (userData) => {
  const res = await prisma.admin.findFirst({
    where: {
      username: userData.username,
      password: userData.password
    }
  });
  console.log("Excel");
  if (res.role == "admin") {
    let res2 = prisma.user.findMany();
    console.log(res2);
    return res2;
  } else if (res.role == "cc1") {
    let res2 = prisma.user.findMany({
      where: {
        centreid: "1"
      }
    });
    return res2;
  } else if (res.role == "cc2") {
    let res2 = prisma.user.findMany({
      where: {
        centreid: "2"
      }
    });
    return res2;
  } else if (res.role == "cc3") {
    let res2 = prisma.user.findMany({
      where: {
        centreid: "3"
      }
    });
    return res2;
  } else if (res.role == "cc4") {
    let res2 = prisma.user.findMany({
      where: {
        centreid: "4"
      }
    });
    return res2;
  } else if (res.role == "cc5") {
    let res2 = prisma.user.findMany({
      where: {
        centreid: "5"
      }
    });
    return res2;
  } else if (res.role == "cc6") {
    let res2 = prisma.user.findMany({
      where: {
        centreid: "6"
      }
    });
    return res2;
  } else if (res.role == "cc7") {
    let res2 = prisma.user.findMany({
      where: {
        centreid: "7"
      }
    });
    return res2;
  }
  return "non admin";
};
const getAdmin = (userData) => {
  console.log("getAdmin");
  return prisma.admin.findFirst({
    where: {
      username: userData.username,
      password: userData.password
    }
  });
};

export { getExcelData as a, getUsers as b, createUser as c, getAdmin as g };
//# sourceMappingURL=users.mjs.map
