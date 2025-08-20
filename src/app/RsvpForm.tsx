// src/app/RsvpForm.tsx
'use client'; 

// CHANGE 1: We now import 'useActionState' from 'react'
import { useActionState } from 'react'; 
import { handleRsvp } from './actions';

const initialState = {
  message: '',
};

export function RsvpForm({ eventId }: { eventId: string }) {
  // CHANGE 2: We now call 'useActionState' instead of 'useFormState'
  const [state, formAction] = useActionState(handleRsvp, initialState);

  return (
    <form action={formAction} className="flex flex-col items-end space-y-2">
      <input type="hidden" name="eventId" value={eventId} />
      <div className="flex space-x-2">
        <button
          type="submit"
          name="status"
          value="Yes"
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Yes
        </button>
        <button
          type="submit"
          name="status"
          value="Maybe"
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Maybe
        </button>
        <button
          type="submit"
          name="status"
          value="No"
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          No
        </button>
      </div>
      {state.message && (
        <p className="text-sm text-gray-600 mt-2">{state.message}</p>
      )}
    </form>
  );
}