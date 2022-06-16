import { useState } from 'react';

const US1 = () =>  {
    const [tenantId, setTenantId] = useState("");
    const [houseData, setHouseData] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://tychondi.dk/exam_Tenant/api/user/tenantsRentals/${tenantId}`)
            .then(response => response.json())
            .then(data => {
                setHouseData(data);
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Enter ID of rentalAgreement and you'll see all details about the house.
                <br/>
                <input
                    style={{marginLeft: "38%"}}
                    type="text"
                    value={tenantId}
                    onChange={(e) => setTenantId(e.target.value)}
                />
            </p>
            <br/>
            <input
                style={{marginLeft: "38%"}}
                type="submit" />
            <br/>
            <div style={{marginLeft: "5%"}}>
                <p>Details about Rental Agreements!</p>
                <p>{houseData}</p>
            </div>
            <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
        </form>
    )
}

const US2 = () =>  {
    const [rentalId, setRentalId] = useState("");
    const [houseId, setHouseId] = useState("");
    const [houseAddress, setHouseAddress] = useState("");
    const [houseCity, setHouseCity] = useState("");
    const [houseNumOfRooms, setHouseNumOfRooms] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://tychondi.dk/exam_Tenant/api/user/house/${rentalId}`)
            .then(response => response.json())
            .then(data => {
                setHouseId(data.id)
                setHouseAddress(data.address)
                setHouseCity(data.city)
                setHouseNumOfRooms(data.numOfRooms)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Enter ID of rentalAgreement and you'll see all details about the house.
                <br/>
                <input
                    style={{marginLeft: "38%"}}
                    type="text"
                    value={rentalId}
                    onChange={(e) => setRentalId(e.target.value)}
                />
            </p>
            <br/>
            <input
                style={{marginLeft: "38%"}}
                type="submit" />
            <br/>
            <div style={{marginLeft: "5%"}}>
                <p>Details about house!</p>
                <p>{houseId}</p>
                <p>{houseAddress}</p>
                <p>{houseCity}</p>
                <p>{houseNumOfRooms}</p>
            </div>
        </form>
    )
}

export {US1, US2}