import Navbar from '../../components/Navbar/Navbar'
import './Travel.scss'

const Travel = () => {
    return (
        <div className="travel-page w-full h-screen flex flex-col justify-center items-center p-10 md:p-16">
            <Navbar />
            <h1 className="pt-10 pb-6">See where I've been!</h1>
            <iframe
                src="https://www.google.com/maps/d/embed?mid=1Exu3pJ-4B8rmlmXAgPs3i2lniJV9F24&ehbc=2E312F"
                className="w-full max-w-1020 h-full"
            ></iframe>
        </div>
    )
}

export default Travel