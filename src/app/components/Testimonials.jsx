import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Testimonials = () => {
  return (
    <div className="w-10/12 mx-auto py-10">
          <h2 className="text-center font-semibold text-orange-600 text-3xl pt-5 ">Testimonials</h2>
<p className="border-b-[2px] mx-auto border-orange-600 w-[150px]" />
<h2 className="text-xs font-semibold py-4 text-center">At SamLouis Real Estate, our clients' satisfaction is our top priority.</h2>
    <h2 className="text-xs font-semibold py-4 text-center"> Here's what some of our valued clients have to say about their experiences with us:</h2> 

<Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {[
            {
              id: 1,
              name: "Jane Doe",
              description: "SamLouis made the process of buying my first home in Lagos incredibly smooth and stress-free. Their team was knowledgeable, patient, and always available to answer my questions. I couldn't have asked for a better partner in this journey.",
            },
            {
              id: 2,
              name: "Emily Johnson",
              description: "From the initial consultation to the final sale, SamLouis exceeded my expectations. Their expertise in property sales and acquisitions ensured that I got the best deal possible. I highly recommend their services to anyone looking to buy or sell property in Lagos.",
            },
            {
              id: 3,
              name: "Michael Brown",
              description: "SamLouis handled the management of my rental properties with utmost efficiency. They took care of everything, from tenant relations to maintenance, allowing me to focus on other aspects of my business. Their team is trustworthy and highly competent.",
            },
            {
              id: 4,
              name: "Olivia Green",
              description: "The consulting services provided by SamLouis were invaluable during our real estate development project. Their strategic advice and market analysis helped us make informed decisions and achieve our project goals. We look forward to working with them again.",
           },
            {
              id: 5,
              name: "John Smith",
             
              description: "As a property investor, I rely on accurate market insights and reliable management services. SamLouis has consistently provided both, helping me grow my portfolio with confidence. Their professionalism and attention to detail are unmatched.",
          },
          ].map((service) => (
            <CarouselItem className="basis-1/3 py-8 flex items-center" key={service.id}>
              <Card className="p-6 h-[250px] mx-auto border-orange-600  cursor-pointer hover:scale-95 hover:transition-all duration-300" > 
                <div className="flex items-center gap-4">
                  <Badge className="bg-slate-700 text-white py-2 px-3" variant="outline">{service.id}</Badge>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                  <CardTitle className="text-sm text-orange-600  font-semibold">{service.name}</CardTitle>
                </div>
                <CardHeader>
                  <CardDescription className="text-black text-justify leading-7 text-xs">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-orange-600 text-white py-4 px-2" />
        <CarouselNext  className="bg-orange-600 text-white py-4 px-2"/>
      </Carousel>
    </div>
  )
}

export default Testimonials