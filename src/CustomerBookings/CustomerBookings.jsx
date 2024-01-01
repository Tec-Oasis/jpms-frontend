import { Container } from 'react-bootstrap'
import PropertyCard from './PropertyCard/PropertyCard'

const propertyData = [
  {
    name: 'Property 1',
    starting_date: '24 Apr 2023',
    ending_date: '24 October 2023',
    status: 'Rent Due',
    address: 'Dubai',
    rent: 1200,
  },
  {
    name: 'Property 2',
    starting_date: '10 Jan 2023',
    ending_date: '10 July 2023',
    status: 'Occupied',
    address: 'New York',
    rent: 2000,
  },
  {
    name: 'Property 3',
    starting_date: '15 May 2023',
    ending_date: '15 November 2023',
    status: 'Vacant',
    address: 'London',
    rent: 1500,
  },
  {
    name: 'Property 4',
    starting_date: '1 Sep 2023',
    ending_date: '1 March 2024',
    status: 'Under Maintenance',
    address: 'Paris',
    rent: 1800,
  },
]

const CustomerBookings = () => {
  return (
    <>
      <Container>
        <p className="h1" style={{ padding: '16px 0' }}>
          My Bookings
        </p>
        <p className="h3" style={{ marginBottom: '24px' }}>
          Active Contracts
        </p>
        {propertyData.map((property) => (
          <div style={{ marginBottom: '24px' }}>
            <PropertyCard property={property} />
          </div>
        ))}
      </Container>
    </>
  )
}

export default CustomerBookings
