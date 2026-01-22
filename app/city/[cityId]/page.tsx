import { notFound } from 'next/navigation';
import { getCityById } from '@/data/cities';
import CityHeader from '@/components/CityHeader';
import QuickAnswerCard from '@/components/QuickAnswerCard';
import TicketOptions from '@/components/TicketOptions';
import AirportSection from '@/components/AirportSection';
import GoodToKnow from '@/components/GoodToKnow';

export default function CityPage({ params }: { params: { cityId: string } }) {
  const city = getCityById(params.cityId);
  
  if (!city) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-12">
      <CityHeader city={city} />
      <div className="mt-6">
        <QuickAnswerCard answer={city.quickAnswer} />
        <TicketOptions tickets={city.tickets} />
        <AirportSection airport={city.airport} />
        <GoodToKnow items={city.goodToKnow} />
      </div>
    </main>
  );
}