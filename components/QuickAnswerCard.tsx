import { CreditCard, Ticket, AlertCircle, CheckCircle } from 'lucide-react';
import { QuickAnswer } from '@/data/types';

interface QuickAnswerCardProps {
  answer: QuickAnswer;
}

export default function QuickAnswerCard({ answer }: QuickAnswerCardProps) {
  return (
    <div className="mx-6 mb-6 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Quick Answer
      </h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1 pt-1">
            <p className="font-semibold text-lg mb-1">
              {answer.primaryMethod === 'contactless' && 'Use any contactless card'}
              {answer.primaryMethod === 'ic_card' && 'Get Suica/Pasmo IC card'}
              {answer.primaryMethod === 'app' && 'Download the official app'}
            </p>
            <p className="text-gray-600 text-sm">
              {answer.primaryMethod === 'contactless' && 'Just tap at gates - no app needed'}
              {answer.primaryMethod === 'ic_card' && 'Works everywhere - makes life easy'}
              {answer.primaryMethod === 'app' && 'Mobile payment available'}
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Ticket className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1 pt-1">
            <p className="font-semibold text-lg mb-1">
              {answer.currency === 'EUR' && '€'}
              {answer.currency === 'GBP' && '£'}
              {answer.currency === 'JPY' && '¥'}
              {answer.singleRidePrice} per ride
            </p>
            <p className="text-gray-600 text-sm">
              Day pass {answer.currency === 'EUR' && '€'}
              {answer.currency === 'GBP' && '£'}
              {answer.currency === 'JPY' && '¥'}
              {answer.dayPassPrice}
            </p>
          </div>
        </div>

        {answer.warnings.map((warning, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-amber-600" />
            </div>
            <div className="flex-1 pt-1">
              <p className="font-semibold text-lg mb-1">Heads up</p>
              <p className="text-gray-600 text-sm">{warning}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}