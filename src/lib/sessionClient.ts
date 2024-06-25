import { getSession } from "@/lib/actions";

// Server Component
export async function convertToClientSession() {
  const userData = await getSession(); // This might return a non-plain object

  // Convert userData to a plain object
  const clientSession = {
    isSignedIn: userData.isSignedIn,
    id: userData.id,
    name: userData.name,
    email: userData.email,
    token: userData.token,
  };

  return clientSession;
}
