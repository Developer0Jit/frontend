
import { React,useState,useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddEditProduct from './AddEditProduct';
import ProductService from "../../../services/ProductService";
import Swal from "sweetalert2"
const Products = () => {
    const [productlist,setProductList]=useState([]);
    const [open, setOpen] = useState(false);
    const [operation, setOperation] = useState("Create");
    const [currentProduct, setCurrentProduct] = useState({});
    const columns = [{
            name:"id",
            label:"ID",
            Option:{
                filter:false,
                sort:false
            }
        },
        {
            name:"productName",
            label:"Product Name",
            Option:{
                filter:false,
                sort:false,
                customBodyRender:(productName)=>{
                    return productName;
                }
            },
        } ,
        {
          name:"brand",
          label:"Brand",
          Option:{
            filter:false,
            sort:false,
            customBodyRender:((brand)=>{
                return brand;
            })
          }
        },{
          name:"quentity",
          label:"Quantity",
          Option:{
            filter:false,
            sort:false,
            customBodyRender:(quentity)=>{
                return quentity;
            }
          }
        },{
          name:"price",
          label:"Price",
          Option:{
            filter:false,
            sort:false,
            customBodyRender:(price)=>{
                return price;
            }
          }
        },
        {
          label: "Action",
          name: "action",
          options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (index) => {
              const product = productlist[index];
              console.log(product);
              return (
                <>
                  <IconButton color="primary" onClick={() => editProduct(product)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => deleteProduct(product?.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              );
            },
          },
        },
    ];
  
     const loadProducts=()=>{
      ProductService.fetchAllProduct()
      .then((response)=>{
        console.log(response.data);
       if(response.data) setProductList(response.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    useEffect (() =>{
      loadProducts();
    },[])
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const addNewProduct = () => {
        setOperation("add");
        setCurrentProduct({});
        setOpen(true);
      };
      const editProduct = (product) => {
        setOperation("edit");
        setCurrentProduct(product);
        setOpen(true);
      };
      const deleteProduct = (id)=> {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            ProductService.deleteProduct(id)
    
              .then((response) => {
                loadProducts();
                Swal.fire("Deleted!", "The product been deleted.", "success");
              })
              .catch((err) => {
                Swal.fire("Not Deleted!", "Could not deleted.", "error");
              });
          }
        });
      };
    return ( <>
      <AddEditProduct open={open} 
      operation={operation}
      handleClose={handleClose}
      loadProducts={loadProducts} 
      currentProduct={currentProduct}
      />
      <Button variant="outlined" onClick={addNewProduct}>
        Add Product
      </Button>
    <MUIDataTable title="Products" columns={columns} data={productlist} /></>);
}
 
export default Products;