// src/app/actions.ts
'use server';

import { supabase } from './lib/supabaseClient';
import { revalidatePath } from 'next/cache';

// The function signature is updated to work with useFormState
export async function handleRsvp(
  prevState: { message: string },
  formData: FormData
) {
  const eventId = formData.get('eventId') as string;
  const status = formData.get('status') as 'Yes' | 'No' | 'Maybe';
  
  console.log(`RSVPing to event ${eventId} with status ${status}`);

  // Make sure your user ID is still here
  const userId = '072900ae-0854-4531-a1cc-dc8523b45159';

  const { error } = await supabase
    .from('rsvps')
    .upsert(
      { user_id: userId, event_id: eventId, status: status },
      { onConflict: 'user_id, event_id' }
    );

  if (error) {
    console.error('Error saving RSVP:', error);
    return { message: `Error: ${error.message}` }; // Return an error message
  }

  revalidatePath('/');
  
  // Return a success message!
  return { message: `Success! Your RSVP of '${status}' has been recorded.` };
}