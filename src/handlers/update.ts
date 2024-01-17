import prisma from "../db";

// create a new update
export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId,
    },
  });

  if (!product) {
    res.status(400);
    return res.json({
      message: "Product not found",
    });
  }

  const update = await prisma.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      product: { connect: { id: product.id } },
    },
  });

  return res.json({ data: update });
};

// Get all user update
export const getUpdates = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      Update: true,
    },
  });

  if (!products) {
    res.status(400);
    return res.json({
      message: "Product not found",
    });
  }
  const updates = products.reduce((allProducts, product) => {
    return [...allProducts, ...product.Update];
  }, []);
  return res.json({ data: updates });
};

// Get one update
export const getUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
   
  });
  if (!update) {
    res.status(400);
    return res.json({
      message: "No update found",
    });
  }

  return res.json({ data: update });
};

// update one update
export const updateUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      Update: true,
    },
  });

  const updates = products.reduce((allProducts, product) => {
    return [...allProducts, ...product.Update];
  }, []);

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    res.status(400);
    return res.json({
      message: "Product not found",
    });
  }

  const updatedUpdate = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });
  return res.json({ data: updatedUpdate });
};

// delete one update
export const deleteUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      Update: true,
    },
  });

  const updates = products.reduce((allProducts, product) => {
    return [...allProducts, ...product.Update];
  }, []);

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    res.status(400);
    return res.json({
      message: "Product not found",
    });
  }

  const deletedUpdate = await prisma.update.delete({
    where: {
      id: req.params.id,
    },
  });
  return res.json({ data: deletedUpdate });
};
