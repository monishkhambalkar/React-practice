import React, {useState, useEffect} from "react"; 
import { Button } from 'react-bootstrap';


function Home(){
    document.title = 'HOME';

    const [data, setData] = useState(null); 

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching Data : ", error);
            }
        }
        fetchData();
    },[])

    const tableRows = data && data.map(user=>{
        const concatAddress = () => {
            return (
                <>
                    <div>City : <span>{user.address.city}</span></div>
                    <div>Street : <span>{user.address.street}</span></div>
                    <div>zip code : <span>{user.address.zipcode}</span></div>
                </>
            )
        }
            
        return(
            <tr className="alert" role="alert" key={user.id}>
                <td>
                    <label className="checkbox-wrap checkbox-primary">
                        <input type="checkbox"/>
                    </label>
                </td>
                <td className="d-flex align-items-center">{user.name}</td>
                <td>{user.email}</td>
                <td className="status">{user.phone}</td>
                <td>{concatAddress()}</td>
                <td>
                    <span>
                        <Button variant="outline-primary">
                            Edit
                        </Button>
                    </span> &nbsp;
                    <span>
                        <Button variant="outline-danger">
                            Delete
                        </Button>
                    </span>
                </td>
            </tr>
        )
    })

    return (
        <>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">User's Data</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-wrap">
                                <table className="table table-responsive-xl">
                                <thead>
                                    <tr>
                                        <th>Select</th>
                                        <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>address</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableRows}
                                </tbody>
                                </table>
                                <div>
                                    <button>Export to pdf</button> &nbsp;
                                    <button>Export to Excel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )


}


export default Home;

