const products = [];
exports.getAddProduct = (req, res, next) => {
	res.render("../../client/views/admin/add-product", {
		pageTitle: "Add Product",
		path: "/admin/add-product",
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true
	});
};

exports.postAddProduct = (req, res, next) => {
	products.push({ title: req.body.title });
	res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    req.body;
    console.log(req.body);
	res.render("../../client/views/shop/shop", {
		prods: products,
		pageTitle: "Shop",
		path: "/",
		hasProducts: products.length > 0,
		activeShop: true,
		productCSS: true
	});
};
