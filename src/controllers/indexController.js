const productos =[{
    id:0,
    nombre:"Carpaccio fresco",
    descripcion:" Entrada Carpaccio de salmón con cítricos",
    precio:"U$S 65.50",
    imagen:"Carpaccio-de-salmon.jpg" ,
  },
  {
    id:1,
    nombre:"Risotto de berenjena",
    descripcion:"Risotto de berenjena y queso de cabra",
    precio:"U$S 47.00",
    imagen:"Risotto-berenjena-queso-cabra.jpg" ,
  },
  {
    id:2,
    nombre:"Mousse de arroz",
    descripcion:" Mousse de arroz con leche y aroma de azahar",
    precio:"U$S 27.50",
    imagen:"Mousse-de-arroz-con-leche.jpg" ,
  },
  {
    id:3,
    nombre:"Espárragos blancos",
    descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio:"U$S 37.50",
    imagen:"esparragos.png" ,
  }]


  const indexController ={
  index : (req,res)=>{
    res.render("index",{title:"Azúcar pimienta y sal!", productos})},
  
  detailProduct: (req,res)=>{
    const {id} = req.params ;
    const producto = productos.find(element => element.id == id);
    res.render("detailProduct",{title:productos.nombre, producto, productos})
  }
}
 
module.exports = indexController