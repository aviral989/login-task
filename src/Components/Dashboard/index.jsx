
import React, { useState, useEffect } from 'react';
import FormInputField from '../utility/FormInputField';
import axios from 'axios'
function Dashboard({

}) {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/users?page=${page}&limit=${limit}`); // Adjust page and pageSize as needed
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
            }
        };

        fetchUsers();
    }, [page]);

    


    return (
        <div className='dashboard__container'>
            <div className="dashboard__box">
                <div className="dashboard__heading"> Please mark your interests! </div>
                <div className="dashboard__sub-sub-heading"> We will keep you notified. </div>
                {loading 
                ? <div>
                    {[1,2,3,4,5,6].map(()=><div style={{ height:'10px' , width:'40%', marginBottom:'20px' }} className="loadingBlock"></div> )}
                     
                </div> 
                : <>   
                 <div className="dashboard__form">
                    <div className="dashboard__sub-heading"> My saved interests! </div>


                    {users?.users?.length &&users.users.map((user) =>
                        <div className='dashboard__form__row'>
                            <input className='dashboard__form__row-checkbox' type="checkbox" id="scales" name="scales" checked={user.checked} />
                            <label for="scales">{user.name}</label>
                        </div>)}

                </div>
                <div class="pagination">
                    <a onClick={()=> setPage(page - 2)} href="#">{'<<'}</a>
                    <a onClick={()=> setPage(page - 1)} href="#">{'<'}</a>
                    {Array(Number(users.totalPages || 0)).fill('').map((item, index) => <a className={index + 1 === page && 'bold__element'} onClick={() => {
                        setPage(index + 1)
                    }} href="#">{index + 1}</a>)}

                    <a onClick={()=> setPage(page + 1)} href="#">{'>'}</a>
                    <a onClick={()=> setPage(page + 2)} href="#">{'>>'}</a>

                </div>
                </>}
            
            </div>

        </div>
    );
}


export default (Dashboard);
