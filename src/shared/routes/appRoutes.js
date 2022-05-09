import DashboardIcon from '@mui/icons-material/Dashboard';
import UserIcon from '@mui/icons-material/People';
import ProductIcon from '@mui/icons-material/Store';
import react,{lazy} from "react";
const Dashboard =lazy(()=>
    import("../../features/admin/dashboard/Dashboard")
);
const Users =lazy(()=>
    import("../../features/admin/users/Users")
);
const Products=lazy(()=>
import("../../features/admin/products/Products")
);

export default [
    {
        title:"Dashboard",
        path:"",
        showInMenu:true,
        component:<Dashboard />,
        Icon:<DashboardIcon />

    },
    {
        title:"Users",
        path:"users",
        showInMenu:true,
        component:<Users />,
        Icon:<UserIcon/>
    },
    {
        title:"Products",
        path:"product",
        showInMenu:true,
        component:<Products />,
        Icon:<ProductIcon/>
    }
]