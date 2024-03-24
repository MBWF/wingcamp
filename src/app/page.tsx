"use client";

import { Header } from "@/components/layout/header";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContainer, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { H2 } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full">
        <Header />
      </div>
      <CarouselContainer
        aspectRatio={12 / 4}
        images={[
          {
            src: "/flamengo-x-vasco.webp",
            alt: "Default Image",
          },
          {
            src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
            alt: "Default Image",
          },
        ]}
      />
      <div className="w-full p-12 mb-10">
        <H2>Próximos jogos</H2>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center h-40 justify-center p-6 w-full">
                      <span className="whitespace-nowrap w-full text-center text-primary">
                        Time Marcinho x Time Jefinho anseia por pica
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
