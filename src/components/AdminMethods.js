import { useState } from 'react';

const US3 = () =>  {
    const [houseId, setHouseId] = useState("");


    return (
        <form>
            <p>Enter ID of a house to see all tenants currently living there:
                <br/>
                <input
                    style={{marginLeft: "38%"}}
                    type="text"
                    value={houseId}
                    onChange={(e) => houseId(e.target.value)}
                />
                <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
            </p>
        </form>
    )
}

const US4_Home = () =>  {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [numOfRooms, setNumOfRooms] = useState(0);

    console.log(address)
    console.log(city)
    console.log(numOfRooms)

    async function handleClick() {

        // Send data to the backend via POST
        fetch('https://tychondi.dk/exam_Tenant/api/admin/house/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: {address},
                secondParam: {city},
                thirdParam: {numOfRooms}
            })
        })
    }

    return (
        <form>
            <h2>Create a new Rental Agreement!
                <h2>First, start with a house</h2>
                <br/>
                <h2>Address</h2>
                <input
                    style={{marginLeft: "38%"}}
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <br/>
                <h2>City</h2>
                <input
                    style={{marginLeft: "38%"}}
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <br/>
                <h2>Number of Rooms</h2>
                <input
                    style={{marginLeft: "38%"}}
                    type="number"
                    value={numOfRooms}
                    onChange={(e) => setNumOfRooms(e.target.valueAsNumber)}
                />

                <div onClick={handleClick}
                     type={"submit"}
                     style={{
                    marginLeft: '40%',
                    marginTop: '2em',
                    textAlign: 'center',
                    width: '100px',
                    border: '1px solid gray',
                    borderRadius: '5px'
                }}>
                    Send data to backend
                </div>
                <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
            </h2>
        </form>
    )
}

const US4_Rental = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [annualPrice, setAnnualPrice] = useState("");
    const [deposit, setDeposit] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [tenants, setTenants] = useState("");

    return (
        <form>
            <h2>Second, make an Rental Agreement
                <h2>Start Date</h2>
                <input
                    style={{marginLeft: "38%"}}
                    type="text"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <br/>
                <h2>End Date</h2>
                <input
                    style={{marginLeft: "38%"}}
                    type="text"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <br/>
                <h2>Annual Price</h2>
                <input
                    style={{marginLeft: "38%"}}
                    type="number"
                    value={annualPrice}
                    onChange={(e) => setAnnualPrice(e.target.value)}
                />
                <br/>
                <h2>Deposit</h2>
                <input
                    style={{marginLeft: "38%"}}
                    type="number"
                    value={deposit}
                    onChange={(e) => setDeposit(e.target.value)}
                />
                <br/>
                <h2>Contact Person</h2>
                <input
                    style={{marginLeft: "38%"}}
                    type="text"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                />
                <br/>
                <h2>Tenants</h2>
                <input
                    style={{marginLeft: "38%"}}
                    type="text"
                    value={tenants}
                    onChange={(e) => setTenants(e.target.value)}
                />
            </h2>
        </form>
    )
}

const US4_Tenant = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [job, setJob] = useState("");
    const [rentalAgreements, setRentalAgreements] = useState("");

    return (
        <form>
            <h2>Third and final, register a Tenant here</h2>
            <h2>Name</h2>
            <input
                style={{marginLeft: "38%"}}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <h2>Phone Number</h2>
            <input
                style={{marginLeft: "38%"}}
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br/>
            <h2>Job</h2>
            <input
                style={{marginLeft: "38%"}}
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <br/>
            <h2>Rental Agreements</h2>
            <input
                style={{marginLeft: "38%"}}
                type="text"
                value={rentalAgreements}
                onChange={(e) => setRentalAgreements(e.target.value)}
            />
            <br/>
        </form>
    )
}

const US5 = () =>  {
    const [rentalId, setRentalId] = useState("");

    console.log(rentalId);

    return (
        <form>
            <p>Enter ID of rentalAgreement to change tenant
                <br/>
                <input
                    style={{marginLeft: "38%"}}
                    type="text"
                    value={rentalId}
                    onChange={(e) => setRentalId(e.target.value)}
                />
            </p>
        </form>
    )
}

const US7 = () =>  {
    const [rentalIdToDelete, setRentalIdToDelete] = useState("");

    console.log(rentalIdToDelete);

    return (
        <form>
            <p>Enter ID of rentalAgreement you'd like to delete
                <br/>
                <input
                    style={{marginLeft: "38%"}}
                    type="text"
                    value={rentalIdToDelete}
                    onChange={(e) => setRentalIdToDelete(e.target.value)}
                />
            </p>
        </form>
    )
}

export {US3, US4_Home, US4_Rental, US4_Tenant, US5, US7}