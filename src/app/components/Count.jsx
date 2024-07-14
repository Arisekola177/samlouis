'use client'
import CountUp from 'react-countup';

const CounterSection = () => {
  return (
    <section className="w-full bg-white py-8 flex flex-col items-center animate-fadeIn">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Listings Counter */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">
              <CountUp end={1000} duration={2} separator="," />
              <span className="text-xl text-purple-600">+</span>
            </div>
            <div className="text-sm font-medium ">Listings</div>
          </div>
        </div>
        {/* Happy Customers Counter */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">
              <CountUp end={500} duration={2} separator="," />
              <span className="text-xl text-purple-600">+</span>
            </div>
            <div className="text-sm font-medium ">Happy Customers</div>
          </div>
        </div>
        {/* Years of Experience Counter */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">
              <CountUp end={5} duration={2} separator="," />
              <span className="text-xl text-purple-600">+</span>
            </div>
            <div className="text-sm font-medium">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
