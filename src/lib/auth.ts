import { getServerSession } from 'next-auth';

export async function getSession() {
  return await getServerSession();
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user;
}

export async function isAdmin() {
  const user = await getCurrentUser();
  return user?.role === 'admin';
}
