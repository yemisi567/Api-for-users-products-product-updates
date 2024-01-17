import prisma from "../db";

// create a new product
export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });

  return res.json({ data: product });
};

// Get all user product
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  return res.json({ data: user.products });
};

// Get one product
export const getProduct = async (req, res) => {
  const product = await prisma.product.findFirst({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });

  return res.json({ data: product });
};

// update one product
export const updateProduct = async (req, res) => {
  const update = await prisma.product.update({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
    data: {
      name: req.body.name,
    },
  });
  return res.json({ data: update });
};

// delete one product
export const deleteProduct = async (req, res) => {
  const deleteProduct = await prisma.product.delete({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });
  return res.json({ data: deleteProduct });
};
