const index = (req, res) => {
  res.render("admin/product");
};

const create = (req, res) => {
  res.render("admin/add_product");
};

const edit = (req, res) => {
  console.log(req.params);
  res.render("admin/edit_product");
};

const deleteProduct = (req, res) => {
  res.send("delete product");
};

module.exports = {
  index: index,
  create: create,
  edit: edit,
  delete: deleteProduct,
};
