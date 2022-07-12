import { Link } from 'react-router-dom';
import Navbar from './components/navigation/navbar';
import Footer from './components/navigation/footer';
import CarCard from './components/home/car-card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import headerImg from './images/header.jpg';
import customerSupport from './images/customer-support.png';
import familyCar from './images/family-car.png';
import payment from './images/payment.png';
import RatingCard from './components/home/rating-card';

function App() {
  const [data, setData] = useState([]);

  const getAllCars = async () => {
    const response = await axios.get("https://karen-car-rental-backend.herokuapp.com/api/cars");
    setData(response.data.data);
  }

  useEffect(() => {
    getAllCars();
    console.log("Car", data);
  }, []);

  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
      <main className='bg-projectGray'>
        <section id='header' className='min-w-full bg-projectOrange'>
          <div className="w-full bg-cover bg-center h-[24rem] md:h-[34rem]" style={{
            backgroundImage: `url(${headerImg})`
          }}>
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
              <div className="text-center">
                <h1 className="text-2xl font-extrabold uppercase md:text-8xl text-projectOrange">karen</h1>
                <div className='w-auto mx-auto'>
                  <h4 className='text-white text-xl'>{"The Best In The Town, A Car Rent You Can Trust!"}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className='p-16 bg-white w-5/6 mx-auto mb-20 rounded-xl z-10 -mt-10 shadow-lg'>
          <div className='text-center text-projectNavy'>
            <h1 className='text-3xl font-bold'><span className='border-b-4 border-projectOrange py-2'>Why Choose Us</span></h1>
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-3 text-center mt-10 mb-5 xl:p-5 cursor-default'>
            <div className='shadow border-projectGray rounded-xl flex flex-col py-8 lg:m-2 hover:-translate-y-3 hover:shadow-2xl duration-300'>
              <div className='text-center items-center mx-auto'>
                <img className='mx-auto w-5/6' src={payment} />
              </div>
              <div className='p-7'>
                <h3 className='font-semibold text-xl text-projectNavy'>{"Cheap Price"}</h3>
                <p>
                  {"We offer the best prices in the city. We don't charge any extra fees for the use of the car."}
                </p>
              </div>
            </div>
            <div className='shadow border-projectGray rounded-xl flex flex-col py-8 m-2 hover:-translate-y-3 hover:shadow-2xl duration-300'>
              <div className='text-center items-center mx-auto'>
                <img className='mx-auto w-5/6' src={familyCar} />
              </div>
              <div className='p-7'>
                <h3 className='font-semibold text-xl text-projectNavy'>{"Good Cars"}</h3>
                <p>
                  {"We have a wide variety of cars to choose with very good conditions so you can travel safe and comfortly with us."}
                </p>
              </div>
            </div>
            <div className='shadow border-projectGray rounded-xl flex flex-col py-8 m-2 hover:-translate-y-3 hover:shadow-2xl duration-300'>
              <div className='text-center items-center mx-auto'>
                <img className='mx-auto w-5/6' src={customerSupport} />
              </div>
              <div className='p-7'>
                <h3 className='font-semibold text-xl text-projectNavy'>{"Customer Service"}</h3>
                <p>
                  {"We have a customer service that can help you with any questions you have 24/7."}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Customers Review */}
        <section className='p-16 bg-projectNavy mx-auto'>
          <div className='text-center text-projectOrange mb-2'>
            <h1 className='text-3xl font-bold'><span className='border-b-4 border-projectOrange py-2'>Customers Review</span></h1>
          </div>
          <div className='text-center p-5'>
            <p className='text-projectGray'>
              what they said about our service
            </p>
          </div>
          <div className='p-10 flex flex-col'>
            <RatingCard />
            <RatingCard />
            <RatingCard />
          </div>
        </section>

        {/* Our Cars */}
        <section id='cars' className='p-16 mx-auto bg-white xl:flex'>
          <div>
            <h1 className='xl:text-5xl text-2xl font-bold border-b-8 border-projectOrange py-3 text-projectNavy'>Our Cars</h1>
            <div className='my-5'>
              <h6>You can find some of our best cars here</h6>
            </div>
          </div>
          <div className='container flex w-8/12 mx-auto'>
            {data.map(car => (
              <div key={car._id} className='m-3'>
                <CarCard key={car._id} car={car} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div >
  );
}

export default App;
