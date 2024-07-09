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

const Consulting = () => {
  return (
    <div className="w-10/12 mx-auto py-10">
      <h2 className="text-center font-semibold text-orange-600 text-3xl pt-5 pb-1">Our Services</h2>
      <p className="border-b-[2px] mx-auto border-orange-600 w-[150px] mb-4" />
      <h2 className="text-xs font-semibold py-4 text-center">We priotize delivering excellent quality construction and real estate services</h2>
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {[
            {
              id: 1,
              title: "Property Sales and Acquisitions",
               icon: <FcSalesPerformance />,
              description: "Marketing properties for sale through various channels, including online listings, print media, and open houses",
              content: "Assisting buyers in finding and purchasing properties, including negotiating offers and facilitating inspections.",
              footer: "Helping sellers prepare their properties for sale, determining listing prices, and negotiating with potential buyers.",
            },
            {
              id: 2,
              title: "Property Management",
              icon: <FcSalesPerformance />,
              description: "Rent Collection: Managing rental payments and ensuring timely collection.",
              content: "Vacancy Management: Marketing rental properties to minimize vacancy periods and finding suitable tenants.",
              footer: "Tenant Relations: Handling tenant inquiries, complaints, and lease agreements.",
            },
            {
              id: 3,
              title: "Real Estate Development",
              icon:<MdOutlineRealEstateAgent />,
              description: "Project Planning: Conducting feasibility studies, securing financing, and obtaining necessary permits and approvals.",
              content: "Construction Management: Overseeing the construction process, ensuring projects are completed on time and within budget.",
              footer: "Marketing and Sales: Promoting newly developed properties and managing the sales process.",
            },
            {
              id: 4,
              title: "Real Estate Investment",
              icon:<MdOutlineRealEstateAgent />,
              description: "Investment Analysis: Evaluating potential investment opportunities and conducting market research.",
              content: "Portfolio Management: Managing a portfolio of real estate assets, including acquisitions, dispositions, and performance monitoring.",
              footer: "Financial Planning: Providing financial advice and structuring deals to maximize returns on investment.",
            },
            {
              id: 5,
              title: "Consulting Services",
              icon:<TbBuildingEstate />,
              description: "Market Analysis: Providing insights into market trends, property values, and investment opportunities.",
              content: "Valuation Services: Conducting property appraisals to determine market value.",
              footer: "Advisory Services: Offering strategic advice on property acquisitions, developments, and dispositions.",
            },
          ].map((service) => (
            <CarouselItem className="basis-1/3" key={service.id}>
              <Card className="p-6 h-[350px] border-orange-600 cursor-pointer hover:scale-95 hover:transition-all duration-300" > 
                <div className="flex items-center gap-4">
                  <Badge className="bg-slate-700 text-white py-2 px-3" variant="outline">{service.id}</Badge>
                  {service.icon}
                  <CardTitle className="text-sm text-orange-600  font-semibold">{service.title}</CardTitle>
                </div>
                <CardHeader>
                  <CardDescription className="text-black text-justify text-xs">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-justify">{service.content}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-justify">{service.footer}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-orange-600 text-white py-4 px-2" />
        <CarouselNext  className="bg-orange-600 text-white py-4 px-2"/>
      </Carousel>
    </div>
  );
}

export default Consulting;
