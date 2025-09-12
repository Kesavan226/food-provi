import { useState, useEffect } from 'react'
import './App.css'

// Components
import Navigation from './components/Navigation'
import Home from './pages/Home'
import DonateFood from './pages/DonateFood'
import CharityRegistration from './pages/CharityRegistration'
import Inventory from './pages/Inventory'
import Distribution from './pages/Distribution'
import About from './pages/About'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [foodDonations, setFoodDonations] = useState([])
  const [charities, setCharities] = useState([])
  const [distributions, setDistributions] = useState([])

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedDonations = localStorage.getItem('foodDonations')
    const savedCharities = localStorage.getItem('charities')
    const savedDistributions = localStorage.getItem('distributions')

    if (savedDonations) {
      setFoodDonations(JSON.parse(savedDonations))
    } else {
      // Add sample data if no data exists
      const sampleDonations = [
        {
          id: 1,
          donorName: "Mario's Italian Restaurant",
          donorType: "restaurant",
          foodType: "Prepared Meals",
          quantity: "25 meals",
          description: "Fresh pasta dishes, salads, and bread",
          pickupLocation: "123 Main Street, Downtown",
          contactInfo: "(555) 123-4567",
          availableUntil: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
          specialInstructions: "Please call 30 minutes before pickup",
          status: "available",
          dateAdded: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
        },
        {
          id: 2,
          donorName: "Fresh Market Grocery",
          donorType: "grocery",
          foodType: "Fresh Produce",
          quantity: "50 lbs",
          description: "Mixed vegetables and fruits - slightly bruised but still good",
          pickupLocation: "456 Oak Avenue, Midtown",
          contactInfo: "manager@freshmarket.com",
          availableUntil: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(),
          specialInstructions: "Back entrance, ask for Sarah",
          status: "available",
          dateAdded: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
        },
        {
          id: 3,
          donorName: "Sweet Dreams Bakery",
          donorType: "bakery",
          foodType: "Baked Goods",
          quantity: "30 items",
          description: "Day-old bread, pastries, and cookies",
          pickupLocation: "789 Baker Street, Uptown",
          contactInfo: "(555) 987-6543",
          availableUntil: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(),
          specialInstructions: "Available after 6 PM",
          status: "distributed",
          dateAdded: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()
        }
      ]
      setFoodDonations(sampleDonations)
    }

    if (savedCharities) {
      setCharities(JSON.parse(savedCharities))
    } else {
      // Add sample charities
      const sampleCharities = [
        {
          id: 1,
          organizationName: "Hope Community Center",
          contactPerson: "Maria Rodriguez",
          organizationType: "Charity Organization",
          foodNeeded: "Prepared Meals",
          quantity: "20-30 meals",
          location: "321 Hope Street, Downtown",
          contactInfo: "(555) 234-5678",
          servingCapacity: "50 people",
          specialRequirements: "Vegetarian options preferred",
          frequency: "weekly",
          dateRegistered: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          id: 2,
          organizationName: "Downtown Homeless Shelter",
          contactPerson: "John Smith",
          organizationType: "Homeless Shelter",
          foodNeeded: "Any Available",
          quantity: "50+ meals",
          location: "654 Shelter Lane, Downtown",
          contactInfo: "john@downtownshelter.org",
          servingCapacity: "100 people",
          specialRequirements: "No dietary restrictions",
          frequency: "daily",
          dateRegistered: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          id: 3,
          organizationName: "St. Mary's Food Bank",
          contactPerson: "Sister Catherine",
          organizationType: "Church/Religious Organization",
          foodNeeded: "Fresh Produce",
          quantity: "30-40 lbs",
          location: "987 Church Street, Midtown",
          contactInfo: "(555) 345-6789",
          servingCapacity: "75 families",
          specialRequirements: "Fresh produce for families in need",
          frequency: "weekly",
          dateRegistered: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
        }
      ]
      setCharities(sampleCharities)
    }

    if (savedDistributions) {
      setDistributions(JSON.parse(savedDistributions))
    } else {
      // Add sample distribution
      const sampleDistributions = [
        {
          id: 1,
          donationId: 3,
          charityId: 1,
          donationDetails: {
            donorName: "Sweet Dreams Bakery",
            foodType: "Baked Goods",
            quantity: "30 items"
          },
          charityDetails: {
            organizationName: "Hope Community Center"
          },
          notes: "Delivered fresh baked goods for evening meal service",
          distributedBy: "Admin",
          dateDistributed: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
        }
      ]
      setDistributions(sampleDistributions)
    }
  }, [])

  // Save data to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('foodDonations', JSON.stringify(foodDonations))
  }, [foodDonations])

  useEffect(() => {
    localStorage.setItem('charities', JSON.stringify(charities))
  }, [charities])

  useEffect(() => {
    localStorage.setItem('distributions', JSON.stringify(distributions))
  }, [distributions])

  const addFoodDonation = (donation) => {
    const newDonation = {
      ...donation,
      id: Date.now(),
      status: 'available',
      dateAdded: new Date().toISOString()
    }
    setFoodDonations([...foodDonations, newDonation])
  }

  const addCharity = (charity) => {
    const newCharity = {
      ...charity,
      id: Date.now(),
      dateRegistered: new Date().toISOString()
    }
    setCharities([...charities, newCharity])
  }

  const addDistribution = (distribution) => {
    const newDistribution = {
      ...distribution,
      id: Date.now(),
      dateDistributed: new Date().toISOString()
    }
    setDistributions([...distributions, newDistribution])
    
    // Update food donation status
    setFoodDonations(foodDonations.map(donation => 
      donation.id === distribution.donationId 
        ? { ...donation, status: 'distributed' }
        : donation
    ))
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home 
          totalDonations={foodDonations.length}
          totalCharities={charities.length}
          totalDistributions={distributions.length}
          onPageChange={setCurrentPage}
        />
      case 'donate':
        return <DonateFood onAddDonation={addFoodDonation} />
      case 'charity':
        return <CharityRegistration onAddCharity={addCharity} />
      case 'inventory':
        return <Inventory 
          donations={foodDonations}
          charities={charities}
          onUpdateDonation={setFoodDonations}
        />
      case 'distribution':
        return <Distribution 
          donations={foodDonations.filter(d => d.status === 'available')}
          charities={charities}
          distributions={distributions}
          onAddDistribution={addDistribution}
        />
      case 'about':
        return <About />
      default:
        return <Home 
          totalDonations={foodDonations.length}
          totalCharities={charities.length}
          totalDistributions={distributions.length}
          onPageChange={setCurrentPage}
        />
    }
  }

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      </div>
  )
}

export default App
