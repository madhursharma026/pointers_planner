import { Link } from "react-router-dom";

function MyProfileOrder() {
    return (
        <>
            <h4><i className="fa fa-first-order"></i> Orders</h4>
            <table class="table mt-5">
                <thead>
                    <tr>
                        <th scope="col"><input type="checkbox" /></th>
                        <th scope="col">Email Address</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Order</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>John123@gmail.com</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td className="text-success">Active</td>
                        <td className="text-primary">Completed</td>
                        <td><i class="fa fa-pencil" style={{ color: "red" }}></i>&emsp;<i class="fa fa-trash-o" style={{ color: "red" }}></i></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>John123@gmail.com</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td className="text-danger">Active</td>
                        <td className="text-dark">pending</td>
                        <td><i class="fa fa-pencil" style={{ color: "red" }}></i>&emsp;<i class="fa fa-trash-o" style={{ color: "red" }}></i></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>John123@gmail.com</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td className="text-success">Active</td>
                        <td className="text-primary">Completed</td>
                        <td><i class="fa fa-pencil" style={{ color: "red" }}></i>&emsp;<i class="fa fa-trash-o" style={{ color: "red" }}></i></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default MyProfileOrder;
