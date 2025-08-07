import './Admin.css';
import { useEffect, useState } from 'react';
import axios from '../../api.js';

const Admin = () => {
    const [collectionData, setCollectionData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPickups = async () => {
            try {
                const response = await axios.get('/collections');
                setCollectionData(response.data);
            } catch (error) {
                console.error("Error fetching pickup data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPickups();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this pickup?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`/collections/${id}`);
            // Remove the deleted item from the table
            setCollectionData(prev => prev.filter(item => item._id !== id));
        } catch (error) {
            console.error("Failed to delete pickup:", error);
        }
    };

    return (
        <div className="admin-table-wrapper">
            <h2>Scheduled Pickups</h2>

            {loading ? (
                <p>Loading pickups...</p>
            ) : collectionData.length === 0 ? (
                <p>No pickup requests yet.</p>
            ) : (
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>User Type</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Bottle Count</th>
                            <th>Pickup Date</th>
                            <th>Pickup Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collectionData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.userType}</td>
                                <td>{data.name}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.address}</td>
                                <td>{data.bottleCount || 0}</td>
                                <td>{new Date(data.pickupDate).toLocaleDateString()}</td>
                                <td>{data.pickupTime}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(data._id)}
                                        style={{ color: 'red' }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Admin;
