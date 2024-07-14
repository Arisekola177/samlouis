import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {FcSalesPerformance} from 'react-icons/fc'
import {MdOutlineRealEstateAgent} from 'react-icons/md'
import {TbBuildingEstate} from 'react-icons/tb'
import housewood from '../../../public/Images/housewood.jpg'
import Image from "next/image";
const Consulting = () => {
  return (
    <div className="w-full bg-purple-600 pb-10">
    <div className="w-10/12 xs:px-3 md:px-0 mx-auto py-10">
      <h2 className="text-center font-semibold text-white lg:text-3xl xs:text-xl pt-5 pb-1">Our Services</h2>
      <p className="border-b-[2px] mx-auto border-white w-[150px] mb-4" />
      <h2 className="text-xs font-semibold py-4 text-white text-center">We priotize delivering excellent quality construction and real estate services</h2>
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {[
            {
              id: 1,
              title: "Property Sales and Acquisitions",
               icon: <FcSalesPerformance />,
              description: "Marketing properties for sale through various channels, including online listings, print media, and open houses. Assisting buyers in finding and purchasing properties, including negotiating offers and facilitating inspections.Helping sellers prepare their properties for sale, determining listing prices, and negotiating with potential buyers.",
             
            },
            {
              id: 2,
              title: "Property Management",
              icon: <FcSalesPerformance />,
              description: " Managing rental payments and ensuring timely collection. Marketing rental properties to minimize vacancy periods and finding suitable tenants. Handling tenant inquiries, complaints, and lease agreements.",
            },
            {
              id: 3,
              title: "Real Estate Development",
              icon:<MdOutlineRealEstateAgent />,
              description: " Conducting feasibility studies, securing financing, and obtaining necessary permits and approvals. Overseeing the construction process, ensuring projects are completed on time and within budget. Promoting newly developed properties and managing the sales process.",
            },
            {
              id: 4,
              title: "Real Estate Investment",
              icon:<MdOutlineRealEstateAgent />,
              description: " Evaluating potential investment opportunities and conducting market research.  Managing a portfolio of real estate assets, including acquisitions, dispositions, and performance monitoring. Providing financial advice and structuring deals to maximize returns on investment.",
            },
            {
              id: 5,
              title: "Consulting Services",
              icon:<TbBuildingEstate />,
              description: " Providing insights into market trends, property values, and investment opportunities. Conducting property appraisals to determine market value.  Offering strategic advice on property acquisitions, developments, and dispositions.",
            },
          ].map((service) => (
            <CarouselItem className="md:basis-1/3 xs:basis-[100%]" key={service.id}>
              <Card className="p-4 h-[480px] border-purple-600 mx-auto cursor-pointer hover:bg-slate-700 text-black hover:text-white  hover:scale-95 hover:transition-all duration-300" >
                <div className="flex items-center justify-center py-3">
                <Image src={housewood}  width={300} height={200} alt="housewood" />
                </div>
               
                <div className="flex items-center justify-center py-2 gap-4">
                  <Badge className="bg-slate-700 text-white py-2 px-3" variant="outline">{service.id}</Badge>
                  {service.icon}
                  <CardTitle className="md:text-sm xs:text-xs text-purple-600 font-semibold">{service.title}</CardTitle>
                </div>
                <CardHeader>
                  <p className="text-xs font-semibold leading-4 text-justify">{service.description}</p>
                </CardHeader>
             
              </Card>
             
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-purple-600 text-white py-4 px-2" />
        <CarouselNext  className="bg-purple-600 text-white py-4 px-2"/>
      </Carousel>
    </div>
    </div>
  );
}

export default Consulting;
