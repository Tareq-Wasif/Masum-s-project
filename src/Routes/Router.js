import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Register from "../Form/Register";
 
 

const Router=createBrowserRouter([
	{
		path:'/',
		element:<Root/>	,
		children:[
			{
				path:'/register',
				element:Register
			}
		]

	}
])


export default Router