import { useQuery } from "react-query";
import { api } from "../api";

export function useUsers(page: number){
  return (
    useQuery(['users', page], async () => {
      const { data, headers } = await api.get('users?page='+page);

      const totalCount = Number(headers['x-total-count']);
  
      const users = data.users.map(user => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })
        }
      });
  
      return {users, totalCount};
    }, {
      staleTime: 1000 * 5,
    })
  )
}