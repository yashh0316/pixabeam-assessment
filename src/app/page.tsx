// src/app/page.tsx
import { supabase } from './lib/supabaseClient';

// This tells Next.js to always fetch fresh data
export const revalidate = 0;

export default async function Home() {
  // Fetch data from the 'events' table
  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: true });

  if (error) {
    return <p>Could not fetch events. Error: {error.message}</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Upcoming Events</h1>
      <div className="w-full max-w-4xl space-y-6">
        {events?.map((event) => (
          <div
            key={event.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold text-indigo-600">{event.title}</h2>
              <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {new Date(event.event_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>City: <strong className="text-gray-700">{event.city}</strong></span>
              {/* This is where an RSVP button would go! */}
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">RSVP Yes</button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Maybe</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">No</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}