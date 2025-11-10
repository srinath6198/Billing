import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../api/customerApi";

export const useCustomers = () => {
  const queryClient = useQueryClient();

  const customersQuery = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  const createCustomerMutation = useMutation({
    mutationFn: createCustomer,
    onSuccess: () => queryClient.invalidateQueries(["customers"]),
  });

  const updateCustomerMutation = useMutation({
    mutationFn: updateCustomer,
    onSuccess: () => queryClient.invalidateQueries(["customers"]),
  });

  const deleteCustomerMutation = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => queryClient.invalidateQueries(["customers"]),
  });

  return {
    customersQuery,
    createCustomerMutation,
    updateCustomerMutation,
    deleteCustomerMutation,
  };
};
