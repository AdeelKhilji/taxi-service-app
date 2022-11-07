import Head from 'next/head'
import { render } from 'react-dom'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
        <Head>
          <title>Taxi Service App</title>
          <meta name="Taxi Service App" content="This App created by next js and tailwind, for contacts and booking" />
        </Head>
        {/* Jumbotron */}
        <div className=" p-32 text-center bg-gray-100 text-gray-700 ">
          <h2 className="font-semibold text-4xl mb-4">TAXI SERVICE</h2>
          <h4 className="font-semibold text-xl mb-6">Place holder for one liner</h4>
          <a href="tel:123-456-7890" className="inline-block px-8 py-5 mb-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light">
            BOOK NOW
          </a>
        </div>
        {/* Jumbotron */}
        <div class="my-10 flex justify-center">
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/590059/pexels-photo-590059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card 1</h5>
              <p class="text-gray-700 text-base mb-4">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </>
  )
}