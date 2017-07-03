//Categories
Categories = new Mongo.Collection("categories");

//Products
Products = new Mongo.Collection("products");

//Prodcut Images

ProdcutSImages= new FS.Collection("ProdcutImages",{
	stores: [new FS.Store.GridFS("ProdcutImages")]
});